import React from 'react';
import JobComponent from './job_component'

class JobsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchJobs();
    }

    render() {
        const { jobs } = this.props;

        if (!jobs) return null;

        const jobComponents = jobs.map(job => <JobComponent key={job.id} job={job} history={this.props.history} />);

        return (
            <div className='jobs-index-div'>
                <h1>{jobs.length} results</h1>
                {jobComponents}
            </div>
        );
    }
}

export default JobsIndex;
