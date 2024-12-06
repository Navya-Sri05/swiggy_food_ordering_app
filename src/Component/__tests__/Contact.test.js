
import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("all the testcases for contact us page",()=>{
 test("Should load contact us page",()=>{
    render(<Contact />);
     const heading =screen.getByRole("heading");
     
  //ASsertion
     expect(heading).toBeInTheDocument();
     
 });
test("Should load button in contact us page",()=>{
    render(<Contact />);
    const button =screen.getByRole("button");
    //  const button=screen.getByText("Submit");
    // const button =screen.getByText("submit"); --->failed
     
  //ASsertion
     expect(button).toBeInTheDocument();
     
});
test("Should load input in contact us page",()=>{
    render(<Contact />);
    // const inputBox =screen.getByText("textBox");
    const inputName=screen.getByPlaceholderText("Name");
   
     
  //Assertion
     expect(inputName).toBeInTheDocument();
     
});
test("Should load two input Boxes on contact us page",()=>{ 
    render(<Contact />);
    // const inputBox =screen.getByText("textBox");
     const inputBoxes=screen.getAllByRole("textbox");
    // const inputBoxes=screen.getByRole("input");
    //multiple items--->use getAllByRole
    // for single item--->use getByRole  
    // console.log(inputBoxes);
    console.log(inputBoxes.length);


     
  //Assertion
     expect(inputBoxes[0]).toBeInTheDocument();
    //  expect(inputBoxes.length).toBe(2);
     
});
});