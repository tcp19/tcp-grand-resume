import { formatDate } from "./formatDate";

describe("tests format date", () => {
    it("if data isn't pass should return null", async () => {
        expect(formatDate()).toBe("");
    });
    it('should return invalid date for "21st october"', async () => {
        expect(formatDate("21st october")).toBe("Invalid Date");
    });
});
