import React from "react";

const Categories = () => {
  const Data = [
    {
      id: 1,
      name: "Sofas",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      description: "Comfortable and stylish sofas for your living room",
      items: 120,
    },
    {
      id: 2,
      name: "Beds",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      description: "Modern beds designed for better sleep",
      items: 80,
    },
    {
      id: 3,
      name: "Chairs",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      description: "Ergonomic chairs for home and office",
      items: 150,
    },
    {
      id: 4,
      name: "Tables",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      description: "Dining and coffee tables for every space",
      items: 95,
    },
    {
      id: 5,
      name: "Wardrobes",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
      description: "Spacious wardrobes with modern design",
      items: 60,
    },
    {
      id: 6,
      name: "TV Units",
      image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
      description: "Stylish TV units for your living room",
      items: 45,
    },
  ];

  return (
    <div className="container p-5">
      <h1>Our Furniture Categories</h1>
      <p>Comfortable and stylish sofas perfect for your living room.</p>
      <p>Modern beds designed for better sleep and relaxation.</p>

      <div className="row">
        {Data.map((c) => (
          <div key={c.id} className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow">
              <img src={c.image} className="card-img-top" alt={c.name} />
              <div className="card-body">
                <h2>{c.name}</h2>
                <p>{c.description}</p>
                <p>Items Available: {c.items}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;