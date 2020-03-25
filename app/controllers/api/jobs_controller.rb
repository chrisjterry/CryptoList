class Api::JobsController < ApplicationController
    def index
        @jobs = Job.all.order(created_at: :desc)
        render :index
    end

    def show
        @job = Job.find(params[:id])
        render :show
    end
    
    def create
        @job = Job.new(job_params)
        @job.owner_id = current_user.id
        @job.company_id = current_user.company.id

        if @job.save
            render :show
        else
            render json: @job.errors.full_messages, status: 422
        end
    end

    private
    def job_params
        params.require(:job).permit(:job_title, :description, :location, :job_type, :salary, :currency, :years_experience)
    end
end
