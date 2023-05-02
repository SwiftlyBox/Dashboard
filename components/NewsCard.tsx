import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BusinessCard = () => {
  return (
    <div className="w-407  h-365 border-2 bg-white rounded-lg p-4">
      <div className="flex items-center">
        <div className="bg-red-500  rounded-md p-1" style={{borderRaduis:"10px"}}>
          <FaStar color="white" style={{ width: '12px', height: '12px' }} />
        </div>
        <h2 className="text-lg font-semibold  ml-2">Business insights</h2>
      </div>
      <div className="mt-8 mb-4">
        <h3 className="text-3xl font-bold mb-3">Good News</h3>
        <p className="leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="flex items-center">
        <div className="bg-black rounded-md  p-1" style={{borderRaduis:"10px"}}>
          <FaChevronLeft color="white" style={{ width: '43px', height: '43px' }} />
        </div>
        <div className="border-t border-gray-400 flex-grow mx-2" style={{ width: 48 }} />
        <div className="bg-black rounded-md p-1" style={{borderRaduis:"10px"}}>
          <FaChevronRight color="white" style={{ width: '43px', height: '43px' }} />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
