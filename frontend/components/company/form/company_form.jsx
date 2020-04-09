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
            valuation: '',
            employee_name: '',
            perk_description: '',
            investor_name: '',
            company_logo: null,
            continued: false
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEmployeeCreate = this.handleEmployeeCreate.bind(this);
        this.handlePerkCreate = this.handlePerkCreate.bind(this);
        this.handleInvestorCreate = this.handleInvestorCreate.bind(this);
        this.handleFile = this.handleFile.bind(this);
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
            window.scrollTo(0, 0);
        }
    }

    handleCreate(e){
        e.preventDefault();
        const company = Object.assign({}, this.state);
        delete company.company_logo;
        this.props.createCompany(company)
    }

    handleFile(e) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({company_logo: file});
        };

        if (file) fileReader.readAsDataURL(file);
    }

    handleUpdate(e) {
        e.preventDefault();
        const formData = new FormData();
        let that = this;
        Object.keys(this.state).forEach( key => {
            if (that.state[key]) formData.append(`company[${key}]`, that.state[key])
        });
        formData.append('_method', 'PATCH');
        this.props.updateCompany(formData);
        this.props.history.push(`/companies/${this.state.id}/show`)
    }

    handleEmployeeCreate(e) {
        e.preventDefault();
        this.props.createCompanyEmployee(this.state.employee_name);
        this.setState({ employee_name: '' })
    }

    handlePerkCreate(e) {
        e.preventDefault();
        this.props.createCompanyPerk(this.state.perk_description);
        this.setState({ perk_description: '' });
    }

    handleInvestorCreate(e) {
        e.preventDefault();
        this.props.createCompanyInvestor(this.state.investor_name);
        this.setState({ investor_name: '' });
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
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

        const companyErrors = errors.length ? (
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

        const preliminaryComponents = (
            <div className='company-form-div'>
                <form>
                    <h2>Company Info</h2>
                    <div>
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
                    </div>
                </form>
                { !this.props.update ? <button onClick={this.handleCreate}>Continue</button> : null }
            </div>
        );

        const continuedComponents = (
            <div className='company-form-div'>
                <form>
                    <h2>Employees</h2>
                    <div>
                        <label>Add Employees
                            <input type="text" onChange={this.handleInput('employee_name')} value={this.state.employee_name}/>
                            <button className='add' onClick={this.handleEmployeeCreate}>Add</button>
                        </label>
                        <div className='company-form-subcomponents'>
                            {employees.map(employee => <EmployeeForm key={employee.id} employee={employee} deleteCompanyEmployee={deleteCompanyEmployee} />)}
                        </div>
                    </div>
                </form>
                <form>
                    <h2>Culture</h2>
                    <div>
                        <label id='culture'>Company Culture
                                <textarea onChange={this.handleInput('culture')} value={this.state.culture}/>
                        </label>
                        <label>Add Perk
                            <input type="text" onChange={this.handleInput('perk_description')} value={this.state.perk_description}/>
                            <button className='add' onClick={this.handlePerkCreate}>Add</button>
                        </label>
                        <div className='company-form-subcomponents'>
                            {perks.map(perk => <PerkForm key={perk.id} perk={perk} deleteCompanyPerk={deleteCompanyPerk} />)}
                        </div>
                    </div>
                </form>
                <form>
                    <h2>Investors</h2>
                    <div>
                        <label>Amount Raised ($ millions)
                                <input type='number' onChange={this.handleInput('amount_raised')} value={this.state.amount_raised}/>
                        </label>
                        <label>Total Rounds
                                <input type='number' onChange={this.handleInput('total_rounds')} value={this.state.total_rounds}/>
                        </label>
                        <label>Valuation ($ millions)
                                <input type='number' onChange={this.handleInput('valuation')} value={this.state.valuation}/>
                        </label>
                        <label>Add Investor
                            <input type="text" onChange={this.handleInput('investor_name')} value={this.state.investor_name}/>
                            <button className='add' onClick={this.handleInvestorCreate}>Add</button>
                        </label>
                        <div className='company-form-subcomponents'>
                            {investors.map(investor => <InvestorForm key={investor.id} investor={investor} deleteCompanyInvestor={deleteCompanyInvestor} />)}
                        </div>
                    </div>
                </form>
                <form>
                    <h2>Company Logo</h2>
                    <div>
                        <label>Add Logo
                                <button className='logo-button' onClick={() => document.getElementById('logo-upload').click()}>{this.state.company_logo ? 'File Uploaded' : 'Upload Image'}</button>
                        </label>
                        <input onChange={this.handleFile} id='logo-upload' type="file"/>
                    </div>
                </form>
                <button onClick={this.handleUpdate}>Save</button>
            </div>
        );

        return(
            <div className='company-form-div'>
                {companyErrors}
                <h1>{formType}</h1>
                { !this.state.continued || this.props.update ? preliminaryComponents : null }
                { this.state.continued ? continuedComponents : null }
            </div>
        )
    }
}

export default CompanyForm;