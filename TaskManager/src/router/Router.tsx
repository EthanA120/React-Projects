import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TasksPage";
import TaskSpecPage from "../pages/TaskSpecPage";
import NewTaskPage from "../pages/NewTaskPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ROUTS from "./Routs";
import LoginPage from "../pages/LoginPage";


function Router() {
  return (
      <Routes>
        <Route path={ROUTS.HOME} element={<HomePage />} />
        <Route path={ROUTS.TASKS} element={<TasksPage />} />
        <Route path={ROUTS.NEW_TASK} element={<NewTaskPage />} />
        <Route path={ROUTS.TASK_DETAILS} element={<TaskSpecPage />} />
        <Route path={ROUTS.ABOUT} element={<About />} />
        <Route path={ROUTS.CONTACT} element={<Contact />} />
        <Route path={ROUTS.LOGIN} element={<LoginPage />} />
      </Routes>
  );
}
export default Router;