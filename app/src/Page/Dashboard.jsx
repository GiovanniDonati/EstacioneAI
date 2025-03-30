import apiRouter from "../api/api";
import AddBooking from "../components/Modal/AddBooking";
import Title from "../components/Text/Title";
import CardSpot from "../components/Card/CardSpot";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [modalAdd, setModalAdd] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => {
    setModalAdd(!modalAdd);
  };

  const getData = async () => {
    try {
      const response = await apiRouter.get("/car/carlist");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed z-10 flex items-center justify-center w-screen h-screen space-x-2 bg-white">
          <span className="sr-only">Loading...</span>
          <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-5 h-5 bg-black rounded-full animate-bounce"></div>
        </div>
      )}
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
          {data.map((item) => (
            <CardSpot key={item.id} data={item} />
          ))}
        </div>
      </div>
      {modalAdd && <AddBooking modal={toggleModal} />}
    </>
  );
}

export default Dashboard;
