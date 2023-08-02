"use client";

import FormDropdownMenuCheckbox from "./FormDropdownMenuCheckbox";
import FormDropdownMenuRadio from "./FormDropdownMenuRadio";

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
          <FormDropdownMenuCheckbox dropdownName="Diet" />
        </div>
        <div className="m-1">
          <input
            className="border-2 w-24 border-black rounded-md"
            placeholder="Ingredient"
          />
        </div>
        <div className="w-28 m-1">
          <FormDropdownMenuRadio dropdownName="Category" />
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
