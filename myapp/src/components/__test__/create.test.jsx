import { render } from '@testing-library/react';
import Create from '../create';
import { address } from 'address';
import { BrowserRouter } from 'react-router-dom';
describe("test_create_component", () => {

    test('component_render', () => {
        render(<BrowserRouter><Create /></BrowserRouter>);
    });
    test('component_render', () => {
     const { getByTestId }  = render(<BrowserRouter><Create /></BrowserRouter>);
     const emailField = getByTestId('testEmail')

     expect(emailField).toBeInTheDocument();
     
    });

})
