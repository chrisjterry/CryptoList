import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
        const { formType, errors } = this.props;
        
        const nameInput = this.state.name !== undefined  ? (
            <input
                type='text'
                placeholder='Your full name'
                value={this.state.name}
                onChange={this.handleInput('name')}
            />
        ) : null;

        const altLink = this.props.formType === 'Sign Up' ? (
            <p>Already have an account? <Link to='/login' >Log In »</Link></p>
        ) : (
            <p>Need an account? <Link to='/signup' >Sign Up »</Link></p>
        )

        return (
            <div>
                <h1 className='form-title'>{formType}</h1>
                { errors.length ? (<p>{errors.join('; ')}</p>) : null }
                <form onSubmit={this.handleSubmit}>
                    {nameInput}
                    <input
                        type='text'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />  
                    <input
                        type='password'
                        placeholder='Password (min 8 characters)'
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                    <button>{formType}</button>  
                </form>
                {altLink}
            </div>
        )
    }
}

export default SessionForm