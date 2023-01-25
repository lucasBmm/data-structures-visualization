import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer tests", () => {
    test("Should render component", () => {
        const component = render(<Footer />);

        expect(component).toBeTruthy();
    });
});

export {}