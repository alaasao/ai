import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const myArray = Array.from({ length: 84 }, (_, index) => index + 1);
  const blacklist = [
    2, 4, 6, 7, 8, 11, 14, 16, 20, 22, 23, 35, 47, 71, 68, 69, 70, 72, 56, 44,
    30, 42, 54, 66, 78, 77, 65, 61, 62, 63, 49, 37, 14, 28, 40, 39, 34, 46,
  ];
  const realNodes = {
    1: 8,
    3: 9,
    5: 11,
    9: 18,
    10: 19,
    12: "B",
    25: 6,
    26: 5,
    27: 7,
    17: 10,
    18: 12,
    19: 13,
    31: 14,
    33: 17,
    50: 3,
    52: 2,
    53: 4,
    57: 20,
    60: 21,
    73: "A",
    76: 1,
    79: 15,
    84: 16,
  };
  const solution = [73, 76, 52, 53, 17, 18, 19, 31, 33, 57, 60, 12];
  const visitedDfs = [73, 76, 52, 53, 17, 18, 19, 31, 33, 57, 60, 12];

  const realVisitedDfsNodes = visitedDfs;
  const visitedBfs = [
    "A",
    1,
    2,
    3,
    4,
    5,
    10,
    6,
    7,
    11,
    12,
    8,
    9,
    13,
    14,
    17,
    15,
    18,
    20,
    16,
    19,
    21,
    "B",
  ];
  const realVisitedBfsNodes = visitedBfs
    .map((node) => {
      const realNode = Object.keys(realNodes).find(
        (key) => realNodes[key] === node
      );
      return realNode ? parseInt(realNode) : null;
    })
    .filter((node) => node !== null);
  const visitedAs = [
    "A",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
 
    10,
       11,
    12,
    13,
    14,
    17,
    15,
    18,
    20,
    21,
    "B",
  ];
  const realVisitedAsNodes = visitedAs
    .map((node) => {
      const realNode = Object.keys(realNodes).find(
        (key) => realNodes[key] === node
      );
      return realNode ? parseInt(realNode) : null;
    })
    .filter((node) => node !== null);
  const [solBfs, setSolBfs] = useState(false);
  const [bfs, setBfs] = useState(false);
  const [solDfs, setSolDfs] = useState(false);
  const [dfs, setDfs] = useState(false);
  const [solAs, setSolAs] = useState(false);
  const [As, setAs] = useState(false);
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex gap-2 mb-3">
          <div
            className="bg-green-500 w-[100px] flex justify-center items-center rounded-lg p-3 cursor-pointer "
            onClick={() => setBfs(true)}
          >
            start bfs
          </div>
          <div
            className="bg-red-500  w-[100px] flex justify-center items-center rounded-lg p-3 cursor-pointer"
            onClick={() => setBfs(false)}
          >
            clear{" "}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center h-[50px] justify-center  gap-1">
            {" "}
            <div className="w-3 h-3 rounded-lg bg-yellow-400"></div>
            <div>visited</div>{" "}
          </div>
          <div className="flex items-center h-[50px] justify-center  gap-1">
            {" "}
            <div className="w-3 h-3 rounded-lg bg-green-400"></div>
            <div>solution</div>{" "}
          </div>
        </div>
        <div className="flex flex-wrap items-center  justify-center w-[720px]  text-center ">
          {myArray.map((item, index) => {
            if (blacklist.includes(item)) {
              return (
                <div className="w-[60px] h-[60px] border-2 bg-black rounded-lg"></div>
              );
            }
            return (
              <div className="relative">
                {bfs && realVisitedBfsNodes.includes(item) ? (
                  <motion.div
                    className="absolute w-[60px] h-[60px] border-2 rounded-lg flex justify-center items-center z-[1] bg-yellow-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay:
                        Math.max(0, realVisitedBfsNodes.indexOf(item)) * 0.5,
                    }}
                    onAnimationComplete={() => {
                      if (
                        item ===
                        realVisitedBfsNodes[realVisitedBfsNodes.length - 1]
                      ) {
                        setSolBfs(true);
                      }
                    }}
                  >
                    {realNodes[item]}
                  </motion.div>
                ) : null}
                {solBfs && bfs && solution.includes(item) ? (
                  <motion.div
                    className="absolute w-[60px] h-[60px] border-2 rounded-lg flex justify-center items-center z-[1] bg-green-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.max(0, solution.indexOf(item)) * 0.5,
                    }}
                  >
                    {realNodes[item]}
                  </motion.div>
                ) : null}
                <div className="w-[60px] h-[60px] border-2 flex justify-center items-center">
                  {realNodes[item]}
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex gap-2 mb-3">
          <div
            className="bg-green-500 w-[100px] flex justify-center items-center rounded-lg p-3 cursor-pointer "
            onClick={() => setDfs(true)}
          >
            start Dfs
          </div>
          <div
            className="bg-red-500  w-[100px] flex justify-center items-center rounded-lg p-3 cursor-pointer"
            onClick={() => setDfs(false)}
          >
            clear{" "}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center h-[50px] justify-center  gap-1">
            {" "}
            <div className="w-3 h-3 rounded-lg bg-yellow-400"></div>
            <div>visited</div>{" "}
          </div>
          <div className="flex items-center h-[50px] justify-center  gap-1">
            {" "}
            <div className="w-3 h-3 rounded-lg bg-green-400"></div>
            <div>solution</div>{" "}
          </div>
        </div>
        <div className="flex flex-wrap items-center  justify-center w-[720px]  text-center ">
          {myArray.map((item, index) => {
            if (blacklist.includes(item)) {
              return (
                <div className="w-[60px] h-[60px] border-2 bg-black rounded-lg"></div>
              );
            }
            return (
              <div className="relative">
                {dfs && realVisitedDfsNodes.includes(item) ? (
                  <motion.div
                    className="absolute w-[60px] h-[60px] border-2 rounded-lg flex justify-center items-center z-[1] bg-yellow-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay:
                        Math.max(0, realVisitedDfsNodes.indexOf(item)) * 0.5,
                    }}
                    onAnimationComplete={() => {
                      if (
                        item ===
                        realVisitedDfsNodes[realVisitedDfsNodes.length - 1]
                      ) {
                        setSolDfs(true);
                      }
                    }}
                  >
                    {realNodes[item]}
                  </motion.div>
                ) : null}
                {solDfs && dfs && solution.includes(item) ? (
                  <motion.div
                    className="absolute w-[60px] h-[60px] border-2 rounded-lg flex justify-center items-center z-[1] bg-green-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.max(0, solution.indexOf(item)) * 0.5,
                    }}
                  >
                    {realNodes[item]}
                  </motion.div>
                ) : null}
                <div className="w-[60px] h-[60px] border-2 flex justify-center items-center">
                  {realNodes[item]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex gap-2 mb-3">
          <div
            className="bg-green-500 w-[100px] flex justify-center items-center rounded-lg p-3 cursor-pointer "
            onClick={() => setAs(true)}
          >
            start As
          </div>
          <div
            className="bg-red-500  w-[100px] flex justify-center items-center rounded-lg p-3 cursor-pointer"
            onClick={() => setAs(false)}
          >
            clear{" "}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center h-[50px] justify-center  gap-1">
            {" "}
            <div className="w-3 h-3 rounded-lg bg-yellow-400"></div>
            <div>visited</div>{" "}
          </div>
          <div className="flex items-center h-[50px] justify-center  gap-1">
            {" "}
            <div className="w-3 h-3 rounded-lg bg-green-400"></div>
            <div>solution</div>{" "}
          </div>
        </div>
        <div className="flex flex-wrap items-center  justify-center w-[720px]  text-center ">
          {myArray.map((item, index) => {
            if (blacklist.includes(item)) {
              return (
                <div className="w-[60px] h-[60px] border-2 bg-black rounded-lg"></div>
              );
            }
            return (
              <div className="relative">
                {As && realVisitedAsNodes.includes(item) ? (
                  <motion.div
                    className="absolute w-[60px] h-[60px] border-2 rounded-lg flex justify-center items-center z-[1] bg-yellow-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay:
                        Math.max(0, realVisitedAsNodes.indexOf(item)) * 0.5,
                    }}
                    onAnimationComplete={() => {
                      if (
                        item ===
                        realVisitedDfsNodes[realVisitedDfsNodes.length - 1]
                      ) {
                        setSolAs(true);
                      }
                    }}
                  >
                    {realNodes[item]}
                  </motion.div>
                ) : null}
                {solAs && As && solution.includes(item) ? (
                  <motion.div
                    className="absolute w-[60px] h-[60px] border-2 rounded-lg flex justify-center items-center z-[1] bg-green-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.max(0, solution.indexOf(item)) * 0.5,
                    }}
                  >
                    {realNodes[item]}
                  </motion.div>
                ) : null}
                <div className="w-[60px] h-[60px] border-2 flex justify-center items-center">
                  {realNodes[item]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
