package com.todo.example.todo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends CrudRepository<Todo, String> {
    List<Todo> findByUserId(Long id);
}