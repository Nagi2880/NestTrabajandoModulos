import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Task } from './tasks.interface';

@Controller('tasks')
export class TasksController {
  tasks: Task[] = [
    {
      "uuid": "1",
      "usuarioUUID": "1",
      "tarea": "Comprar leche"
    },
    {
      "uuid": "2",
      "usuarioUUID": "2",
      "tarea": "Llamar al dentista"
    },
    {
      "uuid": "3",
      "usuarioUUID": "3",
      "tarea": "Hacer ejercicio"
    },
  ];

  @Get()
  getAll(): Task[] {
    return this.tasks;
  }

  @Get(':uuid')
  getTask(@Param('uuid') uuid: string): Task | undefined {
    return this.tasks.find(task => task.uuid === uuid);
  }

  @Post('task')
  createTask(@Body() taskData: Task) {
    const task: Task = {
      uuid: taskData.uuid,
      usuarioUUID: taskData.usuarioUUID,
      tarea: taskData.tarea,
    };
    this.tasks.push(task);
    return task;
  }

  @Put(':uuid')
  updateTask(@Param('uuid') uuid: string, @Body() taskData: Task): Task {
    const taskIndex = this.tasks.findIndex(task => task.uuid === uuid);
    const updatedTask: Task = {
      uuid: uuid,
      usuarioUUID: taskData.usuarioUUID,
      tarea: taskData.tarea ?? this.tasks[taskIndex].tarea,
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  @Delete(':uuid')
  deleteTask(@Param('uuid') uuid: string) {
    const taskIndex = this.tasks.findIndex(task => task.uuid === uuid);
    this.tasks.splice(taskIndex, 1);
    return true;
  }
}