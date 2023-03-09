import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getMessage(): string {
    return 'Hola desde el servicio de Contacts';
  }
}
