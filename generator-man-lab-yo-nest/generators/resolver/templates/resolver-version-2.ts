import { Resolver } from "@nestjs/graphql";
import { PrincipalResolver } from 'man-lab-nest';
import { <%= nombreResolver %>Entity } from "./<%= nombreResolverMinuscula %>-entity";
import { <%= nombreResolver %>Service } from "./<%= nombreResolverMinuscula %>.service";
import { <%= nombreResolver %>CreateDto } from "./<%= nombreResolverMinuscula %>-create-dto/<%= nombreResolverMinuscula %>-create-dto";
import { <%= nombreResolver %>UpdateDto } from "./<%= nombreResolverMinuscula %>-update-dto/<%= nombreResolverMinuscula %>-update-dto";

@Resolver('<%= nombreResolver %>')
export class <%= nombreResolver %>Resolver extends PrincipalResolver<<%= nombreResolver %>Entity> {
    constructor(private readonly _<%= nombreResolverPrivado %>Service: <%= nombreResolver %>Service) {
        super({ // funciones de seguridad
                findAll: [() => true],
                findOne: [() => true],
                createOne: [() => true],
                updateOne: [() => true],
                deleteOne: [() => true],
            },_<%= nombreResolverPrivado %>Service,
            { // Dtos
                CreateDto: <%= nombreResolver %>CreateDto,
                UpdateDto: <%= nombreResolver %>UpdateDto
            },
            0, // skip
            30, // take
            { // errores
                encontrarUno: 'Id <%= nombreResolver %> erroneo',
                crearUno: '<%= nombreResolver %> inválida',
                actualizarUno: 'Error actualizando <%= nombreResolver %>',
                eliminarUno: 'Error eliminando <%= nombreResolver %>'
            }, 
            undefined // contexto
        );
        this.contexto = this;
    }

}