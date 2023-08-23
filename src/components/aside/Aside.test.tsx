/* eslint-disable testing-library/no-debugging-utils */
import renderWithProviders from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import Aside from "./Aside";
import songs from "../../api/mocks";

describe("Aside component", () => {
  const preloadedState = {
    songs,
  };
  test("renders correctly", async () => {
    renderWithProviders(<Aside />, { preloadedState });

    for (const song of songs) {
      const testSong = screen.getByTestId(song.id);
      expect(testSong).toBeInTheDocument();
    }
  });
});
