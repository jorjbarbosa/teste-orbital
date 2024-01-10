<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Services\ProductService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
        $this->middleware('auth:api');
    }

    public function index() 
    {
        try {
            $products = $this->productService->getProducts();
            return response()->json($products, 200);
        } catch (Exception $ex) {
            return response()->json([
                'message' => 'Ocorreu um erro ao buscar os produtos',
                'error' => $ex->getMessage()
            ], 500);
        }
        
    }

    public function store(ProductRequest $request) 
    {
        try {
            $product = $this->productService->createProduct($request);
            return response()->json([
                'message' => 'Produto cadastrado com sucesso',
                'product' => $product
            ], 201);
        } catch (Exception $ex) {
            return response()->json([
                'message' => 'Ocorreu um erro ao cadastrar o produto',
                'error' => $ex->getMessage()
            ], 500);
        }
        
    }
}
