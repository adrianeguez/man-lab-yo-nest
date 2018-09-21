import { Resolver } from "@nestjs/graphql";
import { PrincipalResolver } from 'man-lab-nest';
import { <%= nombreResolver %>Service } from "./<%= nombreResolverMinuscula %>.service";
import { <%= nombreResolver %>CreateDto } from "./<%= nombreResolverMinuscula %>-create-dto/<%= nombreResolverMinuscula %>-create-dto";
import { <%= nombreResolver %>UpdateDto } from "./<%= nombreResolverMinuscula %>-update-dto/<%= nombreResolverMinuscula %>-update-dto";
import { politicas<%= nombreResolver %> } from './<%= nombreResolverMinuscula %>-politicas';
import { mensajes<%= nombreResolver %> } from './<%= nombreResolverMinuscula %>-mensajes/<%= nombreResolverMinuscula %>.mensajes';

@Resolver('<%= nombreResolver %>')
export class <%= nombreResolver %>Resolver extends PrincipalResolver {
    constructor(private readonly _<%= nombreResolverPrivado %>Service: <%= nombreResolver %>Service) {
        super({ // funciones de seguridad
                findAll: [() => true],
                findOne: [() => true],
                createOne: [() => true],
                updateOne: [() => false],
                deleteOne: [() => false],
            },
            _<%= nombreResolverPrivado %>Service,
            { // Dtos
                CreateDto: <%= nombreResolver %>CreateDto,
                UpdateDto: <%= nombreResolver %>UpdateDto
            },
            0, // skip
            30, // take
            { //mensajes
                encontrarUno: 'Id <%= nombreResolver %> erroneo',
                crearUno: '<%= nombreResolver %> inválida',
                actualizarUno: 'Error actualizando <%= nombreResolver %>',
                eliminarUno: 'Error al eliminar una <%= nombreResolver %>'
            },
            undefined // contexto
        );
        this.contexto = this;
    }

}