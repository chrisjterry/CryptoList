import React from 'react';
import { Link } from 'react-router-dom';

class JobsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchJobs();
    }

    handleClick(jobId) {
        return (e) => {
            this.props.history.push(`/jobs/${jobId}/show`)
        }
    }

    render() {
        const { jobs } = this.props;

        if (!jobs) return null;

        const jobComponents = jobs.map(job => (
            <div key={job.id} className='job-component' onClick={this.handleClick(job.id)}>
                <div>
                    <div className='job-logo'>
                        <i className="fas fa-building"></i>
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
                    <button>Apply</button>
                </div>
            </div>
        ));

        return (
            <div className='jobs-index-div'>
                <h1>{jobs.length} results</h1>
                {jobComponents}
            </div>
        );
    }
}

export default JobsIndex;
