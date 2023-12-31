import Gallo from '../img/logo__Gallo__1_.webp'
function Navbar (props){
return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark" style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Gallo} width="100px" height="100px" /></a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.titulo}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.titulo2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.titulo3}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
);
}
export default Navbar;