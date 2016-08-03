class ChangeTimeType < ActiveRecord::Migration
  def change
    change_column :checks, :time, :text
  end
end
