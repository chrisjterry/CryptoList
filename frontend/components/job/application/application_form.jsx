import React from 'react';

class ApplicationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job_id: this.props.job.id,
            note: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeApp = this.closeApp.bind(this);
    }

    componentWillMount() {
        this.props.fetchApplication(this.props.job.id)
    }

    handleInput () {
        return (e) => {
            this.setState({ note: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const app = Object.assign({}, this.state);
        this.props.createApplication(app)
            .then(() => {
                if (!this.props.errors.length) this.props.hideApp(); 
            });
    }

    closeApp(e) {
        this.props.clearApplicationErrors();
        this.props.hideApp(e);
    }

    render() {
        const { errors, job, existingApp } = this.props;

        const applicationErrors = errors.length ? (
            <p className='application-errors'>{errors.join("\n")}</p>
        ) : null;

        const applicationContent = Object.values(existingApp).length ? (
            <div className='application-content'>
                <p>Thank you for your application. {job.company_name} is currently reviewing and will contact you soon.</p>
                <button onClick={this.props.hideApp}>Okay</button>
            </div>
        ) : (
            <div className='application-content'>
                <label id='application-note'>Note<span>*</span>
                    <textarea onChange={this.handleInput()} value={this.state.note}/>
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );

        return (
            <div className='application-modal'>
                <h2 onClick={this.closeApp}>X</h2>
                <h1>Apply for {job.job_title} at {job.company_name}</h1>
                {applicationErrors}
                {applicationContent}
            </div>
        )
    }
}

export default ApplicationForm;