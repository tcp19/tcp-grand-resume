import "../matchMedia.mock";
import { render } from "@testing-library/react";
import Header, { MobileNav, MobileNavItem } from "./Header";

describe("Header", () => {
    it("should render the component properly", () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });

    it("should render the MobileNav component properly", () => {
        const { container } = render(<MobileNav />);
        expect(container).toMatchSnapshot();
    });

    it("should render the MobileNavItem component properly", () => {
        const { container } = render(
            <MobileNavItem label="Contribute a Template" href="#" key={1} />
        );
        expect(container).toMatchSnapshot();
    });
});
