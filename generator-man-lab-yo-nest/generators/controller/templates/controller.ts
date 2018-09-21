import { Controller } from '@nestjs/common';
import { <%= nombreController %>Service } from './<%= nombreControllerMinuscula %>.service';
import { <%= nombreController %>UpdateDto } from './<%= nombreControllerMinuscula %>-update-dto/<%= nombreControllerMinuscula %>-update-dto';
import { <%= nombreController %>CreateDto } from './<%= nombreControllerMinuscula %>-create-dto/<%= nombreControllerMinuscula %>-create-dto';
import { <%= nombreController %>Entity } from './<%= nombreControllerMinuscula %>-entity';
import { PrincipalController } from 'man-lab-nest';

@Controller('<%= nombreControllerMinuscula %>')
export class <%= nombreController %>Controller extends PrincipalController<<%= nombreController %>Entity, <%= nombreController %>CreateDto, <%= nombreController %>UpdateDto> {
    constructor(private readonly _<%= nombreControllerPrivado %>Service: <%= nombreController %>Service) {
        super({ // funciones de seguridad
            findAll: [() => true],
            findOne: [() => true],
            createOne: [() => true],
            updateOne: [() => false],
            deleteOne: [() => false],
        }, 
        _<%= nombreControllerPrivado %>Service, //servicio
            { //Dto
                CreateDto: <%= nombreController %>CreateDto,
                UpdateDto: <%= nombreController %>UpdateDto
            },
            0, //skip
            30, //take
            { //mensajes
                encontrarUno: 'Id <%= nombreController %> erroneo',
                crearUno: '<%= nombreController %> inválida',
                actualizarUno: 'Error actualizando <%= nombreController %>',
                eliminarUno: 'Error al eliminar una <%= nombreController %>'
            },
            undefined // contexto
            );
            this.contexto = this;
    }

}

