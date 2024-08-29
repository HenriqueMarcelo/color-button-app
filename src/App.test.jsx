import { render, screen } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/dom";

test("button starts with correct color and text", () => {
  const {container} = render(<App />)
  // logRoles(container);
  const buttonElement = screen.getByRole('button', {name: /blue/i})
  expect(buttonElement).toHaveClass("red")
})

test("button has correct color after click", () => {
  
})

test("button has correct text after click", () => {

})


