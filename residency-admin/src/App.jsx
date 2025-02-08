import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is a simple responsive layout with Sidebar and Topbar using plain Bootstrap.</p>
    </Layout>
  )
}

export default App
