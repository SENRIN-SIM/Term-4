<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return response()->json(PostResource::collection(Post::all()), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $post = Post::create($validated);

        return response()->json($post, 201);
    }

    public function show($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        return response()->json($post, 200);
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|required|max:255',
            'content' => 'sometimes|required',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        $post->update($validated);

        return response()->json($post, 200);
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully'], 200);
    }
}
