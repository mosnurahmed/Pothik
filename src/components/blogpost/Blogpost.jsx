import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./blogpost.css";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../feature/blog/blogApi";
import Blog from "./Blog";

const Blogpost = () => {
  const { data: blogs, isLoading, isError } = useGetBlogsQuery();
  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && blogs?.length === 0) {
    content = <div>There was no BLog Available</div>;
  } else if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog) => <Blog blog={blog} />);
  }

  return (
    <>
      <Header />

      <div className="text-centers mt-20  py-8">
        <h1 className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase">Explore All Amazing Story</h1>
        <div className="w-10/12 m-auto">
          <Link to="/addBlog">
            <button className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-green-500 mx-32 hover:to-purple-500 text-white font-semibold py-3 px-6 border-b-4 border-green-700 hover:border-purple-700 rounded">
              {" "}
              Create Blog
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 row-auto gap-y-12 justify-items-center w-10/12 m-auto py-20 bg-[#F5FFFC]">
        {content}
      </div>

      <Footer />
    </>
  );
};

export default Blogpost;
