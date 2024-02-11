import React from "react";

import classes from "./MainComponent.module.css";

const MainComponent = ({ facilities, mainDiv, steps, container, security }) => {
  const {
    start,
    curveLine,
    status1,
    status2,
    option,
    process1,
    process2,
    outCome,
  } = steps;
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.wrapper}>
        <div className={classes.facilities}>
          <div
            className={classes.left}
            style={{
              "--color": facilities.left.titleColor,
              "--bg": facilities.left.bg,
            }}
          >
            <div className={classes.icon}>{facilities.left.icon}</div>
            <p className={classes.title}>{facilities.left.title}</p>{" "}
            <div className={classes.verticleArrow}>
              {facilities.verticleArrow}
            </div>
          </div>

          <div className={classes.horizontalArrow}>
            {facilities.horizontalArrow}
          </div>
          <div
            className={classes.right}
            style={{
              "--color": facilities.right.titleColor,
              "--bg": facilities.right.bg,
            }}
          >
            <div className={classes.icon}>{facilities.right.icon}</div>
            <p className={classes.title}>{facilities.right.title}</p>
            <div className={classes.verticleArrow}>
              {facilities.verticleArrow}
            </div>
          </div>
        </div>
        <div
          className={classes.container}
          style={{ "--bg": container.bg, "--border": container.border }}
        >
          <div
            className={classes.mainDiv}
            style={{
              "--bg": mainDiv.bg,
              "--color": mainDiv.titleColor,
              "--border": mainDiv.border,
            }}
          >
            <h4 className={classes.title}>{mainDiv.title}</h4>
            <div className={mainDiv.icon}>{mainDiv.icon}</div>
          </div>
          <div className={classes.stepContainer}>
            <div
              className={classes.start}
              style={{ "--color": start.color, "--bg": start.bg }}
            >
              <p className={classes.text}>{start.text}</p>
            </div>
            <div className={classes.curveLine}>{curveLine}</div>
            <div className={classes.otherSteps}>
              <div className={classes.statusOptionOutcome}>
                {" "}
                <div
                  className={classes.status1}
                  style={{ "--color": status1.color, "--bg": status1.bg }}
                >
                  <p className={classes.text}>{status1.text}</p>
                  <div className={classes.arrowright}>{status1.arrow}</div>
                </div>{" "}
                <div className={classes.option}>
                  <div className={classes.arrowright}>{option.arrow}</div>
                  <div className={classes.arrowDown}>{option.arrowDown}</div>
                  <div>{option.icon}</div>
                </div>{" "}
                <div
                  className={classes.outcome}
                  style={{
                    "--color": outCome.color,
                    "--bg": outCome.bg,
                  }}
                >
                  <p className={classes.text}>{outCome.text}</p>
                </div>
              </div>
              <div className={classes.status2Proces1Process2}>
                <div
                  className={classes.status2}
                  style={{ "--color": status2.color, "--bg": status2.bg }}
                >
                  <p className={classes.text}>{status2.text}</p>
                </div>

                <div
                  className={classes.process1}
                  style={{
                    "--color": process1.color,
                    "--bg": process1.bg,
                  }}
                >
                  <div className={classes.arrowright}>{status1.arrow}</div>
                  <p className={classes.text}>{process1.text}</p>
                </div>

                <div
                  className={classes.process2}
                  style={{
                    "--color": process2.color,
                    "--bg": process2.bg,
                  }}
                >
                  <div className={classes.arrowUp}>{process2.arrowUp}</div>
                  <p className={classes.text}>{process2.text}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={classes.dataSecurity}
            style={{
              "--bg": security.bg,
              "--color": security.titleColor,
              "--boxShadow": security.boxShadow,
            }}
          >
            <div className={classes.icon}>{security.icon}</div>
            <p className={classes.title}>{security.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
