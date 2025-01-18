import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5110/allblogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="container mt-5">
        {/* Blog Content */}
        <div className="card mb-5 shadow">
          <img
            src={blog.image}
            className="card-img-top"
            alt={blog.title}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h1 className="card-title text-center">{blog.title}</h1>
            <p className="card-text text-center text-muted">
              <small>
                Published on {blog.date} | Category:{" "}
                <span className="text-primary">{blog.category}</span>
              </small>
            </p>
            <p className="lead">{blog.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog;
