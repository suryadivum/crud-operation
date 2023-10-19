import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../index";
import Create from "../create";
// import { getUser } from "../api";

// const getUser = jest.fn().mockResolvedValueOnce([
//   ["test@example.com", "Test", "User", "1234567890", "1990-01-01"],
//   ["example@test.com", "Example", "User", "9876543210", "1995-01-01"],
// ]);

// // Mock the module that contains the getUser function
// jest.mock('./userApi', () => ({ getUser }));
describe("test_create_component", () => {
  test("component_render", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  it('should navigate to "/create" when "Add" button is clicked', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const addButton = getByTestId("testAddBtn");

    fireEvent.click(addButton);

    expect(window.location.pathname).toBe("/create");
  });
  test("Edit_page", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Create />
      </BrowserRouter>
    );
    // const backBtn = getByTestId("testBackBtn");
    // fireEvent.click(backBtn);
    const emailField = getByTestId("testEmail");
    await fireEvent.change(emailField, {
      target: { value: "test@example.com" },
    });
    const fnameField = getByTestId("testFname");
    await fireEvent.change(fnameField, { target: { value: "test" } });
    const lnameField = getByTestId("testLname");
    await fireEvent.change(lnameField, { target: { value: "example" } });
    const mobileField = getByTestId("testMobile");
    await fireEvent.change(mobileField, { target: { value: 9876543210 } });
    const dobField = getByTestId("testDob");
    await fireEvent.change(dobField, { target: { value: "1999-01-01" } });
    const addrField = getByTestId("testAddress");
    await fireEvent.change(addrField, { target: { value: "example address" } });
    const submitBtn = getByTestId("testBtn");
    await fireEvent.click(submitBtn);
  });
});
