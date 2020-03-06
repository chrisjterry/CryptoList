class Api::ProfileProjectsController < ApplicationController
    def create
        @profile_project = ProfileProject.new(profile_project_params)
        @profile_project.profile_id = current_user.profile.id

        if @profile_project.save
            render :show
        else
            render json: @profile_project.errors.full_messages, status: 422
        end
    end

    def update
        @profile_project = ProfileProject.find(params[:id])

        if @profile_project.update(profile_project_params)
            render :show
        else
            render json: @profile_project.errors.full_messages, status: 422
        end
    end

    def destroy
        @profile_project = ProfileProject.find(params[:id])

        if @profile_project.profile.user === current_user
            @profile_project.destroy
            render :index
        else
            render json: ['You are not logged in as this project\'s owner'], status: 422
        end
    end

    private
    def profile_project_params
        params.require(:profile_project).permit(:project_title, :project_link)
    end
end
