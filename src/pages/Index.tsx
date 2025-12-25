import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LoginScreen from "@/components/LoginScreen";
import TravelPlanner from "@/components/TravelPlanner";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Helmet>
        <title>Pick a Plan - AI Travel Planner | Discover Amazing Destinations</title>
        <meta 
          name="description" 
          content="Plan your dream trip with Pick a Plan, your AI-powered travel companion. Discover 80+ cities, local cuisines, and get personalized day-wise itineraries." 
        />
        <meta name="keywords" content="travel planner, AI travel, trip itinerary, vacation planning, travel destinations" />
      </Helmet>
      
      {isLoggedIn ? (
        <TravelPlanner />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default Index;
