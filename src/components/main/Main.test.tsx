/* eslint-disable testing-library/no-debugging-utils */
import renderWithProviders from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import Main from "../main/Main";
import songs from "../../api/mocks";

describe("Main component", () => {
  beforeEach(() => {
    jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});
  });
  
  const preloadedState = {
    songs,
    selected: songs[0],
  };
  
  test("renders correctly", async () => {
    renderWithProviders(<Main />, { preloadedState });

    const selectedId = screen.getByAltText(songs[0].id);
    const selectedName = screen.getByTestId(songs[0].name);
    const selectedArtist = screen.getByTestId(songs[0].artist);

    expect(selectedId).toBeInTheDocument();
    expect(selectedName).toBeInTheDocument();
    expect(selectedArtist).toBeInTheDocument();
  });
});
