<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Product::all();
        if (!$products){
            return response()->json(['data'=>null,'messages'=>'The requested resource is not available','status'=>500]);
        }else{
            return response()->json(['data'=>$products, 'messages'=>'Get all products successfully', 'status'=>200]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $product = Product::create($request->all());
        if (!$product){
            return response()->json(['data'=>null,'messages'=>'The requested resource is not available','status'=>500]);
        }else{
            return response()->json(['data'=>$product, 'messages'=>'Create product successfully', 'status'=>200]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string|int $id)
    {
        //
        $prodcut = Product::find($id);
        $data = $request->only('pro_name', 'price', 'quantity','description');
        if (!$prodcut){
            return response()->json(['data'=>null,'messages'=>'The requested resource is not available','status'=> 500]);
        }else{
            $prodcut->update($data);
            return response()->json(['data'=>$prodcut,'messages'=>'Update product successfully','status'=>200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $product = Product::find($id);
        if (!$product){
            return response()->json(['data'=>null,'messages'=>'The requested resource is not available','status'=>500]);
        }else{
            $product->delete();
            return response()->json(['messages'=>'Delete product successfully', 'status'=>200]);
        }
    }
}
