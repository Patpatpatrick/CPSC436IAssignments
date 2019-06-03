import React from 'react';
import NavBar from './NavBar.js';
import MessageBox from './MessageBox.js';
import InputForm from './InputForm.js';
import ClearAll from './ClearAll.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <table id = "content" style={{"width": "1180px", "height": "650px"}}>
        <tbody>
          <tr>
            <td style={{"verticalAlign": "0%"}}>
              <br></br>
              <MessageBox/>
              <ClearAll/>
            </td>
            <td style={{"verticalAlign": "0%"}}>
              <br></br>
              <InputForm/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
