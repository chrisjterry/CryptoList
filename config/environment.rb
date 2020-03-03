# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Convert column names to camelcase in Jbuilder
Jbuilder.key_format camelize: :lower