import {IsNotEmpty} from 'class-validator';
import {Expose} from 'class-transformer';

export class <%= nombreMayuscula %>CrearDto extends HabilitadoDtoComun {
    // AQUI TODOS LOS CAMPOS PARA EL DTO DE BÚSQUEDA

    // @IsNotEmpty()
    // @IsString()
    // @MinLength(10)
    // @MaxLength(60)
    // @Expose()
    // prefijoCampoEjemplo: string;
}
