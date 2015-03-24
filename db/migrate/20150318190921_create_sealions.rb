class CreateSealions < ActiveRecord::Migration
  def change
    create_table :sealions do |t|
      t.string :first_name, null: false, limit: 50
      t.string :last_name, null: false, limit: 50
      t.integer :age, null: false

      t.timestamp, null: false
    end
  end
end
