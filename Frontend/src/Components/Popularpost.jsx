import React from 'react'
import shutterbug150 from "../assets/images/shutterbug-150.jpg";
import wheel150 from "../assets/images/wheel-150.jpg";
import beetle150 from "../assets/images/beetle-150.jpg";
import tulips150 from "../assets/images/tulips-150.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import salad from "../assets/images/salad-150.jpg";

const Popularpost = () => {
  return (
    <>
    <section className="s-extra">
        <div className="row top">
          <div className="col-eight md-six tab-full popular">
            <h3>Popular Posts</h3>

            <div className="block-1-2 block-m-full popular__posts">
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={wheel150} alt="" />
                </a>
                <h5>
                  <a>Visiting Theme Parks Improves Your Health.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>
                    <time dateTime="2017-12-19">Dec 19, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={shutterbug150} alt="" />
                </a>
                <h5>
                  <a>Key Benefits Of Family Photography.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-18">Dec 18, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={cookies} alt="" />
                </a>
                <h5>
                  <a>Absolutely No Sugar Oatmeal Cookies.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={beetle150} alt="" />
                </a>
                <h5>
                  <a>Throwback To The Good Old Days.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={tulips150} alt="" />
                </a>
                <h5>
                  <a>10 Interesting Facts About Caffeine.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-14">Dec 14, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={salad} alt="" />
                </a>
                <h5>
                  <a>Healthy Mediterranean Salad Recipes</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time dateTime="2017-12-12">Dec 12, 2017</time>
                  </span>
                </section>
              </article>
            </div>
          </div>

          <div className="col-four md-six tab-full about">
            <h3>About Philosophy</h3>

            <p>
            Our blog app is a user-friendly platform for creating, managing,
              and sharing blogs. With features like secure login, blog
              whitelisting, and a fully responsive design, it ensures a seamless
              experience across devices. Only authenticated users can create or
              manage blogs, maintaining a secure and professional environment
              for storytelling..
            </p>

            <ul className="about__social">
              <li>
                <a>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row bottom tags-wrap">
          <div className="col-full tags">
            <h3>Tags</h3>

            <div className="tagcloud">
              <a>Salad</a>
              <a>Recipe</a>
              <a>Places</a>
              <a>Tips</a>
              <a>Friends</a>
              <a>Travel</a>
              <a>Exercise</a>
              <a>Reading</a>
              <a>Running</a>
              <a>Self-Help</a>
              <a>Vacation</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Popularpost