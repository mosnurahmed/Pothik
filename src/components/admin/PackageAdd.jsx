import React, { useEffect, useState } from "react";
import { useAddPackageMutation } from "../../feature/package/packageApi";
import { useNavigate } from "react-router";
import "./admin.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function PackageAdd() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [route, setRoute] = useState("");
  const [duration, setDuration] = useState("");
  const [responseError, setResponseError] = useState("");
  const [totalBus, setTotalBus] = useState("");
  const [seatPerBus, setSeatPerBus] = useState("");
  const [addPackage, { data, isLoading, error }] = useAddPackageMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.data) {
      setResponseError(error.data);
    }
    if (data) {
      navigate("/");
    }
  }, [data, navigate, setResponseError, error]);

  const reset = () => {
    setName("");
    setDescription("");
    setThumbnail("");
    setPrice("");
    setRoute("");
    setDuration("");
  };

  const handlePost = (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      thumbnail,
      price,
      route,
      duration,
      totalBus,
      seatPerBus,
      totalPassenger:"0"
    };
    addPackage(data);
    reset();
  };
  return (
    <>
      <Header />
      <div className="container add-blog mx-auto mt-24 p-4">
        <h1 className="text-4xl text-teal-500 text-center font-bold mb-8"> Package Info</h1>

        <form className="max-w-lg mx-auto" onSubmit={handlePost}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-emerald-300	 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="text-emerald-300	 block font-bold mb-2">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="thumbnail" className=" text-emerald-300	 block font-bold mb-2">
              Thumbnail:
            </label>
            <input
              type="text"
              id="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className=" text-emerald-300	block font-bold mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="route" className=" text-emerald-300	 block font-bold mb-2">
              Route:
            </label>
            <input
              type="text"
              id="route"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className=" text-emerald-300	block font-bold mb-2">
              Duration:
            </label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="totalBus" className=" text-emerald-300	block font-bold mb-2">
              Total Buses:
            </label>
            <input
              type="text"
              id="totalBus"
              value={totalBus}
              onChange={(e) => setTotalBus(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="seatPerBus" className="text-emerald-300	block font-bold mb-2">
              Seats per Bus:
            </label>
            <input
              type="text"
              id="seatPerBus"
              value={seatPerBus}
              onChange={(e) => setSeatPerBus(e.target.value)}
              className="border border-gray-400 rounded w-full px-4 py-2"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded">
            ADD
          </button>
          <div>{responseError}</div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default PackageAdd;
