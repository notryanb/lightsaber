class CreateSealions < ActiveRecord::Migration
  def change
    create_table :sealions do |t|
      t.string :name, null: false, limit: 50

      t.timestamp null: false
    end
  end
end
