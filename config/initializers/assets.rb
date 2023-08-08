# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

#Hacksaw way of precompilation. Automate this later
Rails.application.config.assets.precompile += %w(preset-1/kick_2.wav)
Rails.application.config.assets.precompile += %w(preset-1/kick_4.wav)
Rails.application.config.assets.precompile += %w(preset-1/clap_8.wav)
Rails.application.config.assets.precompile += %w(preset-1/clap_14.wav)
Rails.application.config.assets.precompile += %w(preset-1/snare_1.wav)
Rails.application.config.assets.precompile += %w(preset-1/snare_13.wav)
Rails.application.config.assets.precompile += %w(preset-1/cymbal_1.wav)
Rails.application.config.assets.precompile += %w(preset-1/cymbal_4.wav)
Rails.application.config.assets.precompile += %w(preset-1/hihat_1.wav)
Rails.application.config.assets.precompile += %w(preset-1/hihat_3.wav)
Rails.application.config.assets.precompile += %w(preset-1/hihat_4.wav)
Rails.application.config.assets.precompile += %w(preset-1/hihat_12.wav)
Rails.application.config.assets.precompile += %w(preset-1/tom_2.wav)
Rails.application.config.assets.precompile += %w(preset-1/tom_3.wav)
Rails.application.config.assets.precompile += %w(preset-1/tom_6.wav)
Rails.application.config.assets.precompile += %w(preset-1/tom_13.wav)





#Rails.application.config.assets.precompile += %w(preset-1/*.wav)

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
