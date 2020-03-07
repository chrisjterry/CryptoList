import React from 'react';

class EditExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.experience;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProfileExperience(this.state);
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
        return (
            <div className='edit-subprofile'>
                <i className="fas fa-building"></i>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInput('company_name')}
                            value={this.state.company_name}
                        />
                        <input
                            type="text"
                            onChange={this.handleInput('employee_title')}
                            value={this.state.employee_title}
                        />
                    </div>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default EditExperience;