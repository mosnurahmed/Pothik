import React, { useEffect, useState } from "react";
import { useAddBlogMutation } from "../../feature/blog/blogApi";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [addBlog, { data, isLoading, error }] = useAddBlogMutation();
  const [responseError, setResponseError] = useState(undefined);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error?.data) {
      setResponseError(error.data);
    }
    if (data) {
      navigate("/blogs");
    }
  }, [navigate, setResponseError, error, data]);

  const handlePost = (e) => {
    e.preventDefault();

    let date = new Date().toLocaleDateString("en-GB");
    addBlog({
      title,
      description,
      thumbnail,
      date,
      author: user,
    });
  };

  // return (
  //   <div>
  //     <h1>ADD Blog Information</h1>

  //     <form onSubmit={handlePost}>
  //       <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
  //       <br />

  //       <input
  //         type="text"
  //         placeholder="Description"
  //         value={description}
  //         onChange={(e) => setDescription(e.target.value)}
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         placeholder="Thumbnail Link"
  //         value={thumbnail}
  //         onChange={(e) => setThumbnail(e.target.value)}
  //       />
  //       <br />
  //       <button type="submit" disabled={isLoading}>
  //         Post
  //       </button>
  //     </form>
  //     <div>{responseError}</div>
  //   </div>
  // );


  return (
    <>
      <Header />
      <div className="container add-pack mx-auto mt-24 p-4">
        <h1 className="text-4xl text-teal-500 text-center font-bold mb-8"> ADD Blog Information</h1>

        <form className="max-w-lg mx-auto" onSubmit={handlePost}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-emerald-300	 font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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


      
          <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded" disabled={isLoading}>
            Post
          </button>
          <div>{responseError}</div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddBlog;
