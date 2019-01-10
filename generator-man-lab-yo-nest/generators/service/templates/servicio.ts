import { Injectable } from '@nestjs/common';
import { <%= nombreServicio %>UpdateDto } from './<%= nombreServicioMinuscula %>-update-dto/<%= nombreServicioMinuscula %>-update-dto';
import { <%= nombreServicio %>CreateDto } from './<%= nombreServicioMinuscula %>-create-dto/<%= nombreServicioMinuscula %>-create-dto';
import { <%= nombreServicio %>Entity } from './<%= nombreServicioMinuscula %>.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class <%= nombreServicio %>Service extends PrincipalService<
    <%= nombreServicio %>Entity,
    <%= nombreServicio %>CreateDto,
    <%= nombreServicio %>UpdateDto> {
    constructor(@InjectRepository(<%= nombreServicio %>Entity)
    private readonly _<%= nombreServicioPrivado %>Repository: Repository<<%= nombreServicio %>Entity>) {
        super(_<%= nombreServicioPrivado %>Repository, <%= nombreServicio %>Entity, 'default');
    }
}
