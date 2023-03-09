import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users.module';
import { TasksModule } from './tasks.module';
import { ContactsModule } from './contacts.module';
import { UsersService } from './users/users.service';
import { TasksService } from './tasks/tasks.service';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports: [UsersModule, TasksModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService, UsersService, TasksService, ContactsService],
})
export class AppModule {}
