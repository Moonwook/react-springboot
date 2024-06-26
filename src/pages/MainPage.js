import React from "react";
// import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  return (
    <div>
      {/* <div className="flex">
        <Link to={"/about"}>about</Link>
      </div>
      <div className="text-3xl">
        <div>Main Page</div>
      </div> */}

      <BasicLayout>
        <div className="text-3xl">Main Page</div>
      </BasicLayout>
    </div>
  );
};

export default MainPage;
