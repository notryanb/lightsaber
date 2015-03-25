require 'faker'


20.times do
  Sealion.create(name:Faker::Name.name)
end