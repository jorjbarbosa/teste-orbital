<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(UserRegisterRequest $request)
    {
        try {
            $createdUser = User::create($request->all());
            return response()->json([
                'message' => 'Usuário cadastrado com sucesso'
            ], 200);
        } catch (Exception $exception) {
            return response()->json([
                'message' => 'Ocorreu um erro ao cadastrar o usuário',
                'error' => $exception->getMessage()
            ]);
        }
    }
}
