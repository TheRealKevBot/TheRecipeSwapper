class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :f_name
      t.string :l_name
      t.string :email

      t.timestamps
    end
  end
end
