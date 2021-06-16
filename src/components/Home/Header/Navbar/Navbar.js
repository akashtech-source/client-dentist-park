import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid ms-3">
                <Link class="trigger-button navbar-brand fs-4 ms-md-5" href="#">Dentist Park</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-5" id="navbarNav">
            <ul class="navbar-nav m-auto fs-5">
                <li class="nav-item">
                <Link class="trigger-button nav-link active me-5" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="trigger-button nav-link active me-5" to="/appointment">Dashboard</Link>
                </li>
                <li class="nav-item">
                <Link class="trigger-button nav-link active me-5" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                <Link class="trigger-button nav-link active me-5" href="#">Blog</Link>
                </li>
                <li style={{position: 'relative', top: '8px', left: '130px'}} class=" nav-item">
                    <p className='text-primary'>{loggedInUser.name}</p>
                </li>
                <img style={{width: '40px',
                 height: '40px',
                 borderRadius: '50%',
                 marginLeft: '150px'
                 }} src={loggedInUser.photoURL} alt="" />
            </ul>
            </div>
        </div>
    </nav>
        </div>
    );
};

export default Navbar;