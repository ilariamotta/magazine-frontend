export default function Footer() {
  const footerLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Articoli',
      path: '/articoli',
    },
    {
      label: 'Categorie',
      path: '/categorie',
    },
    {
      label: 'Autori',
      path: '/autori',
    },
  ]

  const categoryLinks = [
    {
      label: 'News',
      path: '/news',
    },
    {
      label: 'Videogiochi',
      path: '/videogiochi',
    },
    {
      label: 'Animea',
      path: '/anime',
    },
    {
      label: 'Manga',
      path: '/manga',
    },
    {
      label: 'Recensioni',
      path: '/recensioni',
    },
  ]

  const socialLinks = [
    {
        label: 'X',
        path: '/x',
        icon: 'bi bi-twitter-x',
    },
    {
        label: 'Instagram',
        path: '/instagram',
        icon: 'bi bi-instagram',
    },
    {
        label: 'Youtube',
        path: '/youtube',
        icon: 'bi bi-youtube',
    },
    {
        label: 'TikTok',
        path: '/tiktok',
        icon: 'bi bi-tiktok',
    },

  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* Logo + descrizione */}
          <div className="col-12 col-lg-2">
            <a href="/" className="footer-logo-link">
              <img src="/logo.png" alt="Pixel Pop" className="footer-logo" />
            </a>

            <p className="footer-description mt-3">
              Pixel Pop è un magazine digitale dedicato a videogiochi, anime,
              manga e cultura pop, con uno sguardo editoriale fresco, colorato
              e un po’ glitch.
            </p>
          </div>

          {/* Navigazione */}
          <div className="col-3 col-lg-3 ms-5">
            <h5 className="footer-title title-navigation">Navigazione</h5>

            <ul className="footer-list">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorie */}
          <div className="col-3 col-lg-3 title-categories">
            <h5 className="footer-title">Categorie</h5>

            <ul className="footer-list">
              {categoryLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="col-3 col-lg-3">
            <h5 className="footer-title text-center title-socials">Social</h5>

            <ul className="footer-list d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="footer-link">
                    <i className={link.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="mb-0">
            © 2026 Pixel Pop — Made with neon, pixel e reference nerd.
          </p>
        </div>
      </div>
    </footer>
  )
}