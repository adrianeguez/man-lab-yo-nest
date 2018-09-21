import { Resolver, Query, Args, Context, Info, Parent, Root, Mutation } from "@nestjs/graphql";
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


    @Query('findAll<%= nombreResolver %>')
    findAll<%= nombreResolver %>(
        @Args('criterioBusqueda') criterioBusqueda: string,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findAll(criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findOne<%= nombreResolver %>ById')
    findOne<%= nombreResolver %>ById(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findOneById(id, args, context, info, parent, root);
    }

    @Mutation('createOne<%= nombreResolver %>')
    createOne<%= nombreResolver %>(
        @Args('nuevoRegistro') nuevoRegistro,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.createOne(nuevoRegistro, args, context, info, parent, root);
    }

    @Mutation('deleteOne<%= nombreResolver %>')
    deleteOne<%= nombreResolver %>(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.deleteOne(id, args, context, info, parent, root);
    }

    @Mutation('updateOne<%= nombreResolver %>')
    updateOne<%= nombreResolver %>(
        @Args('id') id,
        @Args('registroAActualizar') registroAActualizar,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.updateOne(id, registroAActualizar, args, context, info, parent, root);
    }

}