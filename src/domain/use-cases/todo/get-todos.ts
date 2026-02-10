import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface GetTodosUseCase{
    execute(): Promise<TodoEntity[]>;
}

export class GetTodos implements GetTodosUseCase{

    constructor(private readonly todoRepo: TodoRepository){

    }
    
    public execute(): Promise<TodoEntity[]> {
        return this.todoRepo.getAll();
    }
}