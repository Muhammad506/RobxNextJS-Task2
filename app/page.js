import FeaturedAgents from "@/components/FeaturedAgents";
import Footer from "@/components/Footer";
import HomeSearch from "@/components/HomeSearch";
import NavBar from "@/components/NavBar";
import PricingPlan from "@/components/PricingPlans";
import PropertyTypes from "@/components/PropertyTypes";
import Questions from "@/components/Questions";
import RecentProperty from "@/components/RecentProperty";

const page = () => {
  return (
    <div>
      <NavBar />
      <HomeSearch />
      <PropertyTypes />

      <FeaturedAgents />
      <RecentProperty />
      <PricingPlan />
      <Questions />
      <Footer />
    </div>
  );
};

export default page;
