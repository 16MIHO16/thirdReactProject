import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [number, setNumber] = useState('')
  const [data, setData] = useState({})

  async function fetchData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    const list = await response.json()
    setData(list)
  }

  const handleButtonClick = () => {
    if (number < 10) {
      fetchData();
    } else {
      alert('Inputed number should be less than 10');
    }
  };

  const valuesList = Object.values(data);

  return (
    <div>
    value: {number}
    <br />
    title: {data.title}
    <br />
    <input type="text" onChange={(e) => setNumber(e.target.value) }/>
    <br />
    <button onClick={handleButtonClick}>Click me</button>
    <br />
    
    <ul>
      {valuesList.map((value, index) => (
      <li key={index}>{String(value)}</li>
    ))}
    </ul>

    </div>
  )
}

export default App
