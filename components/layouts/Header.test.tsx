//import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import  Header  from "./Header";

describe("Header component", () => {
  const FakeComponentUsedInTest = () => <div>Im a fake component</div>;

  it("should render a h1", () => {
    render(<Header as="h1">Header 1</Header>);
    const header = screen.getByRole("heading");

    expect(header.tagName).toBe("H1");
  });

  it("should render a h2", () => {
    render(<Header as="h2">Header 2</Header>);
    const header = screen.getByRole("heading");

    expect(header.tagName).toBe("H2");
  });

  it("should render a h3 with custom class", () => {
    render(
      <Header className="custom" as="h3">
        Header 3
      </Header>
    );
    const header = screen.getByRole("heading");

    expect(header.tagName).toBe("H3");
    expect(header).toHaveClass("custom");
  });

  it("should render a h4 with tab index", () => {
    render(
      <Header as="h4" tabIndex={0}>
        Header 4
      </Header>
    );
    const header = screen.getByRole("heading");

    expect(header.tagName).toBe("H4");
    expect(header.tabIndex).toBe(0);
  });

  it("should render a h5 with component as content", () => {
    render(
      <Header as="h5">
        <FakeComponentUsedInTest />
      </Header>
    );
    const header = screen.getByRole("heading");

    expect(header.tagName).toBe("H5");
    expect(header.textContent).toBe("Im a fake component");
  });

  it("should render a h6 snapshot", () => {
    //const { container } =
    render(<Header as="h6">Header 6</Header>);
    const header = screen.getByRole("heading");

    expect(header.tagName).toBe("H6");
    // expect(container.firstChild).toMatchSnapshot();
  });

  // it("should throw an error for h7", async () => {
  //   render(<Header as="H7">Header 7</Header>);
  //   expect().toThrowError();
  // });
});
