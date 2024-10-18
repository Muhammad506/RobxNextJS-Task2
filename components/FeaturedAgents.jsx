import AgentsCards from "./AgentsCards";

const FeaturedAgents = () => {
  const agents = [
    { listings: 50, image: "/Agent1.jpg", location: "Liverpool, Canada", name: "Sargam S. Singh" },
    { listings: 70, image: "/Agent2.jpg", location: "Montreal, Canada", name: "Harijeet M. Siller" },
    { listings: 80, image: "/Agent3.jpg", location: "Denver, USA", name: "Anna K. Young" },
    { listings: 50, image: "/Agent4.jpg", location: "2272 Briarwood Drive", name: "Sarah Singh" },
    { listings: 70, image: "/Agent5.jpg", location: "Montreal, Canada", name: "Michael P. Grimaldo" },
    { listings: 80, image: "/Agent6.jpg", location: "2272 Briarwood Drive", name: "Anna Dravid" },
  ];

  return (
    <main className="h-full py-12 bg-[#F7F9FC] px-6 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#313B54] mb-4">
            Our Featured Agents
          </h2>
          <p className="text-[#9397AA] w-11/12 md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid gap-y-10 gap-x-1 grid-cols-1   md:pl-20 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <AgentsCards
              key={index}
              listings={agent.listings}
              image={agent.image}
              location={agent.location}
              name={agent.name}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturedAgents;
