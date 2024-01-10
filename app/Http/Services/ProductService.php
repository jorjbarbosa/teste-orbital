<?php

namespace App\Http\Services;

use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProductService
{
    public function getProducts() {
        $user = Auth::user();
        return $user->products;
    }

    public function createProduct($request)
    {   
        $user = Auth::user();

        $imagePath = $this->storeProductImage($request->file('image_file'));
        $productData = $request->all();
        $productData['image'] = $imagePath;
        
        return $user->products()->create($productData);
    }

    private function storeProductImage($image)
    {   $path = $image->store('public');
        $fullPath = Storage::url($path);
        return $fullPath;
    }
}