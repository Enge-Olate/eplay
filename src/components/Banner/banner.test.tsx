import { render, screen } from "@testing-library/react";
import Banner from ".";
import { MemoryRouter } from "react-router-dom";


test("Deve haver um link", ()=>{
    render(<MemoryRouter><Banner/></MemoryRouter>);
    const link = screen.getAllByRole("link");
    expect(link).toBeDefined()
})