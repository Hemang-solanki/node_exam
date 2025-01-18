import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  const handleLike = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:5010/${blogId}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId: sessionStorage.getItem("UserId") }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.msg);
        return;
      }

      const updatedBlog = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        )
      );
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5110/allBlogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Header />

      <div className="container my-5">
        {/* Featured Section */}
        

        {/* Blog Cards Section */}
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <Link to={`/allblogs/${blog._id}`}>
                  <img src={blog.image} className="card-img-top" alt={blog.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-truncate">{blog.description}</p>
                  <p className="text-muted">{blog.category}</p>
                </div>
                {/* <div className="card-footer d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleLike(blog._id)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      color={blog.likedBy.includes(sessionStorage.getItem("UserId")) ? "red" : "black"}
                    />{" "}
                    {blog.like}
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <FontAwesomeIcon icon={faBookmark} />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
