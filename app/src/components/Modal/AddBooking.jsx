/* eslint-disable react/prop-types */
import apiRouter from "../../api/api";
import { useState } from "react";

import InputModal from "../Text/InputModal";
import ButtonModal from "../Button/ButtonModal";

function AddBoooking({ modal }) {
  const [cadastro, setCadastro] = useState({
    client: "",
    model: "",
    car: "",
    color: "",
    plate: "",
  });

  const handleChange = (field, value) => {
    setCadastro((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const postData = async () => {
    try {
      const response = await apiRouter.post("/car/", {
        marca: cadastro.car,
        modelo: cadastro.model,
        cor: cadastro.color,
        placa: cadastro.plate,
      });
      modal();
      console.log(response.data);
    } catch (e) {
      alert("Error on create car: ", e);
    }
  };

  return (
    <div className="fixed inset-0 flex items-start justify-center pt-20 bg-black/40">
      <div className="flex flex-col justify-center w-1/3 max-w-xl p-6 space-y-2 bg-white rounded-lg max-lg:w-1/2 max-sm:w-5/6">
        <h2 className="mb-2 text-2xl font-semibold">Include Booking</h2>
        <InputModal
          placeholder="Client"
          value={cadastro.client}
          onChange={(e) => handleChange("client", e.target.value)}
        />
        <InputModal
          placeholder="Car"
          value={cadastro.car}
          onChange={(e) => handleChange("car", e.target.value)}
        />
        <InputModal
          placeholder="Model"
          value={cadastro.model}
          onChange={(e) => handleChange("model", e.target.value)}
        />
        <InputModal
          placeholder="Color"
          value={cadastro.color}
          onChange={(e) => handleChange("color", e.target.value)}
        />
        <InputModal
          placeholder="Plate"
          value={cadastro.plate}
          onChange={(e) => handleChange("plate", e.target.value)}
        />
        <div className="flex justify-around">
          <ButtonModal
            bgColor={"bg-green-500 hover:bg-green-700"}
            onClick={postData}
          >
            Adicionar
          </ButtonModal>
          <ButtonModal
            bgColor={"bg-red-500 hover:bg-red-700"}
            onClick={() => modal()}
          >
            Fechar
          </ButtonModal>
        </div>
      </div>
    </div>
  );
}

export default AddBoooking;
