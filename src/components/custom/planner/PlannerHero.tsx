import { MapPin, SearchIcon } from "lucide-react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface IPlannerHero {
  destination?: string;
  setDestination: (d: string) => void;
}

function PlannerHero({ setDestination }: IPlannerHero) {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>();
  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

  useEffect(() => {
    // Fetch place details for the first element in placePredictions array
    if (placePredictions.length) {
      setShowResults(true);
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails: void) => console.log(placeDetails)
      );
    }
  }, [placePredictions, placesService]);

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

          <div className="w-full max-w-3xl p-4 bg-slate-100 rounded-xl flex items-center gap-2">
            <MapPin className="text-slate-600" />
            <div className="w-full">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  getPlacePredictions({ input: e.target.value });
                }}
                placeholder="Search for cities and other destinations"
                className="border-none bg-slate-100 px-1.5 py-0 text-slate-600 text-lg focus-visible:ring-transparent focus-visible:ring-offset-transparent"
              />
              {showResults && placePredictions.length ? (
                <>
                  <div className="absolute bg-slate-100 p-4 w-full max-w-3xl left-8 mt-6 rounded-md shadow-sm">
                    {placePredictions.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-2 items-center rounded-md p-2 mb-1.5 cursor-pointer hover:bg-slate-200"
                        onClick={() => {
                          console.log(item);
                          setShowResults(false);
                          setSearchQuery(item.description);
                          setDestination(item.description);
                        }}
                      >
                        <SearchIcon size={18} className="text-slate-500" />
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlannerHero };
