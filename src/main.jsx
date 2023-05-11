import * as React from 'react';
import  {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Tasks from './routes/Tasks';
import DisplayAllTasks from './routes/DisplayAllTasks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks/>
  },
  {
    path: "Tasks",
    element: <Tasks/>,
  },

  {
    path: "DisplayAllTasks",
    element: <DisplayAllTasks/>,
  },
]);


createRoot(document.getElementById("root")).render(
    <>
      <RouterProvider router={router} />
    </>
  );
