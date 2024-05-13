"use client";
import DashBoardContent from "@/Components/PagesComponents/DashBoardContent/DashBoardContent";
import IsAuth from "@/Components/isAuth/isAuth";

const DashboardPage = () => {
  return (
    <div className="bg-[#FCFCFC] ">
      <DashBoardContent />
    </div>
  );
};

export default IsAuth(DashboardPage);
