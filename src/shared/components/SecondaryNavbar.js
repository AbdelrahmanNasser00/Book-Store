const SecondaryNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                All Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Arrival
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
