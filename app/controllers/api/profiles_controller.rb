class Api::ProfilesController < ApplicationController
    def show
        @profile = Profile.find(params[:id])
        render :show
    end

    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id

        if @profile.save
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def update
        @profile = current_user.profile

        if @profile.update(profile_params)
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:bio, :primary_role, :location, :about, :achievements, :skills)
    end
end
