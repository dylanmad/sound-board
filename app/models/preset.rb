class Preset < ApplicationRecord
    has_many_attached :audio_files
     validates :filename, presence: true

end
