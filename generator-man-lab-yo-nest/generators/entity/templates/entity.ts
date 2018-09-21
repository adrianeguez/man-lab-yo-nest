import { PrincipalEntity } from 'man-lab-nest';
import { Column, Entity } from 'typeorm';

@Entity('<%= nombreEntityMinuscula %>')
export class <%= nombreEntity %>Entity extends PrincipalEntity {

}
