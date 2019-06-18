import React from 'react';
import NavBar from './NavBar';
import MessageBox from './MessageBox';
import InputForm from './InputForm';
import ClearAll from './ClearAll';
import Refresh from './refresh';
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
              <Refresh/>
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
