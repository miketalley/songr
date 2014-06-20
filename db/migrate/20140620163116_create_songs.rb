class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :title
      t.text :artist
      t.integer :price
      t.integer :duration

      t.timestamps
    end
  end
end
