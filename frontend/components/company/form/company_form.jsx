import React from 'react';
import EmployeeForm from './employee_form';
import PerkForm from './perk_form';
import InvestorForm from './investor_form';

class CompanyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            company_name: '',
            website: '',
            location: '',
            headcount: '',
            tagline: '',
            overview: '',
            culture: '',
            amount_raised: '',
            total_rounds: '',
            employee_name: '',
            perk_description: '',
            investor_name: '',
            continued: this.props.continued
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEmployeeCreate = this.handleEmployeeCreate.bind(this);
        this.handlePerkCreate = this.handlePerkCreate.bind(this);
        this.handleInvestorCreate = this.handleInvestorCreate.bind(this);
    }

    componentWillMount() {
        if (this.props.fetchCompany) {
            this.props.fetchCompany(this.props.match.params.id);
        };
    }

    componentDidUpdate() {
        if (this.props.company && this.state.id != this.props.company.id) {
            this.setState(this.props.company)
        };

        if (this.props.errors.length) {
            let that = this;
            document.addEventListener('click', function _clearCompanyErrors() {
                that.props.clearCompanyErrors();
                document.removeEventListener('click', _clearCompanyErrors);
            });
        }

        if (this.props.company && !this.state.continued) {
            this.setState({ continued: true });
        }
    }

    handleCreate(e){
        e.preventDefault();
        const company = Object.assign({}, this.state);
        this.props.createCompany(company)
    }

    handleUpdate(e) {
        e.preventDefault();
        const company = Object.assign({}, this.state);
        this.props.updateCompany(company)
    }

    handleEmployeeCreate(e) {
        e.preventDefault();
        this.props.createCompanyEmployee(this.state.employee_name)
    }

    handlePerkCreate(e) {
        e.preventDefault();
        this.props.createCompanyPerk(this.state.perk_description)
    }

    handleInvestorCreate(e) {
        e.preventDefault();
        this.props.createCompanyInvestor(this.state.investor_name)
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {
        const {
            errors, 
            formType, 
            employees, 
            deleteCompanyEmployee, 
            perks, 
            deleteCompanyPerk,
            investors,
            deleteCompanyInvestor 
        } = this.props;

        const profileErrors = errors.length ? (
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

        const continuedComponents = (
            <div>
                <form>
                    <h2>Employees</h2>
                    <label>Add Employees
                        <input type="text" onChange={this.handleInput('employee_name')} value={this.state.employee_name}/>
                        <button onClick={this.handleEmployeeCreate}>Add</button>
                    </label>
                    <div className='company-form-subcomponents'>
                        {employees.map(employee => <EmployeeForm key={employee.id} employee={employee} deleteCompanyEmployee={deleteCompanyEmployee} />)}
                    </div>
                </form>
                <form>
                    <h2>Culture</h2>
                    <label>Company Culture
                            <textarea onChange={this.handleInput('culture')} value={this.state.culture}/>
                    </label>
                    <label>Add Perk
                        <input type="text" onChange={this.handleInput('perk_description')} value={this.state.perk_description}/>
                        <button onClick={this.handlePerkCreate}>Add</button>
                    </label>
                    <div className='company-form-subcomponents'>
                        {perks.map(perk => <PerkForm key={perk.id} perk={perk} deleteCompanyPerk={deleteCompanyPerk} />)}
                    </div>
                </form>
                <form>
                    <h2>Investors</h2>
                    <label>Amount Raised ($ millions)
                            <input type='number' onChange={this.handleInput('amount_raised')} value={this.state.amount_raised}/>
                    </label>
                    <label>Total Rounds
                            <input type='number' onChange={this.handleInput('total_rounds')} value={this.state.total_rounds}/>
                    </label>
                    <label>Add Investor
                        <input type="text" onChange={this.handleInput('investor_name')} value={this.state.investor_name}/>
                        <button onClick={this.handleInvestorCreate}>Add</button>
                    </label>
                    <div className='company-form-subcomponents'>
                        {investors.map(investor => <InvestorForm key={investor.id} investor={investor} deleteCompanyInvestor={deleteCompanyInvestor} />)}
                    </div>
                </form>
                <button onClick={this.handleUpdate}>Save</button>
            </div>
        );

        return(
            <div className='company-form-div'>
                {profileErrors}
                <h1>{formType}</h1>
                <form>
                    <h2>Company Info</h2>
                    <label>Company Name
                        <input type="text" onChange={this.handleInput('company_name')} value={this.state.company_name}/>
                    </label>
                    <label>Company Website
                        <input type="text" onChange={this.handleInput('website')} value={this.state.website}/>
                    </label>
                    <label>Location
                        <input type="text" onChange={this.handleInput('location')} value={this.state.location}/>
                    </label>
                    <label>Number of Employees
                        <input type="number" onChange={this.handleInput('headcount')} value={this.state.headcount}/>
                    </label>
                    <label>Tagline
                        <input type="text" onChange={this.handleInput('tagline')} value={this.state.tagline}/>
                    </label>
                    <label>Overview
                        <textarea onChange={this.handleInput('overview')} value={this.state.overview}/>
                    </label>
                </form>
                { this.props.continued ? null : <button onClick={this.handleCreate}>Continue</button> }
                { this.state.continued ? continuedComponents : null }
            </div>
        )
    }
}

export default CompanyForm;