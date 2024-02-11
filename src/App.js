import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import DataSecurity from "./images/DataSecurity";
import CurveLine from "./images/CurveLine";
import UserFriendly from "./images/UserFriendly";
import Visualization from "./images/Visualization";
import HorizontalBidirectionalArrow from "./images/HorizontalBidirectionalArrow";
import VericalBidirectionalArrow from "./images/VericalBidirectionalArrow";
import AiAssistant from "./images/AiAssistant";
import Option from "./images/Option";
import ArrowRight from "./images/ArrowRight";
import ArrowDown from "./images/ArrowDown";
import ArrowUp from "./images/ArrowUp";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#000",

    facilities: {
      left: {
        icon: <UserFriendly color="#fff" />,
        title: "User friendly query input",
        titleColor: "#fff",
        bg: "rgba(2, 48, 254, 0.50)",
      },
      horizontalArrow: <HorizontalBidirectionalArrow color="#fff" />,
      verticleArrow: <VericalBidirectionalArrow color="#fff" />,

      right: {
        icon: <Visualization color="#fff" />,
        title: "Data Visualisation",
        titleColor: "#fff",
        bg: "rgba(2, 48, 254, 0.50)",
      },
    },
    container: {
      border: "1px solid rgba(2, 48, 254, 0.50)",
      bg: "#0F1120",
    },
    mainDiv: {
      icon: <AiAssistant color="#fff" />,
      title: "AI Assistant",
      titleColor: "#fff",
      border: "1px solid rgba(2, 48, 254, 0.50)",
      bg: "#0230FE",
    },
    steps: {
      start: {
        text: "Start",
        color: "#fff",
        bg: "#0230FE",
      },
      curveLine: <CurveLine color="#667085" />,
      status1: {
        text: "Status",
        color: "#fff",
        bg: "#0B3599",
        arrow: <ArrowRight color="#667085" />,
      },
      status2: { text: "Status", color: "#fff", bg: "#0B3599" },
      option: {
        icon: <Option color="#101828" bg="#FFC700" />,
        arrow: <ArrowRight color="#667085" />,
        arrowDown: <ArrowDown color="#667085" />,
        text: "Option",
        color: "#101828",
        bg: "#FFC700",
      },
      process1: {
        text: "Process",
        color: "#fff",
        bg: "#A6840C",
        opacity: ".63",
        arrow: <ArrowRight color="#667085" />,
      },

      process2: {
        text: "Process",
        color: "#fff",
        bg: "#027F7F",
        arrowUp: <ArrowUp color="#667085" />,
      },
      outCome: {
        text: "Outcome",
        color: "#101828",
        bg: "#06E1CE",
      },
    },
    security: {
      icon: <DataSecurity color="#0230FE" />,
      title: "Data Security",
      titleColor: "#131321",
      boxShadow: "1px 1px 14px 0px rgba(0, 0, 0, 0.05)",
      bg: "#fff",
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
