import './App.css';
import Theme from './Theme';
import { ThemeProvider } from './ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
}

export default App;
