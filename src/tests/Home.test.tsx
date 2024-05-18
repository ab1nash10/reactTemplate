import Layout from "@/Layout";
import { render, screen } from "@/utils/test-utils";

describe("Test", () => {
  it("testing the vitest", () => {
    render(<Layout />);
    const text = screen.getByText("light");
    expect(text).toBeInTheDocument();
  });
});
