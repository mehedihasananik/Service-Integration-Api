"use client";
import { useRouter } from "next/navigation";

const PortfolioButton = ({ portfolio }) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/portfolio/${portfolio.id}`);
  };

  return (
    <div>
      <button
        className="text-[14px] bg-[#FF693B] rounded-md px-8 py-[5px] text-white border border-[#ff693B]  group-hover:bg-white group-hover:text-[#FF693B] transition-all duration-200"
        onClick={handleDetails}
      >
        View
      </button>
    </div>
  );
};

export default PortfolioButton;
