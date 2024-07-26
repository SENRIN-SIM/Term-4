<?php

namespace App\Http\Controllers;

use App\Models\KingProducts;
use Illuminate\Http\Request;

class KingProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $kingProducts = KingProducts::all();
        try{
            return response()->json($kingProducts, 200);
        }catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        };
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $kingProducts = KingProducts::create($request->all());
        try{
            return response()->json($kingProducts, 200);
        }catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        $kingProducts = KingProducts::find($id);
        try{
            return response()->json($kingProducts, 200);
        }catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        };
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string|int $id)
    {
        //
        $kingProducts = KingProducts::find($id);
        try{
            $kingProducts->update($request->all());
            return response()->json($kingProducts, 200);
        }catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        };
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $kingProducts = KingProducts::find($id);
        try{
            $kingProducts->delete();
            return response()->json($kingProducts, 200);
        }catch(Exception $e){
            return response()->json($e->getMessage(), 500);
        };
    }
}
