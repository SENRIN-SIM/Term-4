<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Items;

/**
 * @OA\Info(title="API Documentation", version="1.0")
 */
class ItemsController extends Controller
{
    /**
     * @OA\Get(
     *     path="/items",
     *     summary="Get list of items",
     *     @OA\Response(response="200", description="Success")
     * )
     */
    public function index()
    {
        return Items::all();
    }

    /**
     * @OA\Post(
     *     path="/items",
     *     summary="Create a new item",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Item")
     *     ),
     *     @OA\Response(response="201", description="Created")
     * )
     */
    public function store(Request $request)
    {
        $item = Items::create($request->all());
        return response()->json($item, 201);
    }

    /**
     * @OA\Get(
     *     path="/items/{id}",
     *     summary="Get an item by ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response="200", description="Success"),
     *     @OA\Response(response="404", description="Not Found")
     * )
     */
    public function show($id)
    {
        $item = Items::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        return response()->json($item);
    }

    /**
     * @OA\Put(
     *     path="/items/{id}",
     *     summary="Update an item by ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Item")
     *     ),
     *     @OA\Response(response="200", description="Success"),
     *     @OA\Response(response="404", description="Not Found")
     * )
     */
    public function update(Request $request, $id)
    {
        $item = Items::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        $item->update($request->all());
        return response()->json($item);
    }

    /**
     * @OA\Delete(
     *     path="/items/{id}",
     *     summary="Delete an item by ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response="204", description="No Content"),
     *     @OA\Response(response="404", description="Not Found")
     * )
     */
    public function destroy($id)
    {
        $item = Items::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        $item->delete();
        return response()->json(null, 204);
    }
}

