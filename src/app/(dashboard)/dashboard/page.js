"use client";
import DashBoardContent from "@/Components/PagesComponents/DashBoardContent/DashBoardContent";
import ProtectedRoute from "../../../../ProtectedRoute";

const DashboardPage = () => {
  return (
    <div className="bg-[#FCFCFC] ">
      <DashBoardContent />
    </div>
  );
};

export default ProtectedRoute(DashboardPage, "/");
