import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './component/stopwatch/Stopwatch'
import UseMemo from './component/useMemo/UseMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Stopwatch /> */}
      <UseMemo />
    </>
  )
}

export default App
