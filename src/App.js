import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Admin/Login/Login";
import Index from "./Admin/Page/Index";
import JodiDigitNumbers from "./Admin/panna/JodiDigitNumbers";
import SingleDigitNumbers from "./Admin/panna/SingleDigitNumbers";
import Unapproved from "./Admin/user/Unapproved";
import UserListTable from "./Admin/user/List";
import Result from "./Admin/Management/Result/Result";
function App() {

  return (
    <div id="body-pd" className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="jodi-digit" element={<JodiDigitNumbers />} />
          <Route path="single-digit" element={<SingleDigitNumbers />} />
          <Route path="un-approved-users-list" element={<Unapproved />} />
          <Route path="users-list" element={<UserListTable />} />
          <Route path="results" element={<Result />} />






          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}


export default App;