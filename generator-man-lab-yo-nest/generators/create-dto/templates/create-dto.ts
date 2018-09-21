import { PrincipalEntity } from 'man-lab-nest';
import { Column, Entity } from 'typeorm';

@Entity('<%= nombreCreateDtoMinuscula %>')
export class <%= nombreCreateDto %>Entity extends PrincipalEntity {

}
