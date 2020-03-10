current_user.company.perks.each do |perk|
    json.partial! '/api/company_perks/perk', perk: perk
end