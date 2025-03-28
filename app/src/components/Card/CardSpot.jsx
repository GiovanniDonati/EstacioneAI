/* eslint-disable react/prop-types */
import { PenBox, Trash2Icon } from "lucide-react";

function CardSpot() {
  const spot = "A-01";
  return (
    <div className="relative flex flex-col pt-10 pl-10 space-y-4 w-fit pr-12 h-fit pb-8 rounded-2xl bg-[#040D12] ">
      <div className="mb-8">
        <h1 className="absolute flex items-center justify-center left-4 top-4 text-white text-xl font-medium border-2 rounded-full p-1 aspect-square">
          {spot}
        </h1>
        <button className="absolute right-14 top-6">
          <PenBox className="text-white" />
        </button>
        <button className="absolute right-4 top-6">
          <Trash2Icon className="text-white" />
        </button>
      </div>
      <InfoSpot>Client: Giovanni Donati</InfoSpot>
      <InfoSpot>Car: Ford Fiesta</InfoSpot>
      <InfoSpot>Entrada: 03/27/2025</InfoSpot>
      <InfoSpot>Color: White</InfoSpot>
      <InfoSpot>Plate: AY0J23K</InfoSpot>
    </div>
  );
}

function InfoSpot({ children }) {
  return <h1 className="text-white font-medium text-xl">{children}</h1>;
}

export default CardSpot;
