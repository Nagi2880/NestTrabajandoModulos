import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getMessage(): string {
    return 'Hola desde el servicio de Tasks';
  }
}
