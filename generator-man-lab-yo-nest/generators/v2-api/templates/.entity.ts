import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

// const PREFIJO_TABLA = ''; // EJ: PREFIJO_
// const nombreCampoEjemplo = PREFIJO_TABLA + 'EJEMPLO';

@Entity(PREFIJO_BASE + '<%= nombreSoloMayusculas %>')
@Index(['<%= nombreHabilitado %>', '<%= nombreCreatedAt %>', '<%= nombreUpdatedAt %>'])
export class <%= nombreMayuscula %>Entity extends EntidadComunProyecto {
    @PrimaryGeneratedColumn({
        name: 'ID_<%= nombreSoloMayusculas %>',
        unsigned: true,
    })
    <%= id %>: number;

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
