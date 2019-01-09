import { Controller } from '@nestjs/common';
import { <%= nombreController %>Service } from './<%= nombreControllerMinuscula %>.service';
import { <%= nombreController %>UpdateDto } from './<%= nombreControllerMinuscula %>-update-dto/<%= nombreControllerMinuscula %>-update-dto';
import { <%= nombreController %>CreateDto } from './<%= nombreControllerMinuscula %>-create-dto/<%= nombreControllerMinuscula %>-create-dto';
import { politicas<%= nombreController %> } from './<%= nombreControllerMinuscula %>-politicas/<%= nombreControllerMinuscula %>.politicas';
import { mensajes<%= nombreController %> } from './<%= nombreControllerMinuscula %>-mensajes/<%= nombreControllerMinuscula %>.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('<%= nombreControllerMinuscula %>')
export class <%= nombreController %>Controller extends PrincipalController<
    <%= nombreController %>CreateDto,
    <%= nombreController %>UpdateDto> {
    constructor(private readonly _<%= nombreControllerPrivado %>Service: <%= nombreController %>Service) {
        super( politicas<%= nombreController %>, // politicas de seguridad
        _<%= nombreControllerPrivado %>Service, // servicio
            { // Dto
                CreateDto: <%= nombreController %>CreateDto,
                UpdateDto: <%= nombreController %>UpdateDto
            },
            0, // skip
            30, // take
            mensajes<%= nombreController %>,
            undefined // contexto
            );
            this.contexto = this;
    }

}
