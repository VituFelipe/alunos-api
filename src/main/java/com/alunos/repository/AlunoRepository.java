package com.alunos.repository;

import com.alunos.model.Aluno;
import org.springframework.data.mongodb.repository.MongoRepository;

// aqui é pra fornecer os metodos prontos de save find all
public interface AlunoRepository extends MongoRepository<Aluno, String> {
}
