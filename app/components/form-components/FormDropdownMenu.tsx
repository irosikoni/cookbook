"use client";

export default function FormDropdownMenu() {
  return (
    <div className="">
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        className="text-white bg-cupcake-dark-grey
        hover:bg-cupcake-dark-grey focus:outline-none 
        focus:cupcake-light-grey font-medium border-2 w-24 border-black rounded-md 
        text-sm px-2 py-0.5 text-center inline-flex items-center 
        dark:bg-cupcake-dark-grey dark:hover:bg-cupcake-dark-grey"
        type="button"
      >
        Dropdown{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownBgHover"
        className="z-10 hidden border-2 border-black rounded-md bg-white shadow dark:bg-cupcake-dark-grey"
      >
        <ul
          className="p-3 space-y-1 text-sm text-cupcake-dark-grey dark:text-gray-200"
          aria-labelledby="dropdownBgHoverButton"
        >
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-400">
              <input
                id="checkbox-item-4"
                type="checkbox"
                value=""
                className="w-4 h-4 text-black bg-gray-100 border-black rounded  dark:bg-gray-600 dark:border-black"
              ></input>
              <label
                htmlFor="checkbox-item-4"
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-cupcake-pink"
              >
                Default checkbox
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-400">
              <input
                id="checkbox-item-5"
                type="checkbox"
                value=""
                className="w-4 h-4 text-black bg-gray-100 border-black rounded  dark:bg-gray-600 dark:border-black"
              ></input>
              <label
                htmlFor="checkbox-item-5"
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-cupcake-pink"
              >
                Checked state
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-400">
              <input
                id="checkbox-item-6"
                type="checkbox"
                value=""
                className="w-4 h-4 text-black bg-gray-100 border-black rounded  dark:bg-gray-600 dark:border-black"
              ></input>
              <label
                htmlFor="checkbox-item-6"
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-cupcake-pink"
              >
                Default checkbox
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
