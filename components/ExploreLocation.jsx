import Image from "next/image";

const locationsData = [
  {
    id: 1,
    image: "/city-1.png",
    location: "Jersey, United States",
    quantity: ["12 Villas", "07 Offices", "10 Apartments"],
  },
  {
    id: 2,
    image: "/city-2.png",
    location: "Liverpool, London",
    quantity: ["12 Villas", "07 Offices", "10 Apartments"],
  },
  {
    id: 3,
    image: "/city-3.png",
    location: "New York, United States",
    quantity: ["12 Villas", "07 Offices", "10 Apartments"],
  },
  {
    id: 4,
    image: "/city-4.png",
    location: "Montreal, Canada",
    quantity: ["12 Villas", "07 Offices", "10 Apartments"],
  },
  {
    id: 5,
    image: "/city-5.png",
    location: "California, USA",
    quantity: ["12 Villas", "07 Offices", "10 Apartments"],
  },
  {
    id: 6,
    image: "/city-6.png",
    location: "New Orleans, Louisiana",
    quantity: ["12 Villas", "07 Offices", "10 Apartments"],
  },
];

const ExploreLocation = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 mb-12">
      <h2 className="text-4xl text-gray-700 font-bold text-center mt-12">
        Explore By Locations
      </h2>
      <p className="text-center mt-2 text-gray-500">
        Discover our latest properties and apartments available for sale or
        rent.
      </p>
      <p className="text-center text-gray-500">
        Lorem ipsum dolor aet consectetur elit. voluptates provident incidunt?
      </p>
      <p className="text-center mb-10 text-gray-500">Apartments?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locationsData.map((location) => (
          <div
            key={location.id}
            className="relative overflow-hidden rounded-md shadow-lg "
          >
            <Image
              src={location.image}
              alt={location.location}
              width={100}
              height={100}
              className="object-cover w-full h-48"
            />
            <div
              className="absolute inset-0 bg-black opacity-30"
              style={{
                width: "calc(100% + 16px)",
                height: "calc(100% + 16px)",
                top: "0",
                left: "0",
                transform: "translate(16px, 16px)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-white">
              <h3 className="text-lg font-semibold">{location.location}</h3>
              <div className="flex justify-center space-x-3 mt-1">
                {location.quantity.map((item, index) => (
                  <span key={index} className="font-medium text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreLocation;
