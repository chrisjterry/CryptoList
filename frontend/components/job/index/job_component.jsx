import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationFormContainer from '../application/application_form_container';

class JobComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showApp: false
        };
        this.showApp = this.showApp.bind(this);
        this.hideApp = this.hideApp.bind(this);
    }

    handleClick(jobId) {
        return (e) => {
            this.props.history.push(`/jobs/${jobId}/show`)
        }
    }

    showApp(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ showApp: true });
    }

    hideApp(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ showApp: false });
    }

    render() {
        const { job } = this.props;

        const jobLogo = job.company_logo ? (
            <img src={job.company_logo} className="company-logo-upload"/>
        ) : (
            <i className="fas fa-building"></i>
        );

        return (
            <div className='job-component' onClick={this.handleClick(job.id)}>
                {this.state.showApp ? (<ApplicationFormContainer job={job} hideApp={this.hideApp} />) : null}
                <div>
                    <div className='job-logo'>
                        {jobLogo}
                    </div>
                    <div>
                        <Link className='company-name' to={`/companies/${job.company_id}/show`}>{job.company_name}</Link>
                        <h3>{job.company_tagline}</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{job.job_title}</p>
                        <p>{job.location}</p>
                        <p>{job.job_type}</p>
                    </div>
                    <button onClick={this.showApp}>Apply</button>
                </div>
            </div>
        )
    }
}

export default JobComponent;