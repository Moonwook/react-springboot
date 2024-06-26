import React from "react";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loarding = <div>Loarding</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loarding}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="list" />,
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={Loarding}>
          <TodoRead />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loarding}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={Loarding}>
          <TodoModify />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
