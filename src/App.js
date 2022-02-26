import './App.css';
import * as React from 'react';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './components/Login';
import CustomizedList from './components/CustomizedList';

function App() {
  const [page, setPage] = React.useState("");

  React.useEffect(() => {
    console.log(page);
  }, [page])

  switch (page) {
    case "ออกจากระบบ":
      return (
        <div id="bg">
          <div id='nvb-box'>
            <ResponsiveAppBar setPage={setPage} />
          </div>
          <div id='body-box'>
            <CustomizedList setPage={setPage} />
          </div>
          <h1 id='text-center'>main</h1>
        </div>
      )

    default:
      return (
        <div id="bg">
          <div id='nvb-box'>
            <ResponsiveAppBar setPage={setPage} />
          </div>
          <div id='body-box'>
            <CustomizedList setPage={setPage} />
            <div id='content-box'>
              <h1 id='text-center'>main</h1>
            </div>
          </div>

        </div>
      )
  }

}

export default App;
