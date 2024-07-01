import React from 'react';

export  function createComponentFromJson(jsonData) {
    // map through the JSON data and create an array of React elements
    const elements = jsonData.map(item => {
      return React.createElement(item.type, item.props, item.children);
    });
  
    // return the array of elements as a React component
    return React.createElement('div', {}, elements);
  }

    
