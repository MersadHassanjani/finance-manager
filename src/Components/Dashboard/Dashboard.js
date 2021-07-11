import "./Dashboard.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import chart1 from "../../assets/chart1.png";

const metoo = (arg) => {
  console.log("Yo! You actually clicked me too!" + arg);
};

const Dashboard = () => {
  // const [justAnState, setJustAnState] = useState("initial  value");

  return (
    <>
      <div className="dashboard container-fluid TransactionList-cf">
        <div className="row">
          {/* <div className="col-1"></div> */}
          <div className="col-3 Dashboard-quickAcessBar">
            <h4 className="ltr farsiestb py-4">داشبورد مدیر مالی</h4>
            <div className="aline w90 pb-3"></div>
            <div className="btn farsiest w90 my-2 border-bottom-1 border ">
              دسترسی سریع 1
            </div>
            <div className="btn farsiest w90 my-2 border-bottom-1 border ">
              دسترسی سریع 2
            </div>
            <div className="btn farsiest w90 my-2 border-bottom-1 border ">
              دسترسی سریع 3
            </div>
            <div className="btn farsiest w90 my-2 border-bottom-1 border ">
              دسترسی سریع 4
            </div>
            <div className="pb-3"></div>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-9">
            <div className="">
              {/* <h1 className="my-5 text-right font-weight-bolder farsiestb section-header w80">
                داشبورد مدیر مالی
              </h1> */}
              <h2 className="ltr farsiestb py-4">اطلاعات آماری</h2>
              <div className="aline w80 pb-4"></div>
              {/* <h2>{justAnState}</h2> */}
              {false && (
                <button
                  className="btn btn-primary mx-5 farsiest"
                  onClick={(event) => {
                    console.log("Yo! You actually clicked!");
                    console.log(event);
                    // setJustAnState("new value");
                  }}
                >
                  به فارسی کلیک کن
                </button>
              )}
              {false && (
                <button
                  className="btn btn-primary mr-5 ltr"
                  onClick={(event) => metoo("myarrrrg")}
                >
                  Yo! Click me!
                </button>
              )}
              <img src={chart1} className="py-4 w70" alt="" />
            </div>
          </div>
          {/* <div className="col-1"></div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
