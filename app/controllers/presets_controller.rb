class PresetsController < ApplicationController
  before_action :set_preset, only: %i[ show edit update destroy ]


  # GET /presets or /presets.json
  def index
    @preset = current_user.presets.all
  end

  # GET /presets/1 or /presets/1.json
  def show
  end

  # GET /presets/new
  def new
    @preset = current_user.presets.new
  end


  # GET /presets/1/edit
  def edit
  end

  # POST /presets or /presets.json
  def create
    
    @preset = current_user.presets.new(preset_params)
 
    respond_to do |format|
      if @preset.save
        format.html { redirect_to preset_url(@preset), notice: "Preset was successfully created." }
        format.json { render :show, status: :created, location: @preset }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @preset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /presets/1 or /presets/1.json
  def update
    respond_to do |format|
      if @preset.update(preset_params)
        format.html { redirect_to preset_url(@preset), notice: "Preset was successfully updated." }
        format.json { render :show, status: :ok, location: @preset }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @preset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /presets/1 or /presets/1.json
  def destroy
    @preset.destroy

    respond_to do |format|
      format.html { redirect_to presets_url, notice: "Preset was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_preset
      @preset = Preset.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def preset_params
      
      params.require(:preset).permit(:filename, audio_files: [])
    end
end
