import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane, MapPin, Compass } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Hero */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground/5" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-primary-foreground">
          <div className="animate-float">
            <Plane className="w-20 h-20 mb-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Pick a Plan</h1>
          <p className="text-xl opacity-90 text-center max-w-md">
            Your AI-powered travel companion for discovering amazing destinations worldwide
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <MapPin className="w-8 h-8" />
              <div>
                <p className="font-semibold">80+ Cities</p>
                <p className="text-sm opacity-80">Across the globe</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <Compass className="w-8 h-8" />
              <div>
                <p className="font-semibold">AI Powered</p>
                <p className="text-sm opacity-80">Smart itineraries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in">
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="gradient-hero p-4 rounded-2xl">
              <Plane className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h2>
            <p className="text-muted-foreground">Please login to continue planning your trip</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button onClick={onLogin} className="text-primary font-medium hover:underline">
              Continue as Guest
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
