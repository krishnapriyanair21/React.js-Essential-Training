/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox"

test("Selecting the checkbox should change value of checked to true", ()=> {
    const {getByLabelText} = render(<Checkbox/>);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});