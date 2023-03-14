import React from "react";
import "./css/card1.css"
import "./css/card2.css"
import "./css/card3.css"
import { DiMongodb } from "react-icons/di";
import { SiGnubash, SiJira, SiMysql, SiPostman } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoInfiniteSharp } from "react-icons/io5";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex justify-center items-center space-x-5 pt-20">
        <div className="card1">
          <div className="first_col_card1">
            <DiMongodb size={90} />
            <SiMysql size={90} />
            <AiFillGithub size={90} />
          </div>
          <div className="second_col_card1">
            <SiJira size={90} />
            <FiFigma size={90} />
            <SiPostman size={90} />
          </div>
          <div className="third_col_card1">
            <SiGnubash size={90} />
            <FaDocker size={90} />
            <IoInfiniteSharp size={90} />
          </div>
          <div className="backend_text">Backend</div>
        </div>
        <div className="card2">
          <div className="first_row_card2">
            <DiMongodb size={90} />
            <SiMysql size={90} />
            <AiFillGithub size={90} />
          </div>
          <div className="second_row_card2">
            <SiJira size={90} />
            <FiFigma size={90} />
            <SiPostman size={90} />
          </div>
          <div className="third_row_card2">
            <SiGnubash size={90} />
            <FaDocker size={90} />
            <IoInfiniteSharp size={90} />
          </div>
          <div className="backend_text">Backend</div>
        </div>
        <div className="card3">
          <div className="first_row_card3">
            <DiMongodb size={90} />
            <SiMysql size={90} />
            <AiFillGithub size={90} />
          </div>
          <div className="second_row_card3">
            <SiJira size={90} />
            <FiFigma size={90} />
            <SiPostman size={90} />
          </div>
          <div className="third_row_card3">
            <SiGnubash size={90} />
            <FaDocker size={90} />
            <IoInfiniteSharp size={90} />
          </div>
          <div className="left">
            <span className="left_text">Back</span>
          </div>
          <div className="right">
            <span className="right_text">end</span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly space-x-40 pt-20">
        <h2 className="text-2xl text-slate-500">Animation 1</h2>
        <h2 className="text-2xl text-slate-500">Animation 2</h2>
        <h2 className="text-2xl text-slate-500">Animation 3</h2>
      </div>
    </div>
  );
};

export default App;
