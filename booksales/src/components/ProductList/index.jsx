import { Link } from "react-router";

export default function ProductList() {
    return (
      <>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Best Selling Book</h1>
                <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                    <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                    <a href="#" className="btn btn-secondary my-2">Other Book</a>
                </p>
                </div>
            </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/img20220928_15154296.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Apakah ada yang lebih menyebalkan dari menyembunyikan perasaan atas nama pertemanan? Saling berdekatan tetapi harus menjaga jarak aman. Semata-mata agar yang kita cintai tetap merasa nyaman.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/img20220924_13195778.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Majnun adalah kisah tentang cinta dan persahabatan, sekaligus semacam catatan kaki atas sejarah yang dilupakan. Selain itu, pembelaan atas kebebasan dan gugatan terhadap ketidakadilan adalah pokok novel ini.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/I_Think_I_Love_You.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Dua priatampan,Jang. Taehyun dan Han Seokjin menjadi bintang kelas di Kyunghee University. Mereka sama-sama tampan dan menjadi bintang kelas. Seorang siswi bernama Jennie Park terlibat konflik dengan Taehyun.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/9786230035463_cover_where_stories.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Where Stories Begin adalah antologi cerpen hasil kurasi Redaksi Novel Elex Media dari perlombaan yang diadakan oleh Wacaku. Where Stories Begin menyuguhkan cerita pendek dari sepuluh penulis yang terpilih dari perlombaan yang diadakan pada 2022 lalu.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/img20220923_19351789.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Cerita ini hanya kilas balik pertemuan kita. Cerita yang hanya mampu kujabarkan lewat rentetan kata. Tentang semua kenangan yang memenuhi rongga kepala. Tentang semua gelak tawa yang menggema di rongga telinga.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/172_Days.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Bisakah aku melanjutkan hidup ini? Dia adalah rumahku dan duniaku. “Aku harus bagaimana sekarang melanjutkan hidupku?” Lirihku dalam hati. Dengan sekejap hidupku berubah. Kebahagiaanku terrenggut dalam hitungan menit.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/9786020651927_Funiculi_Funicula_cov.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Di sebuah gang kecil di Tokyo, ada kafe tua yang bisa membawa pengunjungnya menjelajahi waktu. Keajaiban kafe itu menarik seorang wanita yang ingin memutar waktu untuk berbaikan dengan kekasihnya, seorang perawat yang ingin membaca surat yang tak sempat diberikan.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/Terpikat.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Kisah ini dimulai sejak Aruna yang tidak sengaja melihat Abian dan seketika ia langsung jatuh cinta pada pandangan pertama kepada laki-laki itu. Aruna dan Abian memiliki sifat yang sangat berbeda. Abian terkenal sebagai sosok laki-laki yang sangat kaku bahkan sangat cuek.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img src="https://cdn.gramedia.com/uploads/items/Oh_My_Savior.jpg" className="card-img-top" alt="Best Selling Book" width="100%" height="300px"/>
                    <div className="card-body">
                        <p className="card-text">Mencintai cowok sempurna seperti Zidane Hamizan adalah tantangan sekaligus keberuntungan bagi Zelda Farzana atau yang biasa dipanggil Zee. Cowok yang semua love language-nya bisa digunakan dan pemilik sifat penolong tanpa pamrih.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </>
    );
}