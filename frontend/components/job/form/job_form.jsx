import React from 'react';

class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            location: '',
            job_type: '',
            salary: '',
            currency: '',
            years_experience: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.props.errors.length) {
            let that = this;
            document.addEventListener('click', function _clearJobErrors() {
                that.props.clearJobErrors();
                document.removeEventListener('click', _clearJobErrors);
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const job = Object.assign({}, this.state);
        this.props.createJob(job);
        this.props.history.push(`/jobs/${this.props.currentJob.id}`)
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {
        const { errors, companyName } = this.props;

        if (!companyName) this.props.history.push(`/companies/new`)

        const jobErrors = errors.length ? (
            <div className='errors-modal'>
                <div>
                    <p>An error occurred:</p>
                    <p>{errors.join("\n")}</p>
                    <p>(Click anywhere to continue)</p>
                </div>
            </div>
        ) : (
            null
        );

        return (
            <div className='job-form-div'>
                {jobErrors}
                <h1>Create a New Job Posting</h1>
                <form>
                    <h2>Job Info</h2>
                    <div>
                        <label>Description
                            <textarea onChange={this.handleInput('description')} value={this.state.description}/>
                        </label>
                        <label>Location
                            <input type="text" onChange={this.handleInput('location')} value={this.state.location}/>
                        </label>
                        <label>Job Type
                            <select onChange={this.handleInput('job_type')} >
                                <option value="Full Time" selected={this.state.job_type === 'Full Time'}>Full Time</option>
                                <option value="Part Time" selected={this.state.job_type === 'Part Time'}>Part Time</option>
                                <option value="Short Term" selected={this.state.job_type === 'Short Term'}>Short Term</option>
                            </select>
                        </label>
                        <label>Salary (# Coins)
                            <input type="number" onChange={this.handleInput('salary')} value={this.state.salary}/>
                        </label>
                        <label>Currency
                            <select onChange={this.handleInput('currency')} >
                                {}
                            </select>
                        </label>
                        <label>Years Experience
                            <input type="number" onChange={this.handleInput('years_experience')} value={this.state.years_experience}/>
                        </label>
                    </div>
                </form>
                <button onClick={this.handleSubmit}>Post</button>
            </div>
        )
    }
}

export default JobForm;