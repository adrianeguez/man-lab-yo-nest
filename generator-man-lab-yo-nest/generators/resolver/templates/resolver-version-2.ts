import { Resolver } from "@nestjs/graphql";
import { PrincipalResolver } from 'man-lab-nest';
import { <%= nombreResolver %>Service } from "./<%= nombreResolverMinuscula %>.service";
import { <%= nombreResolver %>CreateDto } from "./<%= nombreResolverMinuscula %>-create-dto/<%= nombreResolverMinuscula %>-create-dto";
import { <%= nombreResolver %>UpdateDto } from "./<%= nombreResolverMinuscula %>-update-dto/<%= nombreResolverMinuscula %>-update-dto";
import { politicas<%= nombreResolver %> } from './<%= nombreResolverMinuscula %>-politicas/<%= nombreResolverMinuscula %>.politicas';
import { mensajes<%= nombreResolver %> } from './<%= nombreResolverMinuscula %>-mensajes/<%= nombreResolverMinuscula %>.mensajes';

@Resolver('<%= nombreResolver %>')
export class <%= nombreResolver %>Resolver extends PrincipalResolver {
    constructor(private readonly _<%= nombreResolverPrivado %>Service: <%= nombreResolver %>Service) {
        super(politicas<%= nombreResolver %>, // politicas de seguridad
            _<%= nombreResolverPrivado %>Service,
            { // Dtos
                CreateDto: <%= nombreResolver %>CreateDto,
                UpdateDto: <%= nombreResolver %>UpdateDto
            },
            0, // skip
            30, // take
            mensajes<%= nombreResolver %>,
            undefined // contexto
        );
        this.contexto = this;
    }

}