require 'open-uri'

task default: %w[download]

task :download do
  open('_instagram.yml', 'wb') do |file|
    file << open(ENV['INSTAGRAM_CONFIG_URL']).read
  end
end
