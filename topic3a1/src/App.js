import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <td>
              Employee ID
            </td>
            <td>
              Employee Name
            </td>
            <td>
              Employee Email ID
            </td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>
                E1
              </td>
              <td>
                Ramesh Kapoor
              </td>
              <td>
                rameshfor12@gmail.com
              </td>
            </tr>
            <tr>
              <td>
                E2
              </td>
              <td>
                Rakesh Lal
              </td>
              <td>
                rakesh2@gmail.com
              </td>
            </tr>
            <tr>
              <td>
                E3
              </td>
              <td>
                Amresh Singh
              </td>
              <td>
                amreshfor12@gmail.com
              </td>
            </tr>
            <tr>
              <td>
                E4
              </td>
              <td>
                Amar Gupta
              </td>
              <td>
                amarg@gmail.com
              </td>
            </tr>
            <tr>
              <td>
                E5
              </td>
              <td>
                Balram Sadu
              </td>
              <td>
                balramsadu123@gmail.com
              </td>
            </tr>

        </tbody>
      </table>
      </header>
      
    </div>
  );
}

export default App;
