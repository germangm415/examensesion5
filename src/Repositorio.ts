import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import {Producto} from "./Producto";

@EntityRepository(Producto)

export class Repositorio extends Repository<Producto>{

private logger = new Logger('');


}