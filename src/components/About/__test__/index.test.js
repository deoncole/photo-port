import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
// import the component to test
import About from "..";

// cleanup after each test to prevent memory leaks
afterEach(cleanup);

// use the describe function to declare the compnent for testing
describe('About component', ()=> {
    // First test
    it('renders', ()=> {
        render(<About/>);
    });
    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})