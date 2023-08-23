/* eslint-disable testing-library/no-debugging-utils */
import renderWithProviders from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import Aside from "./Aside";
import songs from "../../api/mocks";

describe("Aside component", () => {
  test("renders correctly", async () => {
    renderWithProviders(<Aside />, {
      preloadedState: {
        songs,
      },
    });

    const label = await screen.findByText("Library");

    expect(label).toBeInTheDocument();
  });
});
