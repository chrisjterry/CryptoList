import React from 'react';
import EditProject from './edit_project'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_id: this.props.profileId,
            project_title: '',
            project_link: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProfileProject(this.state);
        this.setState({
            project_title: '',
            project_link: ''
        });
    }
    
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {
        const { projects, updateProfileProject, deleteProfileProject } = this.props;
        let editProjectComponents = projects.map( project => 
            <EditProject 
                key={project.id} 
                project={project} 
                updateProfileProject={updateProfileProject}
                deleteProfileProject={deleteProfileProject} 
            />);

        return (
            <div className='subprofile-form-div'>
                <h2>PROJECTS</h2>
                <div>
                    <form className='subprofile-create-form' onSubmit={this.handleSubmit}>
                        <label>ADD PROJECT
                            <input
                                type="text"
                                placeholder='Project name'
                                onChange={this.handleInput('project_title')}
                                value={this.state.project_title}
                            />
                            <input
                                type="text"
                                placeholder='Link'
                                onChange={this.handleInput('project_link')}
                                value={this.state.project_link}
                            />
                            <button>Add</button>
                        </label>
                    </form>
                    {editProjectComponents}
                </div>
            </div> 
        )
    }
}

export default ProjectForm;