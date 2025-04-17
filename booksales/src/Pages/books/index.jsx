import React, { useState } from 'react';
import booksData from "../../Utils/books";
import BookList from '../../components/BookList';
import Header from "../../components/Header";
import Footer from '../../components/Footer';

const Book = () => {
  const [books, setBooks] = useState(booksData);
  const [newBook, setNewBook] = useState({
    id: booksData.length + 1,
    title: '',
    author: '',
    year: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      id: newBook.id + 1,
      title: '',
      author: '',
      year: '',
      description: '',
      image: '',
    });
  };

  return (
    <>
    <Header />
      <h2 className="text-center mb-5 fw-bold" style={{
        background: 'linear-gradient(to right, #007bff, #00c6ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2.5rem'
      }}>
        📚 Daftar Buku
      </h2>

      {/* Form Tambah Buku */}
        <div className="card shadow border-0 rounded-4 mb-5 p-4" style={{ backgroundColor: '#f8f9fa' }}>
        <h4 className="mb-4 text-center text-primary">📝 Tambah Buku Baru</h4>
        <form onSubmit={handleAddBook} className="row g-3">
            <div className="col-md-6">
            <input
                type="text"
                name="title"
                placeholder="Judul"
                value={newBook.title}
                onChange={handleChange}
                className="form-control border-primary"
                required
            />
            </div>
            <div className="col-md-6">
            <input
                type="text"
                name="author"
                placeholder="Penulis"
                value={newBook.author}
                onChange={handleChange}
                className="form-control border-primary"
                required
            />
            </div>
            <div className="col-md-3">
            <input
                type="number"
                name="year"
                placeholder="Tahun"
                value={newBook.year}
                onChange={handleChange}
                className="form-control border-primary"
                required
            />
            </div>
            <div className="col-md-9">
            <input
                type="text"
                name="description"
                placeholder="Deskripsi"
                value={newBook.description}
                onChange={handleChange}
                className="form-control border-primary"
                required
            />
            </div>
            <div className="col-md-12">
            <input
                type="text"
                name="image"
                placeholder="URL Gambar"
                value={newBook.image}
                onChange={handleChange}
                className="form-control border-primary"
                required
            />
            </div>
            <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-4">+ Tambah Buku</button>
            </div>
        </form>
        </div>


      {/* Komponen daftar buku */}
      <BookList books={books} />
      <Footer />
    </>
  );
};

export default Book;
