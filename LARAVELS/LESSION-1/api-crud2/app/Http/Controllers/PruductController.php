<?php

namespace App\Http\Controllers;

use App\Models\Pruduct;
use Illuminate\Http\Request;

class PruductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pruduct = Pruduct::all();
        if (!$pruduct) {
            return response()->json(['data' => null,'message' => 'No products found', 'status' => 404]);
        }else{
            return response()->json(['data' => $pruduct, 'message' => 'Get all the products resource successfully', 'status' => 200]);
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
        $product = Pruduct::all();
        $data = $request->only('pro_name', 'price', 'quantity', 'discription');
        if (!$product) {
            return response()->json(['data' => null,'message' => 'No products found', 'status' => 404]);
        }else{
            $product->create($data);
            return response()->json(['data' => $pruduct, 'message' => 'Store products resource successfully', 'status' => 200]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Pruduct $pruduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pruduct $pruduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pruduct $pruduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pruduct $pruduct)
    {
        //
    }
}
