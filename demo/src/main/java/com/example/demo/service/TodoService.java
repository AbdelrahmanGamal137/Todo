package com.example.demo.service;

import java.util.Optional;

import com.example.demo.entity.Todo;

public interface TodoService {

	public Iterable<Todo> getAllTodos();

	public Todo getTodo(long id);

	public Todo save(Todo todo, Long id, String username);

//    
////    public Product update(Todo todo, long id);
//    
	public void delete(long id);

}
