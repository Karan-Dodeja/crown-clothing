import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div></div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
