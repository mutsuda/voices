require 'json'
require 'airtable'
require 'active_support/all'
# require 'active_support/all'

# Pass in api key to client
@client = Airtable::Client.new("keyxPWWnfEUccGcDt")

# Pass in the app key and table name

@voices = @client.table("app4OwhTPpgPRQTOo", "Voces")
@v_records = @voices.all()

# Change the filename here below but make sure it's in the _data folder.
File.open("_data/voices.json", "w") do |f|
    data = @v_records.map { |record| record.attributes }
    f.write(data.to_json)
end