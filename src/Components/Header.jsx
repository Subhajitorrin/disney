import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import Headeritem from "./Headeritem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  const [menutoggle, setmenutoggle] = useState(false);
  return (
    <div className="flex gap-8 items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] object-cover md:w-[115px]" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => {
            return <Headeritem name={item.name} icon={item.icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <Headeritem name="" icon={item.icon} />
          )}
          <div className="">
            <div className="" onClick={() => setmenutoggle(!menutoggle)}>
              <Headeritem name="" icon={IoMenu} />
            </div>
            {menutoggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <Headeritem name={item.name} icon={item.icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
