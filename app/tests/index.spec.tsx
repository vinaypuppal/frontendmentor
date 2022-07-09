import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Index from "../routes";

test("should render correctly", () => {
  const { container } = render(<Index />);
  expect(container).toMatchSnapshot();
});
