import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Admin/Login/login";
function App() {

  return (
    <div id="body-pd" className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

          </Routes>
        </Router>
    </div>
  );
}


export default App;