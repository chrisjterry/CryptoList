current_user.company.investors.each do |investor|
    json.partial! '/api/company_investors/investor', investor: investor
end