import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cities, interests, getCityByName, searchCities, City } from "@/data/travelData";
import { 
  Plane, MapPin, Calendar, Utensils, Search, 
  ChevronRight, Sparkles, Globe, Clock, ArrowRight,
  X, Check, Coffee, Building, Mountain
} from "lucide-react";

interface Itinerary {
  city: City;
  days: number;
  selectedInterests: string[];
  dayPlan: { day: number; places: string[] }[];
}

const TravelPlanner = () => {
  const [step, setStep] = useState<"search" | "preferences" | "results">("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [days, setDays] = useState(3);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 1) {
      setSearchResults(searchCities(query).slice(0, 8));
    } else {
      setSearchResults([]);
    }
  };

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
    setSearchQuery(city.name);
    setSearchResults([]);
    setStep("preferences");
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const generateItinerary = () => {
    if (!selectedCity) return;

    setIsGenerating(true);

    setTimeout(() => {
      const placesPerDay = Math.min(4, Math.ceil(selectedCity.places.length / days));
      const dayPlan: { day: number; places: string[] }[] = [];
      const usedPlaces: string[] = [];

      for (let d = 1; d <= days; d++) {
        const dayPlaces: string[] = [];
        for (let p = 0; p < placesPerDay && usedPlaces.length < selectedCity.places.length; p++) {
          const available = selectedCity.places.filter(place => !usedPlaces.includes(place));
          if (available.length > 0) {
            const randomPlace = available[Math.floor(Math.random() * available.length)];
            dayPlaces.push(randomPlace);
            usedPlaces.push(randomPlace);
          }
        }
        if (dayPlaces.length > 0) {
          dayPlan.push({ day: d, places: dayPlaces });
        }
      }

      setItinerary({
        city: selectedCity,
        days,
        selectedInterests,
        dayPlan
      });
      setIsGenerating(false);
      setStep("results");
    }, 1500);
  };

  const resetPlanner = () => {
    setStep("search");
    setSearchQuery("");
    setSelectedCity(null);
    setSelectedInterests([]);
    setDays(3);
    setItinerary(null);
  };

  const popularCities = cities.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="gradient-hero p-2 rounded-xl">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Pick a Plan</span>
          </div>
          
          {step !== "search" && (
            <Button variant="ghost" onClick={resetPlanner} className="gap-2">
              <X className="w-4 h-4" />
              Start Over
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Step 1: Search */}
        {step === "search" && (
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Plan Your <span className="text-gradient">Dream Trip</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover amazing destinations, local cuisines, and create personalized itineraries powered by AI
              </p>
            </div>

            {/* Search Box */}
            <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter the city you want to visit..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="h-14 pl-12 pr-4 text-lg rounded-xl shadow-lg border-2 focus:border-primary"
                />
              </div>

              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <Card className="absolute w-full mt-2 p-2 shadow-xl z-10 max-h-80 overflow-y-auto">
                  {searchResults.map((city, index) => (
                    <button
                      key={city.name}
                      onClick={() => handleCitySelect(city)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{city.name}</p>
                        <p className="text-sm text-muted-foreground">{city.country}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto" />
                    </button>
                  ))}
                </Card>
              )}
            </div>

            {/* Popular Destinations */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Popular Destinations</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {popularCities.map((city, index) => (
                  <button
                    key={city.name}
                    onClick={() => handleCitySelect(city)}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-travel-blue/10 to-travel-sky/10 p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in text-left"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{city.country}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {city.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {city.places.length} places to visit
                    </p>
                    <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/50">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Famous Places</h4>
                  <p className="text-sm text-muted-foreground">Discover must-visit attractions curated by local experts</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/50">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Local Cuisine</h4>
                  <p className="text-sm text-muted-foreground">Explore authentic local foods you must try</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/50">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Smart Itinerary</h4>
                  <p className="text-sm text-muted-foreground">Get day-wise plans based on your preferences</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Preferences */}
        {step === "preferences" && selectedCity && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            {/* Selected City Card */}
            <Card className="p-6 mb-8 gradient-hero text-primary-foreground">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm opacity-80">Selected Destination</p>
                  <h2 className="text-2xl font-bold">{selectedCity.name}</h2>
                  <p className="text-sm opacity-80">{selectedCity.country} • {selectedCity.places.length} attractions</p>
                </div>
              </div>
            </Card>

            {/* Interests Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">
                What type of places do you like?
              </Label>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                      selectedInterests.includes(interest)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {selectedInterests.includes(interest) && <Check className="w-4 h-4" />}
                      {interest}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Days Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">
                How many days do you want to stay?
              </Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-accent rounded-xl p-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`w-12 h-12 rounded-lg font-semibold transition-all ${
                        days === d
                          ? "gradient-hero text-primary-foreground shadow-lg"
                          : "bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <span className="text-muted-foreground">{days === 1 ? "day" : "days"}</span>
              </div>
            </div>

            {/* Warning if too many days */}
            {days > Math.ceil(selectedCity.places.length / 3) && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-xl text-destructive text-sm">
                ⚠️ This city has {selectedCity.places.length} places. A {days}-day itinerary might repeat some attractions or feel sparse.
              </div>
            )}

            {/* Generate Button */}
            <Button
              variant="hero"
              size="xl"
              className="w-full gap-3"
              onClick={generateItinerary}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Generating Your Itinerary...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate My Trip Plan
                </>
              )}
            </Button>

            <Button
              variant="ghost"
              className="w-full mt-4"
              onClick={() => setStep("search")}
            >
              ← Change Destination
            </Button>
          </div>
        )}

        {/* Step 3: Results */}
        {step === "results" && itinerary && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Generated Itinerary
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Your {itinerary.days}-Day Trip to {itinerary.city.name}
              </h1>
              <p className="text-muted-foreground">{itinerary.city.country}</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <Card className="p-4 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{itinerary.city.name}</p>
                <p className="text-sm text-muted-foreground">Destination</p>
              </Card>
              <Card className="p-4 text-center">
                <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{itinerary.days}</p>
                <p className="text-sm text-muted-foreground">{itinerary.days === 1 ? "Day" : "Days"}</p>
              </Card>
              <Card className="p-4 text-center">
                <Building className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">
                  {itinerary.dayPlan.reduce((acc, day) => acc + day.places.length, 0)}
                </p>
                <p className="text-sm text-muted-foreground">Places</p>
              </Card>
              <Card className="p-4 text-center">
                <Coffee className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{itinerary.city.food.length}</p>
                <p className="text-sm text-muted-foreground">Foods to Try</p>
              </Card>
            </div>

            {/* Selected Interests */}
            {itinerary.selectedInterests.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-primary" />
                  Your Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {itinerary.selectedInterests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="px-4 py-2">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Famous Places */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Famous Places in {itinerary.city.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {itinerary.city.places.map((place) => (
                  <Badge key={place} variant="outline" className="px-3 py-1.5">
                    {place}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Day-wise Itinerary */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Day-wise Itinerary
              </h3>
              <div className="space-y-4">
                {itinerary.dayPlan.map((day, index) => (
                  <Card 
                    key={day.day} 
                    className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 text-primary-foreground">
                        <div className="text-center">
                          <p className="text-xs uppercase font-medium opacity-80">Day</p>
                          <p className="text-xl font-bold">{day.day}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-3">
                          {day.day === 1 ? "Arrival & Exploration" : 
                           day.day === itinerary.days ? "Final Day Adventures" : 
                           `Day ${day.day} Discoveries`}
                        </h4>
                        <div className="space-y-2">
                          {day.places.map((place, placeIndex) => (
                            <div 
                              key={place}
                              className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg"
                            >
                              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                {placeIndex + 1}
                              </span>
                              <span className="text-foreground">{place}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Local Food */}
            <Card className="p-6 bg-gradient-to-br from-travel-blue/5 to-travel-sky/5 border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" />
                Must-Try Local Foods
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {itinerary.city.food.map((food, index) => (
                  <div 
                    key={food}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl shadow-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{food}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="gap-2" onClick={resetPlanner}>
                <Plane className="w-5 h-5" />
                Plan Another Trip
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => setStep("preferences")}>
                <Calendar className="w-5 h-5" />
                Modify This Trip
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Pick a Plan. Your AI-powered travel companion.</p>
        </div>
      </footer>
    </div>
  );
};

export default TravelPlanner;
