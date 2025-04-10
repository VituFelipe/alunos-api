package com.alunos.controller;

import com.alunos.model.Aluno;
import com.alunos.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alunos")
@CrossOrigin(origins = "*") // vou ver se consigo chamar no react
public class AlunoController {

    @Autowired
    private AlunoService service;

    @PostMapping
    public Aluno cadastrar(@RequestBody Aluno aluno){
        return service.salvar(aluno);
    }

    @GetMapping
    public List<Aluno> listar(){
        return service.listarTodos();
    }
}
