class CreateTitles < ActiveRecord::Migration[6.1]
  def change
    create_table :titles do |t|
      t.string :img
      t.text :content
      t.date :date
      t.string :pors
      t.string :born

      t.timestamps
    end
  end
end
