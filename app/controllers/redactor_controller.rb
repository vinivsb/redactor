class RedactorController < ApplicationController
	
	def index
		
	end

	def create
		p "params ======================== #{params}"
		render :nothing => true
	end
end
