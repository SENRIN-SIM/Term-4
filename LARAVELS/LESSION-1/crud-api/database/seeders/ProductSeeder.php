<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $products=[
           ["name" => "coca",],
           ["name" => "pepci",]
        ];
        foreach ($products as $product) {
            Products::create($product);
        }
        
    }
}
