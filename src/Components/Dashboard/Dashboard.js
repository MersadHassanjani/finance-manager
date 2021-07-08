// import "./Dashboard.css";
import { useState } from "react";
import { Container } from "react-bootstrap";

const metoo = (arg) => {
  console.log("Yo! You actually clicked me too!" + arg);
};

const Dashboard = () => {
  const [justAnState, setJustAnState] = useState("initial  value");

  return (
    <>
      <div className="dashboard container-fluid">
        <h1 className="my-5 text-right font-weight-bolder farsiestb">
          داشبورد اینجاست
        </h1>
        <div className="row">
          <div className="col-3 ">
            <h1 className="ltr">
              <strong>Side</strong>
            </h1>
          </div>
          <div className="col-9">
            <h1 className="ltr">
              <strong>Main</strong>
            </h1>
            <h2>{justAnState}</h2>
            <button
              className="btn btn-primary mx-5 farsiest"
              onClick={(event) => {
                console.log("Yo! You actually clicked!");
                console.log(event);
                setJustAnState("new value");
              }}
            >
              به فارسی کلیک کن
            </button>
            <button
              className="btn btn-primary mr-5 ltr"
              onClick={(event) => metoo("myarrrrg")}
            >
              Yo! Click me!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
