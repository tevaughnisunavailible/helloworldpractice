import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Pick a Button 
        
        </p>
        <a
          className="App-link"
          href="https://www.dreamstime.com/you-lose-rubber-stamp-you-lose-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-image100187738"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google.com
        </a>
        <Button variant="contained" color="secondary"
      
        className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          >Google.com</Button>
 
 
  <Button variant="contained"      
        className="App-link"
          href="https://elgoog.im/gravity/"
          target="_blank"
           rel="noopener noreferrer"
          >Google.com</Button>
          <Button variant="contained" color="success">
  Did you get the right one?
</Button>
<Button variant="outlined" color="error">
 
  Did you get the wrong one?
</Button>
      </header>
    
    </div>
  ); 
}

export default App;
