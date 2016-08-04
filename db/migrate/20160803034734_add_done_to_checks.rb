class AddDoneToChecks < ActiveRecord::Migration
  def change
    add_column :checks, :done, :boolean , default: false
  end
end
