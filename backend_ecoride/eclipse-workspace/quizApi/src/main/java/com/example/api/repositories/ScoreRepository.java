package com.example.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.api.entities.Score;

public interface ScoreRepository extends JpaRepository<Score, Long>{

}

