import React, { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [message, setMessage] = useState('')
  const getSomething = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    const data = new FormData()
    if (files) {
      data.append('test', files[0])
      const res = await axios.post<{ message: string, status: number }>('http://localhost:3333', data).then(({data}) => data)
      console.log(res.message)
      setMessage(res.message)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <input
        type="file"
        onChange={getSomething}
        data-testid="uploadButton"
      />
      <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
