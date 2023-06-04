import React, { useState, useMemo, useEffect } from "react";
import "./admin.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import { useGetBookingQuery } from "../../feature/booking/bookingApi";
import TableData from "./TableData";
import SeatPlan from "./SeatPlan";

import Seat from "./Seat";
import SeatOptimiz from "./SeatOptimiz";
import Pagination from "./Pagination";

function Package({ p }) {
  const [toggle, setToggle] = useState(false);
  const [request, setRequest] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(2);
  const [name, setName] = useState("");
  // const [totalPage,setTotalPage] =useState(undefined)

  const {
    data: passengers,
    isLoading,
    isError,
  } = useGetBookingQuery(p.id, {
    skip: request,
  });

  const toggleHandle = (event) => {
    setName(event.target.textContent);
    setRequest(false);

    setToggle(!toggle);
  };

  // table content

  let tableContent = null;
  let pageContent = null;

  let seatCount = 0;

  if (isLoading) {
    tableContent = <li className="m-2 text-center">Loading...</li>;
    pageContent = <div>Loading</div>;
  } else if (!isLoading && isError) {
    tableContent = <div>There was an error!!!</div>;
    pageContent = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && passengers?.length === 0) {
    tableContent = <div>There was no Passenger Available</div>;
    pageContent = <div>..</div>;
  } else if (!isLoading && !isError && passengers?.length > 0) {
    let totalPage = Math.ceil(passengers.length / perPage);
    console.log(totalPage);

    pageContent = <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />;
    tableContent = passengers.slice((currentPage - 1) * perPage, currentPage * perPage).map((passenger) => {
      seatCount = seatCount + 1;
      return <TableData passenger={passenger} seatCount={seatCount} />;
    });
  }

  const seatPlan = useMemo(() => {
    let data = [];
    let currentRow = 0;
    let currentSeatNo = 0;
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const totalSeat = 16;

    for (let i = 1; i <= totalSeat; i++) {
      currentSeatNo += 1;
      data.push(`${rows[currentRow]}${currentSeatNo}`);
      if (i % 4 === 0) {
        currentRow += 1;
        currentSeatNo = 0;
      }
    }
    return data;
  }, []);

  return (
    <div className="ring-offset-2  my-10 py-3 ring" onClick={toggleHandle}>
      <div className="my-4 pl-20">
        <div className="grid grid-cols-2 justify-between ">
          <button className="accordion text-xl font-bold text-left uppercase text-[#2ED89B] ">{p.name}</button>
          <div className="text-right pr-6">
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>

        <div className={`panel uppercase text-xl ${toggle ? "" : "hidden"}`}>
          <div className="py-2">
            <p className="py-2">Bus No</p>
            {pageContent}
          </div>

          <div className="grid grid-cols-2 justify-between my-4 gap-6">
            <div className="grid grid-cols-4 row-auto gap-2 max-w-[450px]">
              {seatPlan.length > 0 &&
                seatPlan.map((seat, index) => (
                  <Seat
                    isBooked={passengers?.slice((currentPage - 1) * perPage, currentPage * perPage).length > index}
                    label={seat}
                  />
                ))}
            </div>

            <div className="bg-[#D9D9D9] text-gray-700 text-right mr-20">
              <table id="first_table" className="text-sm">
                <thead>
                  <tr>
                    <th className="p-2">SEAT NO</th>
                    <th className="p-2">PASSENGER NAME</th>
                    <th className="p-2">dESTINATION</th>
                    <th className="p-2">pAYMENT STATUS</th>
                  </tr>
                </thead>

                <tbody className="text-center font-semibold">{tableContent}</tbody>
              </table>
            </div>
          </div>
          <SeatOptimiz p={p} />
          <div className="rounded-lg text-center bg-emerald-300 mr-32 ml-14 p-4">
            <h2 className="text-white text-2xl mb-2">Total Passenger : {p.totalPassenger}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
