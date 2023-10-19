import { render, fireEvent } from "@testing-library/react";
import Create from "../create";
import { BrowserRouter } from "react-router-dom";
describe("test_create_component", () => {
  test("component_render", () => {
    render(
      <BrowserRouter>
        <Create />
      </BrowserRouter>
    );
  });
  test("component_render", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Create />
      </BrowserRouter>
    );
    const backBtn = getByTestId("testBackBtn");
    fireEvent.click(backBtn);
    const emailField = getByTestId("testEmail");
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    const fnameField = getByTestId("testFname");
    fireEvent.change(fnameField, { target: { value: "test" } });
    const lnameField = getByTestId("testLname");
    fireEvent.change(lnameField, { target: { value: "example" } });
    const mobileField = getByTestId("testMobile");
    fireEvent.change(mobileField, { target: { value: 9876543210 } });
    const dobField = getByTestId("testDob");
    fireEvent.change(dobField, { target: { value: "1999-01-01" } });
    const addrField = getByTestId("testAddress");
    fireEvent.change(addrField, { target: { value: "example address" } });
    const submitBtn = getByTestId("testBtn");
    fireEvent.click(submitBtn);
  });
});
