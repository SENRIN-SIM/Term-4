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
        return response()->json($posts);
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
        $data = $request->only(['title','body']);
        $posts = new Post();
        $posts = post::create($data);
        return response()->json($posts);
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        $post = Post::find($id);
        return response()->json($post);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string|int $id)
    {
        //
        $post = Post::find($id);
        if (!$post){
            return response()->json(['message' => "'Post id' $id ' not found'"], 404);
        };
        $data = $request->only(['title','body']);
        $post->update($data);
        return response()->json(["data"=>$post, 'message' => 'Post updated successfully'], 200);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $post = Post::find($id);
        if (!$post){
            return response()->json(['message' => "'Post id' $id ' not found'"], 404);
        };
        $post->delete();
        return response()->json(['message' => 'Post deleted successfully'], 200);
    }
}
