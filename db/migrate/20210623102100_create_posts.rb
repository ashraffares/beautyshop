class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :img
      t.text :content
      t.date :date
      t.string :pors
      t.string :born

      t.timestamps
    end
  end
end
