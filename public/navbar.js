function NavBar(){

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="#" >
          <img src="/img/bank.png" width="30" height="30"/>Your Bank</a>
        <div className="navbar-items" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
    );
  }