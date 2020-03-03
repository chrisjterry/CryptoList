import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu)
        });
    }

    render() {
        const { currentUser, logout } = this.props 

        const sessionLinks = currentUser ? (
            <div className='session-links'>
                <button className='user-button' onClick={this.showMenu}><img src='/assets/hand_logo.png'/></button>

                {
                    this.state.showMenu ? (
                        <div className='nav-user-menu'>
                            <Link to={`/users/${currentUser.id}`}>Profile</Link>
                            <Link to={`/companies/new`}>Create a Company Profile</Link>
                            <button onClick={logout}>Log Out</button>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        ) : (
            <div className="session-links" >
                <Link to='/signup' className='session-link'>Join</Link>
                <Link to='/login' className='session-link'>Log In</Link>
            </div>
        );
    
        return (
            <nav>
                <div className='nav-bar'>
                    <div className='page-links'>
                        <Link className='nav-link' to='/'><img src='/assets/hand_logo.png' /></Link>
                        <Link className='nav-link text' to='/jobs'>Find a Job</Link>
                        <Link className='nav-link text' to='/jobs/new'>Post a Job</Link>
                    </div>
                    {sessionLinks}
                </div>
            </nav>
        )
    }

}

export default NavBar;