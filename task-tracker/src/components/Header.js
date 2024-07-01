import React from 'react';
import { createComponentFromJson } from './Button.js'

const Header = () => {
  const jsonData = [
    {
      type: "div",
      props: { className: "container" },
      children: [
        {
          type: "h1",
          props: {},
          children: "Hello, World!"
        },
        {
          type: "p",
          props: {},
          children: "This is a dynamically created React component."
        }
      ]
    }
  ];
  const MyComponent = createComponentFromJson(jsonData);
  return (
    <>
    <h1>Hello</h1>
    <MyComponent />
    </>
  );
  

}

Header.defaultProps = {
  title: "hello",
  color: "blue"
}

export default Header
