class Api::CompaniesController < ApplicationController
    def show
        @company = Company.find(params[:id])
        render :show
    end
    
    def create
        @company = Company.new(company_params)
        @company.owner_id = current_user.id

        if @company.save
            CompanyEmployee.create(company_id: @company.id, employee_id: current_user.id)
            render :show
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def update
        @company = current_user.company

        if @company.update(company_params)
            render :show
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    private
    def company_params
        params.require(:company).permit(:company_name, :website, :location, :headcount, :tagline, :overview, :culture, :amount_raised, :total_rounds, :valuation, :company_logo)
    end
end