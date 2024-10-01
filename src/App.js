import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Admin/Login/Login";
import Index from "./Admin/Page/Index";
function App() {

  return (
    <div id="body-pd" className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Index />} />

            <Route path="/login" element={<Login />} />

          </Routes>
        </Router>
    </div>
  );
}


export default App;