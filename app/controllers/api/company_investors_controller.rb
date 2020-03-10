class Api::CompanyInvestorsController < ApplicationController
    def create
        @company_investor = CompanyInvestor.new(investor_name: params[:investor_name])
        @company_investor.company_id = current_user.company.id

        if @company_investor.save
            render :show
        else
            render json: @company_investor.errors.full_messages, status: 422
        end
    end

    def destroy
        @company_investor = CompanyInvestor.find(params[:id])

        if @company_investor.company.owner === current_user
            @company_investor.destroy
            render :index
        else
            render json: ['You are not logged in as the company\'s owner'], status: 422
        end
    end
end