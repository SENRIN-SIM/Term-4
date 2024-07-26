<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use App\Http\Resources\UserResource;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $user = User::all();
        try {
            return response()->json(['data'=>$user, 'message'=>'Get all user successfully!', 'status'=>200]);
        }catch (\Exception $e) {
            return response()->json(['message'=>$e->getMessage(),'status'=>500]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $user = new User();
        $dataValidate = $request->validate([
            'name' =>'required|max:50',
            'email' =>'required|email',
            'password' => 'nullable|min:6|max:20',
        ]);
        try{
            $user->create($dataValidate);
            return response()->json(['data'=>$dataValidate,'message'=>'Create user successfully!','status'=>200]);
        }catch (\Exception $e){
            return response()->json(['message'=>$e->getMessage(),'status'=>500]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        $user = User::find($id);
        try {
            return response()->json(['data'=>$user,'message'=>'Get user successfully!','status'=>200]);
        }catch (\Exception $e) {
            return response()->json(['message'=>$e->getMessage(),'status'=>500]);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string|int $id)
    {
        //
        $user = User::find($id);
        $dataValidate = $request->validate([
            'name' =>'required|max:50',
            'email' =>'nullable|email',
            'password' => 'nullable|min:6|max:20',
        ]);
        try{
            $user->update($dataValidate);
            return response()->json(['data'=>$dataValidate,'message'=>'Update user successfully!','status'=>200]);
        }catch (\Exception $e){
            return response()->json(['message'=>$e->getMessage(),'status'=>500]);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $user = User::find($id);
        try{
            $user->delete();
            return response()->json(['message'=>'Delete user successfully!','status'=>200]);
        }catch (\Exception $e){
            return response()->json(['message'=>$e->getMessage(),'status'=>500]);
        }
    }
}
