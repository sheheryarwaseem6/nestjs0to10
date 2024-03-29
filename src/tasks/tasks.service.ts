import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v4 as uuid} from 'uuid'
import { createTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';

@Injectable()
export class TasksService {
    private tasks : Task[] = [];

    getAllTasks() : Task[] {
        return this.tasks;
    }
    
    getFilteredTasks(filterTaskDto : FilterTaskDto) : Task[] {
       const {status , search} = filterTaskDto
       let tasks = this.getAllTasks()
       if(status){
        tasks = this.tasks.filter((task) => task.status === status)
       }
       if(search){
        tasks = this.tasks.filter((task)=>{
            if(task.title.includes(search) || task.description.includes(search)){
                return true;
            }
            else{
                return false
            }
        })
       }
       return tasks
    }

    createTask(createTaskDto : createTaskDto) : Task{
        const {title, description} = createTaskDto
        const task : Task ={
            id : uuid() ,
            title,
            description,
            status : TaskStatus.OPEN

        }
        this.tasks.push(task);
        return task;
    }

    getTaskById(id : string) : Task {
        const found = this.tasks.find((task) => task.id === id)
        if(!found){
            throw new NotFoundException("task not found")
        }
        return found
    }

    deleteTask(id : string) : void {
        const found = this.getTaskById(id)
       this.tasks = this.tasks.filter((task) => task.id !== found.id)
    }

    updateTaskStatus(id : string, status : TaskStatus)  {
        const task = this.getTaskById(id)
        task.status = status
        return task;
    }
}
