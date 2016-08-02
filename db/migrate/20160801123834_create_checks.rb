class CreateChecks < ActiveRecord::Migration
  def change
    create_table :checks do |t|
      t.text :title
      t.time :time
      t.date :date

      t.timestamps null: false
    end
  end
end
