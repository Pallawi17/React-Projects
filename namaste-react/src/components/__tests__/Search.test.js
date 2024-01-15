import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import Body from '../Body';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json:() => {return Promise.resolve(RESTAURANT_DATA)}
  })
});

test('Shimmer should load on home page', () => {
  const body = render(<StaticRouter>
    < Provider store = {
      store
    } > < Body / > </Provider>
  </StaticRouter>);  
  
  // console.log(body);
    
    const shimmer = body.getByTestId("shimmer");
    console.log(shimmer);
    {/* expect(shimmer).toBeInTheDocument(); */}
    expect(shimmer.children.length).toBe(10);

});

test('Restaurents should load on home page', async () => {
  const body = render(<StaticRouter>
    < Provider store = {
      store
    } > < Body / > </Provider>
  </StaticRouter>);  
  
  // console.log(body);
    
    await waitFor(() => {
      expect(body.getByTestId("search-btn"))
    })
    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);

});

{/* test('Search should load on home page',  () => {
  const body = render(<StaticRouter>
    < Provider store = {
      store
    } > < Body / > </Provider>
  </StaticRouter>);  
  
    
    const input = body.getByTestId("search-input");
    fireEvent.change(input, {target: {
      value: "food"
    }});
    
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
  
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(3);

}) */}


 test('Add items to cart', async () => {
       const body = render( < StaticRouter >
         <
         Provider store = {
           store
         } > < Body / > </Provider> </StaticRouter>);  
         
         await waitFor(() => {
           expect(body.getByTestId("search-btn"))
         }) 
         const input = body.getByTestId("search-input"); fireEvent.change(input, {
           target: {
             value: "Kathi"
           }
         });
         
         const searchBtn = body.getByTestId("search-btn"); fireEvent.click(searchBtn);
         
         const resList = body.getByTestId("res-list"); expect(resList.children.length).toBe(1);
       
       })