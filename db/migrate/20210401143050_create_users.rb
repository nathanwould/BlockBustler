class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :employeeID
      t.string :password_digest
      t.boolean :isAdmin

      t.timestamps
    end
  end
end
