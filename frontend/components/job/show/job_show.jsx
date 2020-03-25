import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CoinMarketCapAPIKey from '../../../../config/keys';
import ApplicationFormContainer from '../application/application_form_container';

class CompanyShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showApp: false
        };
        this.showApp = this.showApp.bind(this);
        this.hideApp = this.hideApp.bind(this);
    }

    componentDidMount() {
        this.props.fetchJob(this.props.match.params.id);
    }

    componentDidUpdate() {
        if (this.props.job && !this.state.data) {
            let that = this;

            axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',{
                params: { 'slug': that.props.job.currency },
                headers: {'X-CMC_PRO_API_KEY': CoinMarketCapAPIKey},
                responseType: 'json',
            }).then(response => {
                console.log('API call response:', response);
                that.setState({ data: Object.values(response.data.data)[0] });
              }).catch((err) => {
                console.log('API call error:', err.message);
            });  
        }
    }

    showApp(e) {
        e.preventDefault();
        this.setState({ showApp: true });
    }

    hideApp(e) {
        e.preventDefault();
        this.setState({ showApp: false });
    }

    render() {
        const { job } = this.props;

        if (!job) return null;

        return (
            <div className='background-div job'>
                {this.state.showApp ? (<ApplicationFormContainer job={job} hideApp={this.hideApp} />) : null}
                <div className='job-show-div'>
                    <div className='job-header'>
                        <div className='job-logo'>
                            <i className="fas fa-building"></i>
                        </div>
                        <div>
                            <Link className='company-name' to={`/companies/${job.company_id}/show`}>{job.company_name}</Link>
                            <h3>{job.company_tagline}</h3>
                        </div>
                    </div>
                    <div className='job-body'>
                        <div className='job-main'>
                            <h1>{job.job_title}</h1>
                            <h2>About This Position</h2>
                            <p>{job.description}</p>
                        </div>
                        <div className='job-sidebar'>
                            <button onClick={this.showApp}>Apply now</button>
                            <h4>Location</h4>
                            <p>{job.location}</p>
                            <h4>Job type</h4>
                            <p>{job.job_type}</p>
                            <h4>Location</h4>
                            <p>{job.location}</p>
                            <h4>Years Experience</h4>
                            <p>{job.years_experience} years</p>
                            <h4>Salary currency</h4>
                            <p>{this.state.data ? this.state.data.name : job.currency}</p>
                            <h4>Salary amount</h4>
                            <p>{job.salary} coins</p>
                            <h4>Current $ equivalent</h4>
                            <p>${this.state.data ? Math.floor(this.state.data.quote.USD.price * job.salary) : 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyShow;