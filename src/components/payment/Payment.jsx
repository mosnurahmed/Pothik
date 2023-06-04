import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useGetIdPackQuery, useGetPackageQuery } from "../../feature/package/packageApi";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Payment() {
  const { packId } = useParams();
  const { data: pack, isLoading, isError } = useGetIdPackQuery(packId);
  const [person, setPerson] = useState(1);
  const [totalAmount, setTotalAmount] = useState(parseInt(undefined));
  const [isGroup, setIsGroup] = useState(false);

  useEffect(() => {
    if (pack) {
      let amount = parseInt(pack.price) * parseInt(person);
      setTotalAmount(amount);
    }
    if (parseInt(person) > 1) {
      setIsGroup(true);
    }
    if (parseInt(person) < 1) {
      setIsGroup(false);
    }
  }, [pack, person]);

  const handlePayment = () => {
    const data = {
      email: "alice@gmail.com",
      price: 2000,
      packageName: "KUAKATA",
    };

    fetch("http://localhost:3000/payment", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.url) {
          window.location.replace(data.url);
          console.log(data.url);
        }
      });
  };
  const status = {
    group: isGroup,
    person,
  };

  localStorage.setItem("status", JSON.stringify(status));

  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && pack?.id) {
    const { name, thumbnail, description } = pack || {};

    content = (
      <>
        <div className="col-span-1 p-8">
          <div className="blog-details mb-8">
            <img src={thumbnail} alt={name} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-2"> {name}</h2>

            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div className="col-span-1 p-8">
          <div className="form-container bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Form</h2>
       
              <div className="mb-4">
                <label htmlFor="person" className="block text-gray-700 font-bold mb-2">
                  Person:
                </label>
                <input
                  type="text"
                  id="person"
                  name="person"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="totalAmount" className="block text-gray-700 font-bold mb-2">
                  Total Amount:
                </label>
                <input
                  type="number"
                  id="totalAmount"
                  name="totalAmount"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={totalAmount}
                />
              </div>
              <button
            
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePayment}
              >
                Pay Now
              </button>
        
          </div>
        </div>
      </>
    );
  }

  // console.log(typeof person, typeof totalAmount)



  // return (
  //   <div>
  //     <input type="number" placeholder="Person" value={person} onChange={(e) => setPerson(e.target.value)} /> <br />
  //     <input type="number" placeholder="total amount" value={totalAmount} /> <br />
  //     <button className="btn" onClick={handlePayment}>
  //       Pay Now
  //     </button>
  //   </div>
  // );
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-8 justify-center w-10/12 m-auto py-20">{content}</div>
      <Footer />
    </>
  );
}

export default Payment;
