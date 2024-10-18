import { FaCheck, FaTimes } from "react-icons/fa";

const PricingPlan = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      features: [
        { label: "99.5% Uptime Guarantee", available: true },
        { label: "120GB CDN Bandwidth", available: true },
        { label: "5GB Cloud Storage", available: true },
        { label: "Personal Help Support", available: false },
        { label: "Enterprise SLA", available: false },
      ],
      buttonText: "Start Basic",
    },
    {
      name: "Standard",
      price: "$49",
      features: [
        { label: "99.5% Uptime Guarantee", available: true },
        { label: "150GB CDN Bandwidth", available: true },
        { label: "10GB Cloud Storage", available: true },
        { label: "Personal Help Support", available: true },
        { label: "Enterprise SLA", available: false },
      ],
      buttonText: "Start Standard",
      bestValue: true,
    },
    {
      name: "Platinum",
      price: "$79",
      features: [
        { label: "100% Uptime Guarantee", available: true },
        { label: "200GB CDN Bandwidth", available: true },
        { label: "20GB Cloud Storage", available: true },
        { label: "Personal Help Support", available: true },
        { label: "Enterprise SLA", available: true },
      ],
      buttonText: "Start Premium",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 w-full items-center flex flex-col justify-center">
      <div className="text-center mb-12 w-11/12 md:w-[70%] xl:w-1/2">
        <h2 className="md:text-5xl text-3xl xl:text-6xl font-bold text-gray-700 mb-4">
          Select Your Package
        </h2>
        <p className="md:text-base xl:text-lg text-sm text-slate-500">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </p>
      </div>

      {/* Adjust the card widths */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 max-w-5xl w-full px-4 md:px-14 lg:px-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white p-10 rounded-lg shadow-xl text-center transition-transform ${
              plan.bestValue ? "md:scale-105" : "border-gray-200"
            }`}
          >
            {plan.bestValue && (
              <button className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                Best Value
              </button>
            )}

            <h3 className="text-2xl font-semibold mb-6 mt-8">{plan.name}</h3>
            <div className="flex justify-center items-baseline space-x-1 mb-4">
              <span className="text-4xl">$</span>
              <span className="text-6xl font-bold">{plan.price.slice(1)}</span>
            </div>
            <p className="text-gray-500 mb-8">Per user, per month</p>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-4">
                  <div className="w-8 flex justify-center">
                    {feature.available ? (
                      <div className="bg-green-100 p-2 rounded-full">
                        <FaCheck className="text-green-500" />
                      </div>
                    ) : (
                      <div className="bg-red-100 p-2 rounded-full">
                        <FaTimes className="text-red-500" />
                      </div>
                    )}
                  </div>
                  <span className="text-left">{feature.label}</span>
                </li>
              ))}
            </ul>

            <button
              className={`${
                plan.name === "Standard"
                  ? "bg-green-500 text-white"
                  : "bg-white text-green-500 border-4 border-gray-200"
              } text-xl py-3 px-10 rounded-full`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
