import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Signup/>}/>
          </Route>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App
