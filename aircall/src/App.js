import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Call from './Call.js';

const App = () => {
  return (
    <div class="flex flex-col justify-between h-screen w-96 bg-slate-800 text-white">
      <div className="">
      <Header></Header>
      </div>
    <div class="flex flex-row justify-center h-12 w-96 shadow-md">
      <Navbar></Navbar>
    </div>
    <div class="flex flex-row flex-1 justify-center">
      <Call></Call>
    </div>
    <div class="flex flex-row justify-center h-12 w-96 shadow-md">
      <Footer></Footer>
    </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;