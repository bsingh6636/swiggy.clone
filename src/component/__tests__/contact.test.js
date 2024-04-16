import {ContactUs} from "../ContactUs"
import "@testing-library/jest-dom"
import { render ,screen } from "@testing-library/react"

test("heading of contact" , ()=>{
    render(<ContactUs/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    
})


test("heading of contact",  () => { // Make the test function async
    render(<ContactUs/>)
    const button =  screen.getByRole("button")
    
    expect(button).toBeInTheDocument(); 
    // console.log(button)
})