import AddBooking from "../components/Modal/AddBooking";
import Title from "../components/Text/Title";
import CardSpot from "../components/Card/CardSpot";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

function Dashboard() {
  const [modalAdd, setModalAdd] = useState(false);

  const toggleModal = () => {
    setModalAdd(!modalAdd);
  };

  return (
    <>
      <div className="flex flex-col h-screen grow space-y-4 p-4">
        <div className="flex justify-between">
          <Title>DASHBOARD</Title>
          <button
            onClick={toggleModal}
            className="flex justify-start items-center gap-2 p-2 bg-green-600 hover:bg-green-500 text-lg font-medium rounded-lg w-1/8"
          >
            <PlusCircle />
            Adicionar
          </button>
        </div>
        <div className="flex justify-around grow space-x-4">
          <CardSpot />
          <CardSpot />
          <CardSpot />
          <CardSpot />
          <CardSpot />
        </div>
      </div>
      {modalAdd && <AddBooking modal={toggleModal} />}
    </>
  );
}

export default Dashboard;
