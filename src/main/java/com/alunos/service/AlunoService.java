package com.alunos.service;

import com.alunos.model.Aluno;
import com.alunos.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repository;

    public Aluno salvar(Aluno aluno){
        return repository.save(aluno);
    }

    public List<Aluno> listarTodos(){
        return repository.findAll();
    }

}
