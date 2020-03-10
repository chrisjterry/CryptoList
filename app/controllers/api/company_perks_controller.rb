class Api::CompanyPerksController < ApplicationController
    def create
        @company_perk = CompanyPerk.new(perk_description: params[:perk_description])
        @company_perk.company_id = current_user.company.id

        if @company_perk.save
            render :show
        else
            render json: @company_perk.errors.full_messages, status: 422
        end
    end

    def destroy
        @company_perk = CompanyPerk.find(params[:id])

        if @company_perk.company.owner === current_user
            @company_perk.destroy
            render :index
        else
            render json: ['You are not logged in as the company\'s owner'], status: 422
        end
    end
end