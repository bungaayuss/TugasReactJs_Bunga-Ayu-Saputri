import React from "react";

const teamMembers = [
  {
    name: "Ayu Lestari",
    position: "Content Manager",
    description: "Mengelola deskripsi buku, metadata, cover, dan kategori dalam BookSales.",
    image: "https://mommiesdaily.com/wp-content/uploads/2023/03/beautiful-model-girl-with-perfect-fresh-clean-skin-youth-skin-care-concept-isolated-pastel-brown-background.jpg"
  },
  {
    name: "Budi Santoso",
    position: "Account Manager",
    description: "Mengelola hubungan dengan penerbit atau penulis, serta pelanggan besar.",
    image: "https://i.pinimg.com/736x/f9/e1/1a/f9e11a06eecc1c266aaee7c23b3fb66e.jpg"
  },
  {
    name: "Dewi Lestari",
    position: "Copyright Analyst",
    description: "Menangani perjanjian penerbitan, hak cipta buku, dan perlindungan kekayaan intelektual.",
    image: "https://i.pinimg.com/originals/f0/c2/c1/f0c2c1df116b728a999f778300fa572b.jpg"
  },
  {
    name: "Siti Nurhaliza",
    position: "Editor Buku / Reviewer",
    description: "Meninjau kualitas konten buku.",
    image: "https://i.pinimg.com/originals/f0/f0/9c/f0f09c886de211947602851b08b5599c.jpg"
  },
  {
    name: "Rama Wijaya",
    position: "Customer Support Manager",
    description: "Menyediakan layanan pelanggan terbaik untuk pengguna.",
    image: "https://i.pinimg.com/originals/71/4d/32/714d32a04f8c49cadcaa8dacdf401172.jpg"
  }
];

const Team = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center shadow-sm">
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="text-muted">{member.position}</h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
