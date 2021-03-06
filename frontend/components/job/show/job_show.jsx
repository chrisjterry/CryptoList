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
            showApp: false,
            currencyName: 'Updating',
            currencyConversion: 'Updating'
        };
        this.showApp = this.showApp.bind(this);
        this.hideApp = this.hideApp.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchJob(this.props.match.params.id);
    }

    componentDidUpdate() {
        if (this.props.job && !this.state.data && this.state.currencyName === 'Updating') {
            let that = this;

            axios.get('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',{
                params: { 'slug': that.props.job.currency },
                headers: {'X-CMC_PRO_API_KEY': CoinMarketCapAPIKey},
                responseType: 'json',
            }).then(response => {
                const data = Object.values(response.data.data)[0];
                that.setState({
                    data: data,
                    currencyName: data.name, 
                    currencyConversion: `$${Math.floor(data.quote.USD.price * this.props.job.salary)}`
                });
              }).catch((err) => {
                that.setState({
                    currencyName: that.props.job.currency,
                    currencyConversion: 'Unavailable'
                });
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

        const jobLogo = job.company_logo ? (
            <img src={job.company_logo} className="company-logo-upload"/>
        ) : (
            <i className="fas fa-building"></i>
        );

        return (
            <div className='background-div job'>
                {this.state.showApp ? (<ApplicationFormContainer job={job} hideApp={this.hideApp} />) : null}
                <div className='job-show-div'>
                    <div className='job-header'>
                        <div className='job-logo'>
                            {jobLogo}
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
                            <p>{this.state.currencyName}</p>
                            <h4>Salary amount</h4>
                            <p>{job.salary} coins</p>
                            <h4>Current $ equivalent</h4>
                            <p>{this.state.currencyConversion}</p>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default CompanyShow;