<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $post = Posts::all();
        try{
            return response()->json(['data'=>$post,'message'=>'get all posts successfully!','status'=>200]);
        }catch(Exception $e){
            return response()->json(['message'=>'get all posts failed!','status'=>500]);
        };
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $post = new Posts();
        $data = $request->validate([
            'title' =>'required|max:50',
            'body' =>'required',
        ]);
        try{
            $post = Posts::create($data);
            return response()->json(['data'=>$post,'message'=>'create post successfully!','status'=>200]);
        }catch(Exception $e){
            return response()->json(['message'=>'create post failed!','status'=>500]);
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        $post = Posts::find($id);
        try{
            return response()->json(['data'=>$post,'message'=>'get post successfully!','status'=>200]);
        }catch(Exception $e){
            return response()->json(['message'=>'get post failed!','status'=>500]);
        };
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PostRequest $request, Posts $post)
    {
        try {
            // The $request->validated() method returns the validated data from PostRequest
            $post->update($request->validated()); 
            return response()->json(['data'=>$post,'message' => 'Post updated successfully!', 'status' => 200]);
        } catch (Exception $e) {
            return response()->json(['message' => 'Failed to update post!', 'status' => 500]);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        $post = Posts::find($id);
        try{
            $post->delete();
            return response()->json(['message'=>'delete post successfully!','status'=>200]);
        }catch(Exception $e){
            return response()->json(['message'=>'delete post failed!','status'=>500]);
        };
    }
}
