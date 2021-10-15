import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    it("should render properly", () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
