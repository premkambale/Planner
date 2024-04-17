import { BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom'
import './App.css'
import Main from '../src/components/common/main/Main.jsx'
import Login from './components/user_components/authentication/login/Login.jsx'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/"  element={<Navigate to="/planner"/>} />
      <Route path="/planner" element={<Login />} />
      <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App
