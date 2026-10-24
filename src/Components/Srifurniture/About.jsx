import React from "react";

const About = () => {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">About Us</h2>

      <p className="text-center">
        Welcome to our furniture store!
      </p>

      <div className="row mt-4">

        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-psd/midcentury-modern-grey-sofa-with-wooden-frame_632498-25556.jpg?semt=ais_incoming&w=740&q=80"
            className="w-100 rounded"
            alt="Furniture"
          />
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h4>Who We Are</h4>
            <p>
              We are passionate about creating modern and affordable furniture 
              for every home. Our designs combine functionality with aesthetics 
              to give you the best experience.
            </p>

            <h4>Our Mission</h4>
            <p>
              Our mission is to deliver quality furniture at affordable prices 
              while ensuring customer satisfaction and trust.
            </p>

            <h4>Why Choose Us?</h4>
            <ul>
              <li>✔ High Quality Products</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ Fast Delivery</li>
              <li>✔ Modern Designs</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;