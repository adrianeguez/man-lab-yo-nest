import {IsNumberString, IsOptional, IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class <%= nombreMayuscula %>BusquedaDto extends BusquedaComunDto {

    @IsOptional()
    @IsNumberString()
    @Expose()
    <%= id %>: string;

    // AQUI TODOS LOS CAMPOS PARA EL DTO DE BÚSQUEDA
}
