import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TasksPage";
import TaskSpecPage from "../pages/TaskSpecPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ROUTS from "./Routs";

function Router() {
  return (
      <Routes>
        <Route path={ROUTS.HOME} element={<HomePage />} />
        <Route path={ROUTS.TASKS} element={<TasksPage />} />
        <Route path={ROUTS.TASK_DETAILS} element={<TaskSpecPage />} />
        <Route path={ROUTS.ABOUT} element={<About />} />
        <Route path={ROUTS.CONTACT} element={<Contact />} />
      </Routes>
  );
}
export default Router;