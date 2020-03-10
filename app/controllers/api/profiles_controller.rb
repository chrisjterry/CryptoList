class Api::ProfilesController < ApplicationController
    def show
        @profile = Profile.find_by(user_id: params[:id])
        render :show
    end

    def update
        @profile = current_user.profile
        debugger
        if @profile.update(profile_params)
            render :show
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:bio, :role, :location, :about, :achievements, :skills, :profile_picture)
    end
end
