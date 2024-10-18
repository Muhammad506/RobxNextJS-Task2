import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaRegCommentDots,
} from "react-icons/fa";

const AgentsCards = ({ listings, image, location, name }) => {
  return (
    <div className="md:w-[80%] w-[90%] p-6 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow flex flex-col items-center space-y-4">
      <div className="self-start bg-orange-500 text-white text-xs md:text-sm px-4 py-1 font-semibold rounded-full">
        {listings} Listings
      </div>

      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
      />

      <p className="text-gray-600 text-sm">{location}</p>
      <h3 className="text-lg md:text-xl font-semibold text-center">{name}</h3>

      <div className="flex space-x-4">
        <FaFacebookF className="text-blue-600 hover:scale-110 cursor-pointer transition-transform" />
        <FaLinkedinIn className="text-blue-700 hover:scale-110 cursor-pointer transition-transform" />
        <FaTwitter className="text-blue-500 hover:scale-110 cursor-pointer transition-transform" />
        <FaInstagram className="text-pink-500 hover:scale-110 cursor-pointer transition-transform" />
      </div>

      <div className="w-full flex justify-between items-center mt-6">
        <button className="flex items-center bg-[#27AE60] text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
          <FaRegCommentDots className="mr-2" />
          Message
        </button>
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          <FaPhoneAlt />
        </button>
      </div>
    </div>
  );
};

export default AgentsCards;
