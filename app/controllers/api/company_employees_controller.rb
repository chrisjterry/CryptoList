class Api::CompanyEmployeesController < ApplicationController
    def create
        @user = User.find_by(name: params[:employee_name])
        
        if @user
            @company_employee = CompanyEmployee.create(employee_id: @user.id, company_id: current_user.company.id)
            render :show
        else
            render json: ['Unable to find user. Please use their exact registered name'], status: 422
        end
    end

    def destroy
        @company_employee = CompanyEmployee.find(params[:id])

        if @company_employee.company.owner === current_user
            @company_employee.destroy
            render :index
        else
            render json: ['You are not logged in as the company\'s owner'], status: 422
        end
    end
end