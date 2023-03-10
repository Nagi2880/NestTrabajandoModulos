import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Contacts } from './contacts.interface';

@Controller('contacts')
export class ContactsController {
  contacts: Contacts[] = [
    {
      "uuid": "1",
      "usuarioUUID": "1",
      "nombre": "Juan",
      "apellidos": "Pérez",
      "telefono": "1234567890",
      "correo": "juan.perez@example.com"
    },
    {
      "uuid": "2",
      "usuarioUUID": "2",
      "nombre": "María",
      "apellidos": "García",
      "telefono": "0987654321",
      "correo": "maria.garcia@example.com",
    },
    {
      "uuid": "3",
      "usuarioUUID": "3",
      "nombre": "Pedro",
      "apellidos": "Rodríguez",
      "telefono": "5555555555",
      "correo": "pedro.rodriguez@example.com"
    },
  ];

  @Get()
  getAll(): Contacts[] {
    return this.contacts;
  }

  @Get(':uuid')
  getContact(@Param('uuid') uuid: string): Contacts | undefined {
    return this.contacts.find(contact => contact.uuid === uuid);
  }

  @Post('contact')
  createContact(@Body() contactData: Contacts) {
    const contact: Contacts = {
      uuid: contactData.uuid,
      usuarioUUID: contactData.usuarioUUID,
      nombre: contactData.nombre,
      apellidos: contactData.apellidos,
      telefono: contactData.telefono,
      correo: contactData.correo,
    };
    this.contacts.push(contact);
    return contact;
  }

  @Put(':uuid')
  updateContact(@Param('uuid') uuid: string, @Body() contactData: Contacts): Contacts {
    const contactIndex = this.contacts.findIndex(contact => contact.uuid === uuid);
    const updatedContact: Contacts = {
      uuid: uuid,
      usuarioUUID: contactData.usuarioUUID,
      nombre: contactData.nombre,
      apellidos: contactData.apellidos,
      telefono: contactData.telefono ?? this.contacts[contactIndex].telefono,
      correo: contactData.correo ?? this.contacts[contactIndex].correo,
    };
    this.contacts[contactIndex] = updatedContact;
    return updatedContact;
  }

  @Delete(':uuid')
  deleteContact(@Param('uuid') uuid: string) {
    const contactIndex = this.contacts.findIndex(contact => contact.uuid === uuid);
    this.contacts.splice(contactIndex, 1);
    return true;
  }
}