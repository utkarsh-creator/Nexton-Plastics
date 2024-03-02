import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <p>
              Give us orders and we will get it done{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service" style={{ cursor: "pointer" }}>
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title" >
                    {/* <Link to="/ervices" className="stretched-link"> */}
                      Task 1{" "}
                    {/* </Link> */}
                  </h4>
                  <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores, qui pariatur deserunt voluptate harum eveniet earum beatae unde fuga optio debitis in dicta, blanditiis, perspiciatis omnis nostrum inventore! Labore.
                  </p>
                  {/* <Link to="/services" className="btn-get-started">
                    Read More
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service" style={{ cursor: "pointer" }}>
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-collection-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title" >
                    {/* <Link to="/services" className="stretched-link"> */}
                      Task 2
                    {/* </Link> */}
                  </h4>
                  <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur, vitae ducimus asperiores similique ipsum deleniti sit provident odit in earum, praesentium libero. Facere laudantium corrupti adipisci iste atque ratione.
                  </p>
                  {/* <Link to="/services" className="btn-get-started">
                    Read More
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service" style={{ cursor: "pointer" }}>
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-controller"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title" >
                    {/* <Link to="/services" className="stretched-link"> */}
                      Task 3{" "}
                    {/* </Link> */}
                  </h4>
                  <p className="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui placeat et velit molestiae illo quisquam numquam error consequuntur quam sed, aperiam sunt, fuga, sapiente adipisci pariatur voluptatibus harum eligendi nesciunt!
                  </p>
                  {/* <Link to="/services" className="btn-get-started">
                    Read More
                  </Link> */}
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service" style={{ cursor: "pointer" }}>
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title" >
                    {/* <Link to="/services" className="stretched-link"> */}
                      Task 4{" "}
                    {/* </Link> */}
                  </h4>
                  <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, unde ut. Dicta, quidem porro eum, cum corporis accusamus, quod voluptatem ab vel et ex ratione nesciunt suscipit esse officiis aut?{" "}
                  </p>
                  {/* <Link to="/services" className="btn-get-started">
                    Read More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
