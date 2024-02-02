import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { createTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService){

    } 
    @Get()
    getTasks(@Query() filterTaskDto : FilterTaskDto) : Task[]{
        if(Object.keys(filterTaskDto).length){

        }
        else{
            return this.tasksService.getAllTasks();
        }
    }
    @Get("/:id")
    getTaskById(@Param("id") id : string): Task{
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(@Body() createTaskDto : createTaskDto): Task{
        return this.tasksService.createTask(createTaskDto)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id : string): void{
        return this.tasksService.deleteTask(id)
    }
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id : string,
        @Body() updateTaskStatusDto : UpdateTaskStatusDto
    ) : Task{
        const {status} = updateTaskStatusDto
        return this.tasksService.updateTaskStatus(id, status)
    }
} 
  