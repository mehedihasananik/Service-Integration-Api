"use client";
import HistoryContent from "@/Components/PagesComponents/HistoryContent/HistoryContent";
import IsAuth from "@/Components/isAuth/isAuth";

const DashboardPage = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <HistoryContent />
    </div>
  );
};

export default IsAuth(DashboardPage);
