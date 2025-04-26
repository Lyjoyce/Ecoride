package com.example.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.api.entities.Gamer;

public interface GamerRepository extends JpaRepository<Gamer, Long>{

}
