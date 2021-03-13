import {IsNumberString, IsOptional} from 'class-validator';
import {Expose} from 'class-transformer';

export class <%= nombreMayuscula %>BusquedaDto extends BusquedaComunProyectoDto {

    @IsOptional()
    @IsNumberString()
    @Expose()
    <%= id %>: string;

    // AQUI TODOS LOS CAMPOS PARA EL DTO DE BÚSQUEDA
}
