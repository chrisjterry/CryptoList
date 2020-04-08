import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.demoSignUp = this.demoSignUp.bind(this);
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

    demoSignUp(e) {
        e.preventDefault();
        let name = faker.name.findName();
        this.props.signup({
            name: name,
            email: `${name.split(' ').join('.')}@aa.io`,
            password: 'password'    
        }).then(() => this.props.history.push(`/profiles/${this.props.currentUser.id}/edit`));
    }

    render() {
        const { currentUser, logout, clearSessionErrors } = this.props
        
        const companyLink = currentUser ? (
            currentUser.company_name ? (
                <Link className='dropdown-text' to={`/companies/${currentUser.company_id}/edit`}>{currentUser.company_name}</Link>
            ) : (
                <Link className='dropdown-text' to={`/companies/new`}>Create a Company Profile</Link>
            )
        ) : null

        const profileButton = currentUser ? (
            currentUser.profile_picture_url ? (
                <button className='user-button uploaded' onClick={this.showMenu}>
                    <img src={currentUser.profile_picture_url} title={currentUser.name} className='uploaded'/>
                </button>
            ) : (
                <button className='user-button icon' onClick={this.showMenu}>
                    <img src='/assets/user_icon.png' title={currentUser.name} className='icon'/>
                </button>
            )
        ) : null
        
        const sessionLinks = currentUser ? (
            <div className='session-links'>
                <p>Welcome, {currentUser.name.split(' ')[0]}</p>
                <div>
                    {profileButton}
                    {
                        this.state.showMenu ? (
                            <div className='user-menu'>
                                <div className='user-menu-arrow'></div>
                                <Link className='dropdown-text' to={`/profiles/${currentUser.id}/edit`}>{currentUser.name}</Link>
                                {companyLink}
                                <button className='dropdown-text' onClick={logout}>Log Out</button>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        ) : (
            <div className="session-links" >
                <Link to='/signup' onClick={clearSessionErrors} className='session-link'>Join</Link>
                <Link to='/login' onClick={clearSessionErrors} className='session-link'>Log In</Link>
                <Link to='/signup' onClick={this.demoSignUp} className='session-link'>Demo Sign Up</Link>
            </div>
        );
    
        return (
            <nav>
                <div className='nav-bar'>
                    <div className='page-links'>
                        <Link className='nav-link' to='/'><img src='/assets/hand_logo.png' /></Link>
                        <Link className='nav-link text' to='/jobs/index'>Find a Job</Link>
                        <Link className='nav-link text' to='/jobs/new'>Post a Job</Link>
                    </div>
                    {sessionLinks}
                </div>
            </nav>
        )
    }

}

export default NavBar;