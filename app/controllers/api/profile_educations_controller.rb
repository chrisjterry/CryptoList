class Api::ProfileEducationsController < ApplicationController
    def create
        @profile_education = ProfileEducation.new(profile_education_params)
        @profile_education.profile_id = current_user.profile.id

        if @profile_education.save
            render :show
        else
            render json: @profile_education.errors.full_messages, status: 422
        end
    end

    def update
        @profile_education = ProfileEducation.find(params[:id])

        if @profile_education.update(profile_education_params)
            render :show
        else
            render json: @profile_education.errors.full_messages, status: 422
        end
    end

    def destroy
        @profile_education = ProfileEducation.find(params[:id])

        if @profile_education.profile.user === current_user
            @profile_education.destroy
            render :index
        else
            render json: ['You are not logged in as this education\'s owner'], status: 422
        end
    end

    private
    def profile_education_params
        params.require(:profile_education).permit(:school_name, :graduation_year)
    end
end
