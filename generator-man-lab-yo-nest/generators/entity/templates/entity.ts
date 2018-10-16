import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('<%= nombreEntityMinuscula %>')
export class <%= nombreEntity %>Entity extends PrincipalEntity {

}
