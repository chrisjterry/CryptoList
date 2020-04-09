import React from 'react';
import EmployeeShow from './employee_show';
import PerkShow from './perk_show';
import InvestorShow from './investor_show';

class CompanyShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     id: null,
        //     company_name: '',
        //     website: '',
        //     location: '',
        //     headcount: '',
        //     tagline: '',
        //     overview: '',
        //     culture: '',
        //     amount_raised: '',
        //     total_rounds: '',
        //     valuation: ''
        // };
    }

    componentWillMount() {
        if (this.props.fetchCompany) {
            this.props.fetchCompany(this.props.match.params.id);
        };
    }

    // componentDidUpdate() {
    //     if (this.state.id != this.props.company.id) {
    //         this.setState(this.props.company)
    //     };
    // }

    render() {
        const { company, employees, perks, investors } = this.props

        if (!company) return null;

        const companyLogo = company.company_logo ? (
            <img src={company.company_logo} className="company-logo-upload"/>
        ) : (
            <i className="fas fa-building"></i>
        );

        return (
            <div className='background-div'>
                <div className='company-show-div'>
                    <div className='company-main'>
                        <div className='company-header'>
                            <div className='company-logo'>
                                {companyLogo}
                            </div>
                            <div>
                                <h1>{company.company_name}</h1>
                                <h3>{company.tagline}</h3>
                            </div>
                        </div>
                        <div className='company-body'>
                            <h2>{company.tagline}</h2>
                            <p>{company.overview}</p>
                            <h2>Team Members</h2>
                            <div className='employees-div'>
                                { employees.map(employee => <EmployeeShow key={employee.id} employee={employee} />) }
                            </div>
                            <h2>Culture</h2>
                            <div className='culture-div'>
                                <p>{company.culture}</p>
                                <div className='perks-div'>
                                    { perks.map(perk => <PerkShow key={perk.id} perk={perk} />) }
                                </div>
                            </div>
                            <h2>Funding</h2>
                            <div className='funding-div'>
                                <div>
                                    <h4>RAISED</h4>
                                    <p>${company.amount_raised}M</p>
                                </div>
                                <div>
                                    <h4>ROUNDS</h4>
                                    <p>{company.total_rounds}</p>
                                </div>
                                <div>
                                    <h4>VALUATION</h4>
                                    <p>${company.valuation}M</p>
                                </div>
                            </div>
                            <div className='investors-div'>
                                { investors.map(investor => <InvestorShow key={investor.id} investor={investor} />) }
                            </div>
                        </div>
                    </div>
                    <div className='company-sidebar'>
                        <h1>ABOUT {company.company_name}</h1>
                        <br/>
                        <p>Website</p>
                        <p>{company.website}</p>
                        <br/>
                        <p>Location</p>
                        <p>{company.location}</p>
                        <br/>
                        <p>Company Size</p>
                        <p>{company.headcount}</p>
                        <br/>
                        <p>Total Raised</p>
                        <p>${company.amount_raised}M</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyShow;