import Header from '../Header';
import {
  render
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('Logo should load on rendering header', () => {
  // Load Header
  const header = render( 
    <StaticRouter>
  <Provider store={store}> 
    <Header />
  </Provider> 
  </StaticRouter>);
  
  const logo = header.getAllByTestId("logo");
  // check if logo is there
  
  expect(logo[0].src).toBe("https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg")
});

test('Cart should have 0 item on rendering header', () => {
  // Load Header
  const header = render( 
    <StaticRouter>
  <Provider store={store}> 
    <Header />
  </Provider> 
  </StaticRouter>);
  
  const cart = header.getByTestId("cart");
  
  expect(cart.innerHTML).toBe("Cart-0items ");
});
