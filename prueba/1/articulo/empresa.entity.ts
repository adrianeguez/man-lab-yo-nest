import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

// const PREFIJO_TABLA = ''; // EJ: PREFIJO_
// const nombreCampoEjemplo = PREFIJO_TABLA + 'EJEMPLO';

@Entity(PREFIJO_BASE + 'EMPRESA')
@Index(['sisHabilitado', 'sisCreacion', 'sisActualizacion'])
export class EmpresaEntity extends EntidadComun {
    @PrimaryGeneratedColumn({
        name: 'ID_EMPRESA',
        unsigned: true,
    })
    idEmpresa: number;

    // @Column({
    //     name: nombreCampoEjemplo,
    //     type: 'varchar',
    //     length: '60',
    //     nullable: false,
    // })
    // prefijoCampoEjemplo: string;

    // @ManyToOne(() => EntidadRelacionPapa, (r) => r.nombreRelacionPapa, { nullable: false })
    // entidadRelacionPapa: EntidadRelacionPapa;

    // @OneToMany(() => EntidadRelacionHijo, (r) => r.nombreRelacionHijo)
    // entidadRelacionesHijos: EntidadRelacionHijo[];
}
