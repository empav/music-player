import { screen, waitFor } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./utils/test-utils";

describe("App", () => {
  beforeEach(() => {
    jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});
  });
  test("renders correctly after spinner", async () => {
    renderWithProviders(<App />);

    await waitFor(
      () => {
        const linkElement = screen.getByText("Library");
        expect(linkElement).toBeInTheDocument();
      },
      { timeout: 4000 }
    );
  });
});
