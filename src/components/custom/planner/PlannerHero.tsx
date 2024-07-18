/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin } from "lucide-react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface IPlannerHero {
  place: any;
  setPlace: (v: any) => any;
}

function PlannerHero({ place, setPlace }: IPlannerHero) {
  return (
    <div className="w-full bg-tripHero bg-cover bg-center">
      <div className="px-8 py-20 w-full bg-black bg-opacity-30">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-md text-slate-100">
            Select your destination
          </h1>
          <p className="text-slate-100 text-md drop-shadow-md md:text-xl">
            Our AI trip planner will generate a personalized travel plan for you
            based on your preferences.
          </p>

          <div className="w-full max-w-3xl p-3 bg-slate-100 rounded-xl flex items-center gap-2">
            <MapPin className="text-slate-600" />
            <div className="w-full">
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                selectProps={
                  {
                    place,
                    onChange: (v: any) => {
                      setPlace(v);
                      console.log(v);
                    },
                  } as any
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlannerHero };
