<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Onomatopeia;
use App\Models\Tag;
use Illuminate\Http\Request;

class OnomatopeiasController extends Controller
{
    protected $onomatopeia;

    public function __construct(Onomatopeia $onomatopeia)
    {
        $this->onomatopeia = $onomatopeia;
    }

    public function index()
    {
        // Obtém todas as onomatopeias do banco de dados
        $onomatopeias = Onomatopeia::all();

        // Retorna a visão index.blade.php e passa as onomatopeias como dados
        return view('index', ['onomatopeias' => $onomatopeias]);
    }

    public function saveData(Request $request)
    {
        // Valide os dados do formulário
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            // Adicione outras regras de validação conforme necessário
        ], [
            'name.required' => 'O campo nome é obrigatório.',
            'description.required' => 'O campo descrição é obrigatório.',
            // Adicione mensagens personalizadas para outras regras de validação
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Use mass assignment para criar uma nova instância do modelo e salvar os dados
        $onomatopeia = $this->onomatopeia->create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);

        // Verifica se a requisição contém os dados esperados
        if ($request->has('tagSelect2Values')) {
            // Recupera os valores enviados
            $tagSelect2Values = $request->input('tagSelect2Values');

            // Converte a array em uma string para armazenamento no banco de dados
            $tagSelect2ValuesString = implode(', ', $tagSelect2Values);

            // Cria uma nova instância da sua model Tag
            $tag = Tag::create(['value' => $tagSelect2ValuesString]);

            // Associa a tag à onomatopeia
            $onomatopeia->tags()->attach($tag->id);
        }

        // Redirecione para a página desejada após salvar os dados
        return redirect()->route('getList')->with('success', 'Dados salvos com sucesso!');
    }

    // Método para exibir a página list.blade.php
    public function getList()
    {
        // Obtém todas as onomatopeias do banco de dados
        $onomatopeias = Onomatopeia::all();

        // Retorna a view list.blade.php e passa as onomatopeias como dados
        return view('list', ['onomatopeias' => $onomatopeias]);
    }
}
