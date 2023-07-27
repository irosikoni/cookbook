"use client";

import FormDropdownMenu from "./FormDropdownMenu";

export function FiltrationForm() {
  return (
    <div className="flex flex-col border-2 border-black rounded-md p-6 m-6">
      <div className="flex flex-wrap">
        <div className="m-1">
          <input
            className="border-2 w-24 border-black rounded-md"
            placeholder="Name"
          />
        </div>
        <div className=" w-28 m-1">
          <FormDropdownMenu />
        </div>
        <div className="m-1">
          <input
            className="border-2 w-24 border-black rounded-md"
            placeholder="Ingredient"
          />
        </div>
        <div className="w-28 m-1">
          <FormDropdownMenu />
        </div>
        <div className="m-1">
          <input
            className="border-2 w-24 border-black rounded-md"
            placeholder="Time [min]"
          />
        </div>
      </div>
    </div>
  );
}
