const Navbar = ()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid navcont" >
    <a className="navbar-brand" href="#"><span className="text-warning">Build</span>con</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    );

};
export default Navbar;