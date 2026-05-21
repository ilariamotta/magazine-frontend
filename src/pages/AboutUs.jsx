import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <main className="container py-5">
            {/* BREADCRUMB */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="bread-pixel pixel-link" to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active bread-pixel" aria-current="page">About</li>
                </ol>
            </nav>
            {/* FINE BREADCRUMB */}

            {/* HERO ABOUT */}
            <section
                className="article-card mb-5"
                style={{ borderColor: "var(--border-dark)", boxShadow: "8px 8px 0 var(--neon-pink)", }}>
                <div className="article-card-body p-4 p-lg-5">
                    <img src="/logo.png" alt="About Us" className="img-fluid mb-4 about-hero" />
                    <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-4 text-center">Racconta la cultura pop con occhi curiosi</h1>
                    <p className="pixel-text fs-5 mb-0">
                        Pixel Pop è un magazine digitale dedicato a videogiochi, anime,
                        manga, retrogaming e cultura giapponese. Uno spazio editoriale dove
                        estetica pop, nostalgia e approfondimento si incontrano.
                    </p>
                </div>
            </section>
            {/* FINE HERO ABOUT */}

            {/* CONTENUTO 1*/}
            <section className="row g-4">
                <div className="col-12 col-lg-6">
                    <div className="article-card h-100">
                        <div className="article-card-body p-4">
                            <h2 className="pixel-title text-uppercase mb-3">Cosa trovi su Pixel Pop</h2>
                            <p className="pixel-text">
                                Su Pixel Pop trovi articoli dedicati ai mondi che ci fanno
                                emozionare: videogiochi, anime, manga, retrogaming, estetica
                                giapponese e immaginari digitali.
                            </p>
                            <p className="pixel-text mb-0">
                                Non solo notizie, ma anche riflessioni, percorsi tematici,
                                consigli e approfondimenti pensati per chi ama la cultura pop in
                                tutte le sue forme.
                            </p>
                        </div>
                    </div>
                </div>
                {/* CONTENUTO 2 */}
                <div className="col-12 col-lg-6">
                    <div className="article-card h-100">
                        <div className="article-card-body p-4">
                            <h2 className="pixel-title text-uppercase mb-3">Il nostro stile</h2>
                            <p className="pixel-text">
                                Il sito nasce con un’identità visiva chiara, colorata e un po’
                                arcade: griglie, ombre nette, colori neon e richiami al mondo
                                pixel.
                            </p>
                            <p className="pixel-text mb-0">
                                L’obiettivo è creare un’esperienza leggibile, pop e riconoscibile,
                                come un piccolo magazine online da esplorare articolo dopo
                                articolo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* FINE CONTENUTO */}

            {/* PULSANTE */}
            <section className="text-center mt-5">
                <Link to="/articoli" className="pixel-btn">
                    Esplora gli articoli
                </Link>
            </section>
        </main>
    );
}