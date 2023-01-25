import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar tests", () => {
    test("Should render component", () => {
        const component = render(<Navbar />);

        expect(component).toBeTruthy();
    });

    test("Should have links", () => {
        const component = render(<Navbar />);

        const links: HTMLElement[] = screen.getAllByRole('listitem');

        expect(links).toHaveLength(1);
    });
});

export {}