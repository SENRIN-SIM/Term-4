<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;
use App\Http\Requests\categoryRequest;
use App\Http\Resources\categoryResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = category::all();
        return categoryResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(categoryRequest $request)
    {
        $category = Category::create($request->validated());
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return new categoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(categoryRequest $request, Category $category)
    {
        $category->update($request->validated());
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(category $category)
    {
        $category->delete();
        return response()->json(['success' => true, 'message' => 'Category deleted successfully']);
    }
}
