import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import Page from "../app/page";

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("next/navigation", () => require("next-router-mock/navigation"));

describe("Home Page Tests", () => {
  it("Renders Home Page properly", () => {
    render(<Page />);

    screen.debug();
    const title = screen.getByText("awesome");
    const link = screen.getByRole("link", { name: /Get Started/i });

    expect(title).toBeInTheDocument();

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/subscriptions");
  });

  it('navigates to /subscriptions when "Get Started" is clicked', async () => {
    mockRouter.push("/");

    render(
      <MemoryRouterProvider>
        <Page />
      </MemoryRouterProvider>,
    );

    const link = screen.getByRole("link", { name: /Get Started/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/subscriptions");

    fireEvent.click(link);

    expect(mockRouter.asPath).toBe("/subscriptions");
  });
});
