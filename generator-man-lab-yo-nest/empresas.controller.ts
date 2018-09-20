import { Controller } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasUpdateDto } from './empresas-update-dto/empresas-update-dto';
import { EmpresasCreateDto } from './empresas-create-dto/empresas-create-dto';
import { EmpresasEntity } from './empresas-entity';
import { PrincipalController } from 'man-lab-nest';

@Controller('empresas')
export class EmpresasController extends PrincipalController<EmpresasEntity, EmpresasCreateDto, EmpresasUpdateDto> {
    constructor(private readonly _empresasService: EmpresasService) {
        super(_empresasService, //servicio
            { //Dto
                CreateDto: EmpresasCreateDto,
                UpdateDto: EmpresasUpdateDto
            },
            0, //skip
            30, //take
            { //mensajes
                encontrarUno: 'Id Empresas erroneo',
                crearUno: 'Empresas inválida',
                actualizarUno: 'Error actualizando Empresas',
                eliminarUno: 'Error al eliminar una Empresas'
            });
    }

}

