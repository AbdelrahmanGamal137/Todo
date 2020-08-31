package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TodoRepository;
import com.example.demo.entity.Todo;

import exception.ResourceNotFoundException;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepository todoRepository;

	@Override
	public Iterable<Todo> getAllTodos() {
		return todoRepository.findAll();
	}

	@Override
	public void delete(long id) {
		todoRepository.deleteById(id);
	}

	@Override
	public Todo getTodo(long id) {
		return todoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Note", "id", id));
	}

	@Override
	public Todo save(Todo todoDetails, Long id, String username) {
		Todo todo;
		if (id == -1) {
			todo = new Todo();
		} else {
			todo = getTodo(id);
		}
		todo.setDescription(todoDetails.getDescription());
		todo.setTargetDate(todoDetails.getTargetDate());
		todo.setUsername(username);
		return todoRepository.save(todo);

	}

}
