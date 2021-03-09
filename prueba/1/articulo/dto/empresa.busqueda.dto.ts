import {IsNumberString, IsOptional, IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class EmpresaBusquedaDto extends BusquedaComunDto {

    @IsOptional()
    @IsNumberString()
    @Expose()
    idEmpresa: string;

    // AQUI TODOS LOS CAMPOS PARA EL DTO DE BÚSQUEDA
}
