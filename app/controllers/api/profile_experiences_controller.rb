class Api::ProfileExperiencesController < ApplicationController
    def create
        @profile_experience = ProfileExperience.new(profile_experience_params)
        @profile_experience.profile_id = current_user.profile.id

        if @profile_experience.save
            render :show
        else
            render json: @profile_experience.errors.full_messages, status: 422
        end
    end

    def update
        @profile_experience = ProfileExperience.find(params[:id])

        if @profile_experience.update(profile_experience_params)
            render :show
        else
            render json: @profile_experience.errors.full_messages, status: 422
        end
    end

    def destroy
        @profile_experience = ProfileExperience.find(params[:id])

        if @profile_experience.profile.user === current_user
            @profile_experience.destroy
            render :index
        else
            render json: ['You are not logged in as this experience\'s owner'], status: 422
        end
    end

    private
    def profile_experience_params
        params.require(:profile_experience).permit(:employee_title, :company_name)
    end
end