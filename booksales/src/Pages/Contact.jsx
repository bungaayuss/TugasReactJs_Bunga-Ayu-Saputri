import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
    <Header />
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        {/* Info Kontak */}
        <div className="col-md-4 mb-4">
          <div className="bg-light p-4 rounded shadow-sm">
            <h5 className="mb-3">Informasi Kontak</h5>
            <p><strong>🏠 Alamat:</strong><br />Jl. Buku No. 123, Surabaya</p>
            <p><strong>📧 Email:</strong><br />info@booksales.com</p>
            <p><strong>📞 Telepon:</strong><br />(031) 123-4567</p>
            <hr />
            <p><strong>🕒 Jam Operasional:</strong><br />Senin - Jumat, 08.00 - 17.00 WIB</p>

            <hr />
            <h6 className="text-center">🌐 Sosial Media</h6>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda di sini"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
          </form>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="row mt-5">
        <div className="col-md-12">
          <h5 className="text-center mb-3">📍 Lokasi Kami</h5>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1146608915654!2d112.73424821432242!3d-7.222219494790947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf1dc2ea7a7%3A0x8f4158e07b9cbff9!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1617636870240!5m2!1sen!2sid"
              width="50%"
              height="200px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
