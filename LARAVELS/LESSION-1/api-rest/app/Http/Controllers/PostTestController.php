<?php

namespace App\Http\Controllers;

use App\Models\PostTest;
use Illuminate\Http\Request;

class PostTestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $postTest = PostTest::all();
        return response()->json(["data"=>$postTest,"message"=>"Request has succesed!", 200]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Access request data correctly
        $title = $request->input('title');
        $content = $request->input('content');
    
        // Create a new PostTest instance
        $postest = new PostTest();
        $postest->title = $title;
        $postest->content = $content;
    
        try {
            // Save the post and return success response
            $postest->save();
            return response()->json(["data" => $postest, "message" => "Post created successfully", "status" => 200]);
        } catch (Exception $e) {
            // Return error response
            return response()->json(["message" => "Failed to create post", "status" => 500]);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(PostTest $postTest)
    {
        //


    }

    /**
     * Update the specified resource in storage.
     */
 public function update(Request $request, PostTest $postTest)
{
    // Validate the request
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
    ]);

    // Update the model instance with new data
    $postTest->title = $validated['title'];
    $postTest->content = $validated['content'];
    
    try {
        // Save the changes and return a success response
        // $postTest->title = $title;
        // $postTest->content = $content;
        $postTest->save();
        return response()->json(["data" => $postTest, "message" => "Post updated successfully", "status" => 200]);
    } catch (Exception $e) {
        // Return an error response
        return response()->json(["message" => "Failed to update post", "status" => 500]);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostTest $postTest)
    {
        //
        $id = $postest->$id;
        
        try{
            Post::destroy($id);
            return response()->json(["data"=>$postTest,"message"=>"Request delete succesed!", 200]);
        }catch(Exception $e){
            return response()->json(["data"=>$postTest,"message"=>"Request can't delete!", 500]);
        };
        
    }
}
