import { useEffect, useRef, useState } from "react";
import { useStore } from "../../../store";
import clsx from "clsx";
import { BsPlay, BsSpeaker, BsPause } from "react-icons/bs";
import styles from "./Player.module.css";

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
    selected: { audio },
  } = useStore();

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
    <>
      <audio
        src={audio}
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
        {isPlaying ? (
          <BsPause
            onClick={togglePP}
            className={clsx(styles.mpControlsBtn, styles.mpControlsPause)}
          />
        ) : (
          <BsPlay
            onClick={togglePP}
            className={clsx(styles.mpControlsBtn, styles.mpControlsPlay)}
          />
        )}
      </div>

      <div className={styles.mpVolume}>
        <BsSpeaker className={styles.mpVolumeIcon} />
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolume}
          className={styles.mpVolumeInput}
        />
      </div>
    </>
  );
}
