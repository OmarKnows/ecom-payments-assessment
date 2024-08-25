import App from "@/App";
import TaskFive from "@/tasks/TaskFive";
import TaskFour from "@/tasks/TaskFour";
import TaskOne from "@/tasks/TaskOne";
import TaskThree from "@/tasks/TaskThree";
import TaskTwo from "@/tasks/TaskTwo";
import { ROUTES } from "@constants/routes";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={ROUTES.TASK_ONE} replace />,
      },
      {
        path: ROUTES.TASK_ONE,
        element: <TaskOne />,
      },
      {
        path: ROUTES.TASK_TWO,
        element: <TaskTwo />,
      },
      {
        path: ROUTES.TASK_THREE,
        element: <TaskThree />,
      },
      {
        path: ROUTES.TASK_FOUR,
        element: <TaskFour />,
      },
      {
        path: ROUTES.TASK_FIVE,
        element: <TaskFive />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.TASK_ONE} replace />,
      },
    ],
  },
]);
