import { render,screen  } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render Restaurant card  component with props data",()=>{
    render(<RestaurantCard resData ={MOCK_DATA} />);

   const name= screen.getByText("Kwality Walls Ice Cream and More");
//    const name= screen.getByText("saji");

   expect(name).toBeInTheDocument();

});