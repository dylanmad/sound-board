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

  def submit_form
    @selected_preset = nil
    current_file = params[:selected_preset]
    active_pre = Preset.find_by(filename: current_file)
    @selected_preset = active_pre
    if active_pre
    render turbo_stream: turbo_stream.update(
    'custom-partial-frame', partial: 'presets/custom', locals: { selected_preset: @selected_preset }
  )
    end

  end


  # POST /presets or /presets.json
  def create
    
    @preset = current_user.presets.new(preset_params)
 
    respond_to do |format|
      if @preset.save
        # Generate the URL for the attached audio file and save it to an instance variable
        # @audio_file_url = rails_blob_path(@preset.audio_files.first, disposition: "attachment") if @preset.audio_files.attached?
        @audio_file_urls = @preset.audio_files.map { |file| rails_blob_path(file, disposition: "attachment") } if @preset.audio_files.attached?

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
