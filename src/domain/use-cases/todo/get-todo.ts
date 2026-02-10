//import { TodoEntity, TodoRepository } from "";

import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface GetTodoUseCase{
    execute(id: number): Promise<TodoEntity>;
}

export class GetTodo implements GetTodoUseCase{

    constructor(private readonly todoRepo: TodoRepository){

    }
    
    execute(id: number): Promise<TodoEntity> {
        return this.todoRepo.findById(id);
    }
}