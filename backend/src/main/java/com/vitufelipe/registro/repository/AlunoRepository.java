package com.vitufelipe.registro.repository;

import com.vitufelipe.registro.model.Aluno;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlunoRepository extends MongoRepository<Aluno, String> {
}