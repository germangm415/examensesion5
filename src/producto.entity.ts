import { BaseEntity,Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class Producto extends BaseEntity{

    @ObjectIdColumn()
    _id:number;

    @Column()
    producto: string;
    @Column()
    precio: number;
    @Column()
    descripcion: string;
    @Column()
    lugar: string;
    @Column()
    fecha: string;

}

