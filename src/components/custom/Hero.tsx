import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center mx-auto my-32 md:my-40 gap-9 p-6 md:p-0">
      <h1 className="w-full leading-tight font-extrabold text-center text-4xl  md:text-6xl md:leading-tight">
        Discover your next&nbsp;
        <span className="text-orange-300 inline-block">
          personalized adventure
        </span>
        &nbsp;with AI
      </h1>
      <p className="text-center text-slate-600 text-md md:text-lg">
        Your personal travel planner and companion.
        <br />
        Create custom trips tailored to your interest and budget.
      </p>
      <Button size="lg" className="bg-blue-500">
        Get Started
      </Button>
    </div>
  );
}

export default Hero;
