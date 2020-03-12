import React from 'react';

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
        //     total_rounds: ''
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

        return (
            <div className='company-show-div'>
                <div className='company-main'>
                    <div className='company-header'>
                        <div className='company-logo'>
                            <img src='/assets/hand_logo.png' />
                        </div>
                        <h1>{company.company_name}</h1>
                        <h3>{company.tagline}</h3>
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
                            <div>
                                { perks.map(perk => <PerkShow key={perk.id} perk={perk} />) }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-sidebar'>

                </div>
            </div>
        )
    }
}