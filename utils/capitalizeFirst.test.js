import { capitalizeFirst } from "./capitalizeFirst";

describe("tests capitilize first letter in a word", () => {
    it("if data isn't pass should return null", async () => {
        expect(capitalizeFirst()).toBe("");
    });
    it('should return Google for google"', async () => {
        expect(capitalizeFirst("google")).toBe("Google");
    });
});
