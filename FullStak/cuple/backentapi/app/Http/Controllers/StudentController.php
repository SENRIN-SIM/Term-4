<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Http\Resources\ShowStudentResource;
use App\Http\Requests\StudentRequest;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try{
            $students = Student::all();
            return response()->json(["data"=>StudentResource::collection($students), "success"=>true, "Message"=>"get all students succesfully!"],200);
        }catch(Exception $e){
            return response()->json(["data"=>null, "success"=>false, "Message"=>$e->getMessage()],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request)
    {
        //
        try{
            $student = Student::create($request->all());
            return response()->json(["data"=>new StudentResource($student), "success"=>true, "Message"=>"create student succesfully!"],200);
        }catch(Exception $e){
            return response()->json(["data"=>null, "success"=>false, "Message"=>$e->getMessage()],500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string|int $id)
    {
        //
        try{
            $student = Student::find($id);
            return response()->json(["data"=>new ShowStudentResource($student), "success"=>true, "Message"=>"get student succesfully!"],200);
        }catch(Exception $e){
            return response()->json(["data"=>null, "success"=>false, "Message"=>$e->getMessage()],500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            // Validate the request data
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:students,email,' . $id,
                // Add other fields to validate as needed
            ]);

            // Find the student by ID
            $student = Student::findOrFail($id);

            // Update the student with validated data
            $student->update($validatedData);

            return response()->json(["data" => new StudentResource($student), "success" => true, "message" => "Student updated successfully!"], 200);
        } catch (\Exception $e) {
            return response()->json(["data" => null, "success" => false, "message" => $e->getMessage()], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string|int $id)
    {
        //
        try{
            $student = Student::find($id);
            $student->delete();
            return response()->json(["data"=>null, "success"=>true, "Message"=>"delete student succesfully!"],200);
        }catch(Exception $e){
            return response()->json(["data"=>null, "success"=>false, "Message"=>$e->getMessage()],500);
        }
    }
}
