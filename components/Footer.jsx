import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="w-1/3 mb-4">
            <Image src="/footer.png" alt="footer" width={150} height={150} />
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Do You Need Help With Anything?
          </h2>
          <p className="text-gray-400">
            Receive updates, hot deals, tutorials, and discounts sent straight
            to
          </p>
          <p className="mb-6 text-gray-400">your inbox every month.</p>

          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-md w-full md:w-2/3 text-black focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 md:mb-0"
            />
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 transition-all md:ml-4">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/** Layouts Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">LAYOUTS</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "Home Page",
                "About Page",
                "Service Page",
                "Property Page",
                "Contact Page",
                "Single Blog",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/** All Sections */}
          <div className="space-y-6">
            <h3 className=" text-lg md:text-base lg:text-lg font-semibold mb-4 text-nowrap ">ALL SECTIONS</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "Headers",
                "Features",
                "Attractive",
                "Testimonials",
                "Videos",
                "Footers",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/** Company Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "About",
                "Blogs",
                "Pricing",
                "Affiliate",
                "Login",
                "Changelog",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <hr className="border-gray-600 mb-4" />
        <p className="text-center text-gray-400">
          © 2021 RentUP. Designed By GorkCoder.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
