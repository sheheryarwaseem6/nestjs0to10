import { Task, TaskStatus } from './task.model';
import { createTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getFilteredTasks(filterTaskDto: FilterTaskDto): Task[];
    createTask(createTaskDto: createTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
