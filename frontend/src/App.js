import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from './pages/Home'
import Navbar from "./components/Navbar"      //placing the nav bar

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />                           
        <div className="pages">
          <Routes>
            <Route
              path="/"                        //default path
              element={<Home />}              //element that we want to render for this route
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
