require 'sinatra'
#----------READ
get '/' do
  redirect '/sealions'
end

#All Entries
get '/sealions' do
  # erb :index
  erb(:'index', locals: {sealions: Sealion.all})
end

#Get the new entry form
get '/sealions/new' do
  erb :'new'
end

#Show Individual Entry
get '/sealions/:id' do
  erb(:'show', locals: {sealion: Sealion.find_by_id(params[:id])})
end

get '/sealions/:id/edit' do
  sealion = Sealion.find_by(id: params[:id])
  erb :'edit', locals: {sealion: sealion}
end

#Post for add new entry
post '/sealions' do
  new_sealion = Sealion.new(name: params[:name])
  if new_sealion.save
    redirect "/sealions/#{new_sealion.id}"
  else
    [402,"You did something wrong"]
  end
end


#Update A Blog Post (Edit)
put '/sealions/:id' do
  sealion = Sealion.find_by(id: params[:id])

  if sealion
    sealion.name = params[:name]

    if sealion.save
      redirect "/sealions/#{sealion.id}"
    else
      [500, 'something went wrong']
    end

  else
    [404, "No blog post for you."]
  end
end

# get '/entries/:id/delete' do
#   erb :'/entries/delete', locals: {entry: Entry.find_by_id(params[:id])}
# end

# #Add Delete Route
# delete '/entries/:id' do
#   p "hello"
#   entry = Entry.find_by_id(params[:id])
#   if entry
#     entry.destroy
#     redirect "/entries"
#   else
#     [500, "Some went TERRIBLY wrong"]
#   end
# end