import React, { useEffect, useState } from "react";
import { Data } from "./helper/Data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);

  const Length = Data.length - 1;

  const handlePrev = () => {
    const Index = index === 0 ? Length : index - 1;
    setIndex(Index);
  };

  const handleNext = () => {
    const Index = index === Length ? 0 : index + 1;
    setIndex(Index);
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
        <div className="relative w-full">
          <div className="carousel">
            <BsFillArrowLeftCircleFill
              onClick={handlePrev}
              className="absolute left-0 top-1/2 z-10"
              size={50}
              color="#ffff"
            />
            <div className="w-full ">
              <div>
                {index}
                <img src={Data[index]} className={"active"} />
              </div>
            </div>
            <BsFillArrowRightCircleFill
              className="absolute right-0 top-1/2"
              color="#ffff"
              onClick={handleNext}
              size={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
