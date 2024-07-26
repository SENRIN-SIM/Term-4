<?php

namespace App\Http\Controllers;

use App\Models\Phones;
use Illuminate\Http\Request;
use App\Http\Resources\PhoneResource;
use App\Http\Requests\PhoneRequest;
use App\Http\Resources\ShowPhoneResource;

class PhonesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $phone = Phones::all();
        try{
            return response()->json(['data' => PhoneResource::collection($phone), 'message' => 'get all phones successfully]'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PhoneRequest $request)
    {
        //
        $phone = new Phones();
        $dataValidate = $request->validated();
        // return $dataValidate;
        try{
            $phone->create($dataValidate);
            return response()->json(['data' => $dataValidate,'message' => 'create new phone successfully'], 201);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        $phone = Phones::findOrFail($id);
        try{
            return response()->json(['data' => ShowPhoneResource::collection($phone),'message' => 'get phone successfully'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PhoneRequest $request, string|int $id)
    {
        //
        $phone = Phones::findOrFail($id);
        $dataValidate = $request->validated();
        try{
            $phone->update($dataValidate);
            return response()->json(['data' => $dataValidate,'message' => 'update phone successfully'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $phone = Phones::findOrFail($id);
        try{
            $phone->delete();
            return response()->json(['message' => 'delete phone successfully'], 200);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
