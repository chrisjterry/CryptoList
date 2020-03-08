import React from 'react';

class EditEducation extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.education;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProfileEducation(this.state);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteProfileEducation(this.state.id)
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
                    <i className="fas fa-graduation-cap"></i>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInput('graduation_year')}
                            value={this.state.graduation_year}
                            size={this.state.graduation_year.length}
                        />
                        <input
                            type="text"
                            onChange={this.handleInput('school_name')}
                            value={this.state.school_name}
                            size={this.state.school_name.length}
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

export default EditEducation;