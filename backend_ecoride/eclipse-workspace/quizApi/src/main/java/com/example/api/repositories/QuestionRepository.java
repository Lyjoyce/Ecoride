package com.example.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.api.entities.Question;

public interface QuestionRepository extends JpaRepository<Question, Long>{

}
 