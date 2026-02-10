import { Request, Response } from "express";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoDatasourceImpl } from '../../infrastructure/datasource/todo.datasource.impl';
import { CreateTodo, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo } from "../../domain";
import { todo } from "node:test";

export class TodosController{
    
    constructor(
        private readonly todoRepository: TodoRepository
    ){

    }

    public getTodos = (req: Request, res: Response) => {
        
        new GetTodos(this.todoRepository).execute()
        .then(todos => res.json(todos))
        .catch(error => res.status(400).json({error}));
    };

    public getTodoById = (req: Request, res: Response) => {
        const id = +(!req.params.id ? "0" : req.params.id! );
        
        new GetTodo(this.todoRepository).execute(id)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}));
        
    };

    public createTodo = (req: Request, res: Response) => {        
        const [error, createToDo] = CreateTodoDto.create(req.body);        

        if(error) return res.status(400).json({error:error});

        new CreateTodo(this.todoRepository).execute(createToDo)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}));
        
    }

    public updateTodo = (req: Request, res: Response) => {
        const id = +(!req.params.id ? "0" : req.params.id! );        

        const [error, updateTodo] = UpdateTodoDto.create({...req.body, id});

        if(error) return res.status(404).json({error:error});

        new UpdateTodo(this.todoRepository).execute(updateTodo)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}));

        
    };

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +(!req.params.id ? "0" : req.params.id! );

        const todo = new DeleteTodo(this.todoRepository).execute(id)
        .then(todo => res.json(todo))
        .catch(error => res.status(400).json({error}));
    };
}