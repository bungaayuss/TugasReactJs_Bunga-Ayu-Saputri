import React from 'react';

const BookList = ({ books }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {books.map((book) => (
          <div key={book.id} className="col">
            <div
              className="card h-100 shadow-sm border-0"
              style={{ maxWidth: '350px', margin: '0 auto' }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body p-3">
                <h6 className="card-title text-center fw-bold">{book.title}</h6>
                <p className="card-text mb-1" style={{ fontSize: '0.9rem' }}>
                  <strong>Penulis:</strong> {book.author}
                </p>
                <p className="card-text mb-1" style={{ fontSize: '0.9rem' }}>
                  <strong>Tahun:</strong> {book.year}
                </p>
                <p className="card-text" style={{ fontSize: '0.85rem' }}>
                  {book.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;