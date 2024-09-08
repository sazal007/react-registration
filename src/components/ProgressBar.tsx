import React from "react";
import hat from "../assets/hat.svg";

interface ProgressBarProps {
  steps: number[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  const totalSteps = steps.length;

  return (
    <div className="progress-bar-container flex flex-col items-center justify-center h-full">
      <h1 className="text-[48px] font-bold mt-[8rem] mb-6">Register</h1>
      <div className="relative w-[593px] h-[61px]">
        <div className="absolute top-[40px] left-[29px] w-[553px] h-[7px] bg-[#D9D9D9] rounded-tl-[17px]">
          <div
            className="h-full bg-[#4DAF4E] rounded-tl-[17px] transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
          />
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute w-[38px] h-[36px] rounded-full ${
              index < currentStep ? "bg-[#4DAF4E]" : "bg-[#43056C]"
            } flex items-center justify-center`}
            style={{
              left: `${(index / (totalSteps - 1)) * 553 + 10}px`,
              top: "25px",
              zIndex: index === currentStep - 1 ? 10 : 1, // Ensure the current step is on top
            }}
          >
            {index === currentStep - 1 && (
              <div
                className="absolute w-[42px] h-[34px] z-20"
                style={{
                  left: "calc(100% - 28px)",
                  top: "-18px",
                  transform: "rotate(15deg)",
                  padding: "5.94px 7.03px 7.46px 1.04px",
                }}
              >
                <img src={hat} alt="hat" className="w-full h-full" />
              </div>
            )}
            <span className="relative z-10 text-white font-bold">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
