import React from 'react';
import axios from 'axios';
import CoinMarketCapAPIKey from '../../../../config/keys';

class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            location: '',
            job_type: 'Full Time',
            salary: '',
            currency: '',
            years_experience: '',
            data: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let that = this;

        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
            params: { 'start': '1', 'limit': '10', 'convert': 'USD'},
            headers: {'X-CMC_PRO_API_KEY': CoinMarketCapAPIKey},
            responseType: 'json',
        }).then(response => {
            that.setState({ data: response.data.data })
            that.setState({ currency: response.data.data[0].slug })
          }).catch((err) => {
            console.log('API call error:', err.message);
        });                 
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
        delete job.data;
        this.props.createJob(job)
            .then(() => this.props.history.push(`/jobs/${this.props.currentJob.id}`))
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {
        const { errors, companyName } = this.props;

        if (!companyName) this.props.history.push(`/companies/new`);

        let cryptoOptions = null;
        if (this.state.data.length) {
            cryptoOptions = this.state.data.map(coin => (
            <option key={coin.id} value={coin.slug} selected={this.state.currency === coin.slug}>{coin.name}</option>
            ))
        }

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
                                {cryptoOptions}
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