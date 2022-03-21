import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddUser from './pages/AddUser'

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/addUser" element={<AddUser />} />
            </Routes>
        </div>
    )
}

export default App
