package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.TodoRepository;
import com.example.demo.entity.Todo;
import com.example.demo.service.TodoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

	@Autowired
	private TodoService todoService;

	@GetMapping(path = "/users/{username}/todos")
	public Iterable<Todo> getTodos(@PathVariable String username) {
		return todoService.getAllTodos();
	}

	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable Long id) {
		return todoService.getTodo(id);
	}

	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public void deleteTodo(@PathVariable String username, @PathVariable Long id) {
		todoService.delete(id);
	}

	@PutMapping("/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, @PathVariable Long id, @RequestBody Todo todoDetails) {
		Todo updatedTodo = todoService.save(todoDetails, id, username);
		return updatedTodo;
	}

}
