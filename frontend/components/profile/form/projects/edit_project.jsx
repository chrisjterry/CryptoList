import React from 'react';

class EditProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProfileProject(this.state);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteProfileProject(this.state.id)
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
                    <i className="fas fa-cube"></i>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInput('project_title')}
                            value={this.state.project_title}
                            size={this.state.project_title.length}
                        />
                        <input
                            type="text"
                            onChange={this.handleInput('project_link')}
                            value={this.state.project_link}
                            size={this.state.project_link.length}
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

export default EditProject;