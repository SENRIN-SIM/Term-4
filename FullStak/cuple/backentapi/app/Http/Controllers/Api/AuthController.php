<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource;

use Illuminate\Support\Facades\DB;  // Import the DB facade

class AuthController extends Controller
{
    public function index(){
        try{
            $user = User::all();
            return response()->json(['data' => UserResource::collection($user), 'success' => true, 'message' =>'Register successful'],200);
        } catch (\Exception $e) {
            return response()->json(["data" => null, "success" => false, "message" => $e->getMessage()], 500);
        }
    }
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;


        return response()->json(['data'=>$user,'success'=>true, 'token' => $token], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorised'], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, "data"=>$user, 'success'=>true, 'message'=>'login successfully'], 200);
    }


    public function logout(Request $request)
    {
        try {
            $user = $request->user();
            // Get the token that is being used for the current request
            $request->user()->currentAccessToken()->delete();

            return response()->json(['data'=>$user,'success' => true, 'message' => 'Logout successful'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Logout failed', 'error' => $e->getMessage()], 500);
        }
    }

    public function logoutAll(Request $request)
    {
        try {
            // Revoke all tokens for the user
            $request->user()->tokens()->delete();

            return response()->json(['success' => true, 'message' => 'All tokens revoked, logout from all devices successful'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Logout from all devices failed', 'error' => $e->getMessage()], 500);
        }
    }

    public function user_phone(string|int $id)
    {
        
        try {
            // Fetch the user and their phones using a join
            $userData = DB::table('users')
                ->join('phones', 'users.id', '=', 'phones.user_id')
                ->where('users.id', '=', $id)
                ->select('users.id', 'users.name', 'users.email', 'phones.id as phone_id', 'phones.brand', 'phones.model', 'phones.user_id')
                ->get();

            if ($userData->isEmpty()) {
                return response()->json([
                    'data' => null,
                    'success' => false,
                    'message' => 'User not found'
                ], 404);
            }

            // Format the data
            $formattedData = [
                'id' => $userData[0]->id,
                'name' => $userData[0]->name,
                'email' => $userData[0]->email,
                'phones' => $userData->map(function ($data) {
                    return [
                        'id' => $data->phone_id,
                        'brand' => $data->brand,
                        'model' => $data->model,
                        'user_id' => $data->user_id,
                    ];
                }),
            ];

            return response()->json([
                'data' => $formattedData,'success' => true,'message' => 'Data retrieval successful'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'data' => null,'success' => false,'message' => $e->getMessage()], 500);
        }
    }
}


