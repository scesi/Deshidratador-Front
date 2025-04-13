import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-48 flex-col">
      <ul className="px-10">
        <li className="font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.10352 0.496979L0.103516 6.89698V16.497H6.32572V11.1636H9.88131V16.497H16.1035V6.89698L8.10352 0.496979Z"
              fill="#173555"
            />
          </svg>
          Inicio
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
