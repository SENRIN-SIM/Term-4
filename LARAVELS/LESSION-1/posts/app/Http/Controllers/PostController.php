<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts = Post::all();
        try {
            return response()->json(['data' => $posts, 'message' => 'get post successfully!', 'status' =>200]);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(),'status' => 500]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $post = new Post();
        $dataValidata = $request->validate([
            'titles' =>'required|max:50',
            'description' =>'nullable',
            'user_id' =>'required|int|string',
        ]);
        try {
            $post->create($dataValidata);
            return response()->json(['data' => $dataValidata,'message' => 'create post successfully!', 'status' =>200]);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(),'status' => 500]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        $post = Post::find($id);
        try {
            return response()->json(['data' => $post,'message' => 'get post successfully!', 'status' =>200]);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(),'status' => 500]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string|int $id)
    {
        //
        $post = Post::find($id);
        $dataValidata = $request->validate([
            'titles' =>'required|max:50',
            'description' =>'nullable',
            'user_id' =>'required|int|string',
        ]);
        // return $dataValidata;
        try {
            $post->update($dataValidata);
            return response()->json(['data' => $dataValidata,'message' => 'update post successfully!', 'status' =>200]);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(),'status' => 500]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $post = Post::find($id);
        try {
            $post->delete();
            return response()->json(['message' => 'delete post successfully!','status' =>200]);
        }catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage(),'status' => 500]);
        }
    }
}
