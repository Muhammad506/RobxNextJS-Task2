import { BiSearch } from "react-icons/bi";

const HomeSearch = () => {
  return (
    <main className="bg-[url('/bg.avif')] bg-cover bg-center h-full sm:h-screen flex flex-col justify-between pt-20 sm:pt-0 sm:gap-0 gap-4">
      {/* Content */}
      <div className="flex flex-col justify-center gap-4 items-center text-center h-full bg-black bg-opacity-50 text-white px-4 md:px-0">
        <h1 className="w-full md:w-2/3 lg:w-1/2 text-3xl md:text-6xl xl:text-7xl font-bold leading-tight md:leading-relaxed">
          Search Your Next Home
        </h1>
        <p className="text-gray-200 text-sm md:text-base">
          Find new & featured property located in your local city.
        </p>
      </div>

      {/* Form */}
      <div className="w-full md:w-11/12 lg:w-4/5 bg-white shadow-lg rounded-t-md overflow-hidden self-center">
        <form className="w-full bg-white pb-6 py-3 px-5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Location Input */}
          <div className="w-full md:w-1/4 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City/Street
            </label>
            <input
              type="text"
              placeholder="Location"
              className="w-full px-3 py-1 border rounded-md "
            />
          </div>

          {/* hr line */}
          <div className="hidden md:block h-16 w-px bg-gray-300" />

          {/* Property Type Input */}
          <div className="w-full md:w-1/4 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <input
              type="text"
              placeholder="Property Type"
              className="w-full px-3 py-1 border rounded-md "
            />
          </div>

          {/* hr line */}
          <div className="hidden md:block h-16 w-px bg-gray-300" />

          {/* Price Range Input */}
          <div className="w-full md:w-1/4 px-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <input
              type="text"
              placeholder="Price Range"
              className="w-full px-3 py-1 border rounded-md "
            />
          </div>

          {/* hr line */}
          <div className="hidden md:block h-16 w-px bg-gray-300" />

          {/* Search Button */}
          <div className="w-full md:w-1/4 px-2 font-semibold  justify-center flex gap-4 items-center">
            Advance Filter
            <button
              type="submit"
              className=" md:w-auto px-7 py-4 bg-[#27AE60] text-white font-medium rounded-md "
            >
              <BiSearch />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default HomeSearch;
