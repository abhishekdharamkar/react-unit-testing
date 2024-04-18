import {render,screen} from "@testing-library/react"
import App from "./App"

test("Test First component",()=>{
  render(<App/>);
  const text =screen.getByText("Abhishek")
  expect(text).toBeInTheDocument();
})
