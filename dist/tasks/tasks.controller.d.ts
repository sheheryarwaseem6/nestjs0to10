import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { createTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterTaskDto: FilterTaskDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: createTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Task;
}
