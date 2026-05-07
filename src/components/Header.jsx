export default function Header() {
  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'News',
      path: '/news',
    },
    {
      label: 'Videogiochi',
      path: '/videogiochi',
    },
    {
      label: 'Anime & Manga',
      path: '/animemanga',
    },
    {
      label: 'Cultura',
      path: '/cultura',
    },
    {
      label: 'Recensioni',
      path: '/recensioni',
    },
    {
      label: 'Autori',
      path: '/autori',
    },
  ]

  return (
    <header className="site-header text-uppercase">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between">         
          {/* logo */}
          <a href="/" className="ms-0">
            <img src="./logo.png" alt="Pixel Pop" className="site-logo me-5" />
          </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
          {/* link */}
          <div className="navbar-nav d-flex flex-row align-items-center gap-3">
            <ul class="navbar-nav">            
            {navLinks.map((link) => (
              <li className="nav-item active"><a key={link.path} href={link.path} className="nav-link">
                {link.label}
              </a></li>
            ))}
            </ul>
          </div>
            </div>
        </div>
      </nav>
    </header>
  )
}

