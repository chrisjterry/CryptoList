import React from 'react';

class EditExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.experience;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProfileExperience(this.state);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteProfileExperience(this.state.id)
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
        return (
            <div className='edit-subprofile'>
                <div>
                    <i className="fas fa-building"></i>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInput('company_name')}
                            value={this.state.company_name}
                            size={this.state.company_name.length}
                        />
                        <input
                            type="text"
                            onChange={this.handleInput('employee_title')}
                            value={this.state.employee_title}
                            size={this.state.employee_title.length}
                        />
                    </div>
                    <div>
                        <button onClick={this.handleDelete}>Delete</button>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditExperience;