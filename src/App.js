import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Admin/Login/Login";
import Index from "./Admin/Page/Index";
import JodiDigitNumbers from "./Admin/panna/JodiDigitNumbers";
import SingleDigitNumbers from "./Admin/panna/SingleDigitNumbers";
import Unapproved from "./Admin/user/Unapproved";
import UserListTable from "./Admin/user/List";
import Result from "./Admin/Result/Result";
import AdminForm from "./Admin/Setting/AdminForm";
import SideBar from "./Admin/SiderBar/Sidebar";
import AddGameRates from "./Admin/DehliManagement/AddGameRates";
import AddGameName from "./Admin/DehliManagement/Index";
import { Toaster } from "react-hot-toast";
import MarketManagementForm from "./Admin/DehliManagement/MarketManagementForm";
import UserCard from "./Admin/user/UserCard";


function App() {

  return (
    <div id="body-pd" className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Index />} />
          <Route path="jodi-digit" element={<JodiDigitNumbers />} />
          <Route path="single-digit" element={<SingleDigitNumbers />} />
          <Route path="un-approved-users-list" element={<Unapproved />} />
          <Route path="users-list" element={<UserListTable />} />
          <Route path="results" element={<Result />} />
          <Route path="/" element={<Login />} />
          <Route path="/settings" element={<AdminForm />} />
          <Route path="/slider" element={<SideBar />} />
          <Route path="/game-rate" element={<AddGameRates />} />
          <Route path="/game-name" element={<AddGameName />} />

          <Route path="/onOffMarket" element={<MarketManagementForm />} />
          <Route path="/user/:id" element={<UserCard />} />

        </Routes>
      </Router>
    </div>
  );
}


export default App;