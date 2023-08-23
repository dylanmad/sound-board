class HomeController < ApplicationController



    def submit_form

        respond_to do |format|
          format.html { redirect_to root_path, notice: 'Form submitted successfully.' }
          format.js 
        end

    end

end
