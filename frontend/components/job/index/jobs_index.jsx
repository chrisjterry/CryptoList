import React from 'react';
import { Link } from 'react-router-dom';

class JobsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchJobs();
    }

    render() {
        const { jobs } = this.props;

        if (!jobs) return null;

        const jobComponents = jobs.map(job => (
            <div className='job-component'>
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
                    <p>{job.job_title}</p>
                    <p>{job.location}</p>
                    <p>{job.job_type}</p>
                    <button>Apply</button>
                </div>
            </div>
        ));

        return (
            <div className='jobs-index-div'>
                {jobComponents}
            </div>
        );
    }
}

export default JobsIndex;
