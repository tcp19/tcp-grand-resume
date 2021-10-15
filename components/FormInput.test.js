import { render, fireEvent, screen } from "@testing-library/react";
import FormInput from "./FormInput";

describe("FormInput", () => {
    it("should render an <input /> element", () => {
        render(<FormInput placeholder="First name"/>);
        expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
    });

    it("should call the onChange event if passed", () => {
        const mockOnChange = jest.fn();
        render(<FormInput placeholder="First name" onChange={mockOnChange} />);
        const input = screen.getByPlaceholderText(/first name/i);
        fireEvent.change(input, {
            target: { value: "Roger" },
        });
        expect(mockOnChange).toBeCalled();
    });

    it("should call the update the value onChange", () => {
        const mockOnChange = jest.fn();
        render(<FormInput placeholder="First name" onChange={mockOnChange} />);
        const input = screen.getByPlaceholderText(/first name/i);
        fireEvent.change(input, {
            target: { value: "Roger" },
        });
        expect(input.value).toBe("Roger");
    });
});
