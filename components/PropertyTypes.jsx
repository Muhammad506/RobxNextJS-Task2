import Image from "next/image";

const PropertyTypes = () => {
  return (
    <main className="flex flex-col justify-center items-center  gap-5 h-auto lg:h-screen bg-[#F7F9FC] py-12">
      <div className="space-y-16">
        {/* Content section */}
        <div className="items-center flex justify-center flex-col gap-3 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3954]">
            Featured Property Types
          </h1>
          <p className="text-gray-600">Find All Types of Property.</p>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1  gap-6 md:grid-cols-3 px-5 lg:grid-cols-5  justify-center items-center  sm:justify-items-center">
          {/* Card 1 */}
          <div className="flex-shrink-0 sm:w-48 w-full rounded overflow-hidden  shadow-xl py-8 bg-[#F7F9FC]">
            <div className="flex justify-center mb-4">
              <Image
                src="/card1.png"
                alt="Family House"
                width={60}
                height={60}
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Family House</h2>
              <p className="text-gray-700">122 properties</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 sm:w-48 w-full rounded overflow-hidden shadow-xl py-8 bg-[#F7F9FC]">
            <div className="flex justify-center mb-4">
              <Image
                src="/card2.png"
                alt="House & Villa"
                width={60}
                height={60}
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">House & Villa</h2>
              <p className="text-gray-700">155 properties</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 sm:w-48 w-full rounded overflow-hidden shadow-xl py-8 bg-[#F7F9FC]">
            <div className="flex justify-center mb-4">
              <Image src="/card3.png" alt="Apartment" width={60} height={60} />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Apartment</h2>
              <p className="text-gray-700">300 properties</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 sm:w-48 w-full rounded overflow-hidden shadow-xl py-8 bg-[#F7F9FC]">
            <div className="flex justify-center mb-4">
              <Image
                src="/card4.png"
                alt="Office & Studio"
                width={60}
                height={60}
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Office & Studio</h2>
              <p className="text-gray-700">80 properties</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex-shrink-0 sm:w-48 w-full rounded overflow-hidden shadow-xl py-8  bg-[#F7F9FC]">
            <div className="flex justify-center mb-4">
              <Image
                src="/card5.png"
                alt="Villa & Condo"
                width={60}
                height={60}
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Villa & Condo</h2>
              <p className="text-gray-700">80 properties</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyTypes;
