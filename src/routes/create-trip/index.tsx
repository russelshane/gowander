/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfoIcon, MoveRightIcon, UsersIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlannerHero } from "@/components/custom/planner/PlannerHero";
import {
  TravelerBudgetList,
  TravelerTypeList,
} from "@/constants/planner-options";

interface IPlaceResult {
  label: string;
  value: any;
}

function CreateTrip() {
  const [place, setPlace] = useState<IPlaceResult>();

  return (
    <main className="w-full">
      <PlannerHero place={place} setPlace={setPlace} />

      <div className="p-8 py-20 flex flex-col gap-10 w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl md:text-5xl  text-slate-800">
            Travel Preferences
          </h1>
          <p className="text-slate-600 max-w-2xl text-md md:text-xl">
            Please provide some basic information to help us deliver better
            results.
          </p>
        </div>

        <section className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-20">
          <div className="flex flex-col md:flex-row gap-8 items-center w-full">
            <h2 className="w-full max-w-full md:max-w-md text-3xl font-medium leading-tight text-slate-800">
              1. &nbsp;&nbsp;How many days are you planning to spend?
            </h2>
            <Input
              type="number"
              placeholder="Ex. 3"
              className="max-w-lg p-8 text-lg border-2 focus-visible:ring-orange-400"
            />
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h2 className="w-full max-w-full md:max-w-md text-3xl font-medium leading-tight text-slate-800">
              2. &nbsp;&nbsp;Tell us your price point
            </h2>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2 justify-between">
              {TravelerBudgetList.map((val, index) => (
                <div
                  className="flex flex-col gap-1.5 border-2 rounded-md cursor-pointer p-6 hover:bg-slate-200"
                  key={index}
                >
                  {val.icon}
                  <h3 className="text-xl font-bold text-slate-800">
                    {val.title}
                  </h3>
                  <p className="text-slate-600">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <h2 className="w-full max-w-full md:max-w-md text-3xl font-medium leading-tight text-slate-800">
              3. &nbsp;&nbsp;Who are you travelling with?
            </h2>

            <div className="grid grid-cols-2 gap-2 w-full justify-between">
              {TravelerTypeList.map((val, index) => (
                <div
                  className="flex flex-col gap-1.5 border-2 w-full rounded-md cursor-pointer p-6 hover:bg-slate-200"
                  key={index}
                >
                  {val.icon}
                  <h3 className="text-xl font-bold text-slate-800">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 mt-2 flex gap-1.5 text-sm items-center">
                    <UsersIcon size={16} />
                    {val.people}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <Button className="bg-orange-400 text-lg py-7 flex gap-4 items-center">
              Generate Travel Plan
              <MoveRightIcon />
            </Button>

            <p className="text-sm text-slate-600">
              <InfoIcon
                className="inline mr-1.5 text-blue-600 -mt-1.5"
                size={20}
              />
              By generating a travel plan, You agree that we will process
              non-anonymous data that you have entered above along with your
              email. For more information, read our{" "}
              <Link
                className="cursor-pointer text-orange-400 underline hover:opacity-60"
                to="/help/privacy"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CreateTrip;
