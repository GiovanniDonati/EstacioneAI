import React from "react";

import ButtonMenu from "./ButtonMenu";
import {
  ChartNoAxesCombinedIcon,
  Component,
  ParkingCircle,
  UserCircle,
} from "lucide-react";
import LogoMenu from "./LogoMenu";

function AsideMenu() {
  return (
    <div className="flex flex-col flex-shrink-0 w-72 h-screen bg-[#040D12] justify-start items-center space-y-4 pt-10 ">
      <img src="public/parking.svg" className="w-20" />
      <LogoMenu />
      <ButtonMenu to="/dashboard">
        <Component /> Dashboard
      </ButtonMenu>
      <ButtonMenu to="/spots">
        <ParkingCircle /> Spots
      </ButtonMenu>
      <ButtonMenu>
        <ChartNoAxesCombinedIcon /> Amount
      </ButtonMenu>
      <ButtonMenu>
        <UserCircle /> Acount
      </ButtonMenu>
      <div className="absolute text-center bottom-2 text-[#93B1A6] text-sm">
        <p>Development by:</p>
        <p>
          <i>Giovanni Donati</i>
        </p>
      </div>
    </div>
  );
}

export default AsideMenu;
