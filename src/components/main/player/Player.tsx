import React, { useEffect, useRef, useState } from "react";
import { BsPlay, BsPause } from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { TbRewindForward15, TbRewindBackward15 } from "react-icons/tb";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import styles from "./Player.module.css";
import AppContext from "../../../context";

const formatTime = (time: number) => {
  if (time && !Number.isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};

export default function Player() {
  const {
    state: { selected },
    dispatch,
  } = React.useContext(AppContext);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(60);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const playAnimationRef = useRef<number>(0);

  const handleVolume = (e: any) => {
    setVolume(Number(e.target.value));
  };

  const toggleMutedVolume = () => {
    if (volume === 0) {
      setVolume(60);
    } else {
      setVolume(0);
    }
  };

  const handleMetadata = () => {
    if (audioRef?.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = () => {
    if (audioRef?.current && progressBarRef?.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  const handleNextPrev = (isNext: boolean) => () => {
    if (isNext) {
      dispatch({ type: "NEXT_SONG" });
    } else {
      dispatch({ type: "PREV_SONG" });
    }
  };

  const handleBackwardForward = (isForward: boolean) => () => {
    if (audioRef?.current) {
      if (isForward) {
        audioRef.current.currentTime += 15;
      } else {
        audioRef.current.currentTime -= 15;
      }
    }
  };

  const togglePP = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const repeat = () => {
      if (
        audioRef?.current &&
        progressBarRef?.current &&
        playAnimationRef?.current
      ) {
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(currentTime);
        progressBarRef.current.value = String(currentTime);
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${(Number(progressBarRef.current.value) / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
      }
    };

    if (audioRef?.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [duration, isPlaying]);

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className={styles.mpPlayer}>
      <audio
        src={selected?.audio}
        ref={audioRef}
        onLoadedMetadata={handleMetadata}
        onEnded={() => {}}
      />

      <div className={styles.mpProgBar}>
        <span className={styles.mpProgBarCurrTime}>
          {formatTime(currentTime)}
        </span>
        <input
          className={styles.mpProgBarInput}
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <span className={styles.mpProgBarDuration}>{formatTime(duration)}</span>
      </div>

      <div className={styles.mpControls}>
        <MdSkipPrevious
          className={styles.mpControlsPrev}
          onClick={handleNextPrev(false)}
        />
        <TbRewindBackward15
          className={styles.mpControlsBack15}
          onClick={handleBackwardForward(false)}
        />
        {isPlaying ? (
          <BsPause onClick={togglePP} className={styles.mpControlsPause} />
        ) : (
          <BsPlay onClick={togglePP} className={styles.mpControlsPlay} />
        )}
        <TbRewindForward15
          className={styles.mpControlsForw15}
          onClick={handleBackwardForward(true)}
        />
        <MdSkipNext
          className={styles.mpControlsNext}
          onClick={handleNextPrev(true)}
        />
      </div>

      <div className={styles.mpVolume}>
        <span onClick={toggleMutedVolume}>
          {volume > 0 ? (
            <GiSpeaker className={styles.mpVolumeIcon} />
          ) : (
            <GiSpeakerOff className={styles.mpVolumeIcon} />
          )}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolume}
          className={styles.mpVolumeInput}
        />
      </div>
    </div>
  );
}
