import {
  BanknoteIcon,
  GemIcon,
  HandHeartIcon,
  HouseIcon,
  PiggyBank,
  PlaneIcon,
  TentTreeIcon,
} from "lucide-react";

export const TravelerTypeList = [
  {
    id: 0,
    title: "Just Me",
    description: "A sole traveler in exploration",
    icon: <PlaneIcon className="text-orange-400" />,
    people: "1 person",
  },
  {
    id: 1,
    title: "For Couples",
    description: "Two travelers in tandem",
    icon: <HandHeartIcon className="text-orange-400" />,
    people: "2 persons",
  },
  {
    id: 2,
    title: "A Family",
    description: "A group of fun loving adventure",
    icon: <HouseIcon className="text-orange-400" />,
    people: "3 to 6",
  },
  {
    id: 3,
    title: "More People",
    description: "Build new memories with a lot of people",
    icon: <TentTreeIcon className="text-orange-400" />,
    people: "10 or more",
  },
];

export const TravelerBudgetList = [
  {
    id: 0,
    title: "On a Budget",
    description: "Stay concious of costs",
    icon: <PiggyBank className="text-orange-400" />,
  },
  {
    id: 1,
    title: "Moderate",
    description: "Costs stay on average",
    icon: <BanknoteIcon className="text-orange-400" />,
  },
  {
    id: 2,
    title: "Luxury",
    description: "Costs are not of worry",
    icon: <GemIcon className="text-orange-400" />,
  },
];
