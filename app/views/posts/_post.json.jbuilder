json.extract! post, :id, :title, :img, :content, :date, :pors, :born, :created_at, :updated_at
json.url post_url(post, format: :json)
