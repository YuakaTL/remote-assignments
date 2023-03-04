import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/input';
import './assets/all.scss';

function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    (async () => {
      const result = await axios.get(process.env.REACT_APP_API_URL);
      setData(result.data);
      console.log(result);
    })()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {text}
        <Input id="sampleText" text="這是一個 input" value={text} onChangeHandler={onChangeHandler}></Input>
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
