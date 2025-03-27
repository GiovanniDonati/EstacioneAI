import React from "react";

import Title from "../components/Text/Title";
import CardSpot from "../components/Card/CardSpot";
import { PlusCircle } from "lucide-react";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen grow space-y-4 p-4">
      <div className="flex justify-between">
        <Title>DASHBOARD</Title>
        <button className="flex bg-green-700 hover:bg-green-600 gap-2 p-2 rounded-lg w-1/8 justify-start">
          <PlusCircle />
          Adicionar
        </button>
      </div>
      <div className="flex flex-wrap grow space-x-4">
        <CardSpot />
        <CardSpot />
        <CardSpot />
        <CardSpot />
        <CardSpot />
      </div>
    </div>
  );
}

export default Dashboard;
