import { FaTrophy } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const OurAwards = () => {
  return (
    <div className="min-h-screen bg-[#122947] text-white flex flex-col items-center justify-center px-4 sm:px-8 py-4">
      {/* Header Section */}
      <div className="text-center mt-10 mb-16 sm:mb-28 w-full sm:w-2/3 lg:w-1/2">
        <h2 className="text-lg sm:text-xl text-green-600 font-semibold mb-2">
          Our Awards
        </h2>
        <h2 className="text-xl md:text-2xl font-normal lg:px-10 px-0 ">
          Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
        </h2>
      </div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 max-w-6xl mx-auto">
        {/* Award 1 */}
        <div className="flex flex-col items-center">
          <div
            className="bg-white bg-opacity-10 px-5 py-3"
            style={{ borderRadius: "4% 50%" }}
          >
            <FaTrophy className="text-5xl p-4 sm:text-6xl mb-4 text-white" />
          </div>
          <h3 className="text-5xl font-bold mt-2">32M</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Blue Burmin Award
          </p>
        </div>

        {/* Award 2 */}
        <div className="flex flex-col items-center">
          <div
            className="bg-white bg-opacity-10 px-5 py-3"
            style={{ borderRadius: "4% 50%" }}
          >
            <IoBagRemoveSharp className="text-5xl p-4 sm:text-6xl mb-4 text-white" />
          </div>
          <h3 className="text-5xl font-bold mt-2">43M</h3>
          <p className="text-sm sm:text-base text-gray-400">Mimo X11 Award</p>
        </div>

        {/* Award 3 */}
        <div className="flex flex-col items-center">
          <div
            className="bg-white bg-opacity-10 px-5 py-3"
            style={{ borderRadius: "4% 50%" }}
          >
            <FaLightbulb className="text-5xl p-4 sm:text-6xl mb-4 text-white" />
          </div>
          <h3 className="text-5xl font-bold mt-2">51M</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Australian UGC Award
          </p>
        </div>

        {/* Award 4 */}
        <div className="flex flex-col items-center">
          <div
            className="bg-white bg-opacity-10 px-5 py-3"
            style={{ borderRadius: "4% 50%" }}
          >
            <FaHeart className="text-5xl p-4  sm:text-6xl mb-4 text-white" />
          </div>
          <h3 className="text-5xl font-bold mt-2">42M</h3>
          <p className="text-sm sm:text-base text-gray-400">
            IITCA Green Award
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAwards;
