"use client";
import DashBoardContent from "@/Components/PagesComponents/DashBoardContent/DashBoardContent";
import IsAuth from "@/Components/isAuth/isAuth";
import { ArrowRight } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="bg-[#FCFCFC] ">
      {/* <DashBoardContent /> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Redirecting to Home Page
        </h3>
        <div className="flex justify-center items-center text-blue-600">
          <ArrowRight className="w-6 h-6 mr-2 animate-bounce" />
          <span className="text-lg">Please wait...</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default IsAuth(DashboardPage);
