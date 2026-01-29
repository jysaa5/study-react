import { Link } from 'react-router'
import './App.css'
import Layout from './shared/Layout'

function App() {

  return (
    <Layout>
      <div>Live coding test</div>
      <Link to="/counter">Go to Counter</Link>
    </Layout>
  )
}

export default App
