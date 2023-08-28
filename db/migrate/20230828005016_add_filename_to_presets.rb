class AddFilenameToPresets < ActiveRecord::Migration[7.0]
  def change
    add_column :presets, :filename, :string
  end
end
