<?php

use Illuminate\Database\Seeder;

class Users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'  => 'Jhon Smith',
            'email'     => 'admin@gmail.com',
            'password'  => bcrypt('123456'),
        ]);
    }
}
