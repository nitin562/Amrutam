import React, { useState } from "react";
import "./PickTime.style.css";
import Slot from "./Slot";
import TimeSlots from "./TimeSlots";
export default function PickTime() {
  const [selected, setselected] = useState(null);
  const [TimeSelect, setTimeSelect] = useState(null)
  
  return (
    <div className="PickContainer">
      <div className="HeadingDiv">
        <p>Pick a Time slot</p>
        <div className="stroke"></div>
        <div className="calender">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V6"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 2V6"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 10H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="DateSlots">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0193 9.98043C20.0086 4.45744 15.523 -0.0109155 9.99998 -0.000256465C4.47699 0.0104026 0.00864036 4.49603 0.0192994 10.019C0.0299585 15.542 4.51559 20.0104 10.0386 19.9997C15.5616 19.989 20.0299 15.5034 20.0193 9.98043ZM18.5193 9.98332C18.5236 12.2377 17.6323 14.4014 16.0413 15.9985C14.4503 17.5957 12.29 18.4954 10.0357 18.4997C7.78135 18.5041 5.61762 17.6127 4.02048 16.0217C2.42335 14.4307 1.52365 12.2705 1.5193 10.0161C1.51495 7.76179 2.40631 5.59806 3.99728 4.00093C5.58826 2.4038 7.74854 1.50409 10.0029 1.49974C12.2572 1.49539 14.4209 2.38675 16.0181 3.97773C17.6152 5.56871 18.5149 7.72898 18.5193 9.98332ZM12.058 14.5258C12.1982 14.3849 12.2767 14.1941 12.2763 13.9954C12.276 13.7966 12.1967 13.6062 12.056 13.4658L8.57928 10.0025L12.0426 6.52581C12.1748 6.38338 12.2465 6.1952 12.2427 6.0009C12.2389 5.80661 12.1599 5.62138 12.0222 5.48423C11.8845 5.34708 11.699 5.26873 11.5047 5.26567C11.3104 5.26262 11.1225 5.33511 10.9805 5.46786L6.98826 9.47557C6.84809 9.61647 6.76956 9.80725 6.76995 10.006C6.77033 10.2047 6.84959 10.3952 6.99031 10.5356L10.998 14.5278C11.1389 14.668 11.3297 14.7465 11.5284 14.7462C11.7272 14.7458 11.9177 14.6665 12.058 14.5258Z"
            fill="#808080"
          />
        </svg>

        <Slot
          Date="Mon, 10 Oct"
          slot={"10"}
          selected={selected}
          setselected={setselected}
        />
        <Slot
          Date="Tue, 11 Oct"
          slot={"02"}
          selected={selected}
          setselected={setselected}
        />
        <Slot
          Date="Wed, 12 Oct"
          slot={"05"}
          selected={selected}
          setselected={setselected}
        />
        <svg
        style={{transform:"rotate(180deg)"}}
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0193 9.98043C20.0086 4.45744 15.523 -0.0109155 9.99998 -0.000256465C4.47699 0.0104026 0.00864036 4.49603 0.0192994 10.019C0.0299585 15.542 4.51559 20.0104 10.0386 19.9997C15.5616 19.989 20.0299 15.5034 20.0193 9.98043ZM18.5193 9.98332C18.5236 12.2377 17.6323 14.4014 16.0413 15.9985C14.4503 17.5957 12.29 18.4954 10.0357 18.4997C7.78135 18.5041 5.61762 17.6127 4.02048 16.0217C2.42335 14.4307 1.52365 12.2705 1.5193 10.0161C1.51495 7.76179 2.40631 5.59806 3.99728 4.00093C5.58826 2.4038 7.74854 1.50409 10.0029 1.49974C12.2572 1.49539 14.4209 2.38675 16.0181 3.97773C17.6152 5.56871 18.5149 7.72898 18.5193 9.98332ZM12.058 14.5258C12.1982 14.3849 12.2767 14.1941 12.2763 13.9954C12.276 13.7966 12.1967 13.6062 12.056 13.4658L8.57928 10.0025L12.0426 6.52581C12.1748 6.38338 12.2465 6.1952 12.2427 6.0009C12.2389 5.80661 12.1599 5.62138 12.0222 5.48423C11.8845 5.34708 11.699 5.26873 11.5047 5.26567C11.3104 5.26262 11.1225 5.33511 10.9805 5.46786L6.98826 9.47557C6.84809 9.61647 6.76956 9.80725 6.76995 10.006C6.77033 10.2047 6.84959 10.3952 6.99031 10.5356L10.998 14.5278C11.1389 14.668 11.3297 14.7465 11.5284 14.7462C11.7272 14.7458 11.9177 14.6665 12.058 14.5258Z"
            fill="#808080"
          />
        </svg>
      </div>
      <TimeSlots title={"Morning"} Arr={["9:00 AM","9:30 AM","10:00 AM","10:15 AM","10:45 AM","11:00 AM"]} TimeSelect={TimeSelect} setTimeSelect={setTimeSelect}/>
      <TimeSlots title={"Evening"} Arr={["4:00 PM","4:15 PM","4:30 PM","4:45 PM","5:15 PM"]} TimeSelect={TimeSelect} setTimeSelect={setTimeSelect}/>
      <button id="AppointmentBtn">Make an appointment</button>
    </div>
  );
}
