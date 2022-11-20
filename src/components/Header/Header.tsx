import React from "react";

const Header = () => {
  return (
    <div className="relative top-0 p-5 flex w=full items-start justify-between h-[400px] mx-auto xl:items-center bg-[#7b9acc]/75 opacity-70  z-30">
      <h2 className="absolute  top-[55px] uppercase tracking-[5px] text-back-500 text-3xl pl-[50px]">
        TV Bland
      </h2>
      <h4 className="absolute top-[125px] pl-[50px] max-w-[400px]">
        TV Show and web series database. Create personalised schedules, Episode
        guide cast, crew and character information
      </h4>
    </div>
  );
};

export default Header;
