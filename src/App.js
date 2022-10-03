import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {    
    return (
        <Router>
          <div>
            <Header />
          </div>
        </Router>
        
    )
}

export default App