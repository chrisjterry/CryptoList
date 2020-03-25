class Api::ApplicationsController < ApplicationController
    def show
        @application = Application.find_by(job_id: params[:id], applicant_id: current_user.id)

        if @application
            render :show
        else
            render json: {}
        end
    end

    def create
        @application = Application.new(application_params)
        @application.applicant_id = current_user.id

        if @application.save
            render :show
        else
            render json: @application.errors.full_messages, status: 422
        end
    end

    private
    def application_params
        params.require(:application).permit(:job_id, :note)
    end
end
