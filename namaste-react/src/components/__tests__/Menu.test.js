import {MENU_DATA} from '../../mocks/data';
import {
  render,
  waitFor,
  fireEvent
} from '@testing-library/react';
import {
  Provider
} from 'react-redux';
import store from '../../utils/store';
import RestaurantMenu from '../RestaurantMenu';
import {
  StaticRouter
} from 'react-router-dom/server';
import '@testing-library/jest-dom';
import Header from '../Header';
import Cart from '../Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA)
    }
  })
});

 test('Add items to cart', async () => {
    const body = render(<StaticRouter>
      < Provider store = {
        store
      } > 
      <Header />
      <Cart />
      < RestaurantMenu / > </Provider>
    </StaticRouter>);  
    
      await waitFor(() => {
        expect(body.getByTestId("menu"))
      })
      const addBtn = body.getAllByTestId("addBtn");
     
      
      fireEvent.click(addBtn[0]);
    
    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-1items ");
  
  }) 
