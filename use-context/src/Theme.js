import React from "react";
import { useTheme, useThemeUpdate } from './ThemeProvider';

export default function Theme() {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? '#000' : '#ccc',
    color: darkTheme ? '#fff' : '#000',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Function Theme</div>
    </>
  )
}
