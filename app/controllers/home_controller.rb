class HomeController < ApplicationController
    def submit_form
        if params[:selection]
          @selected_option = params[:selection]
        end
      end
end
