import { Injectable } from '@nestjs/common';
import { ProductoDTO } from './dtos/producto.dto';
import { Producto } from './Producto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  obtenerTodo():String{
    return;
  }

  obtenerUnProducto(id:String):String{
    return;
  }

  agregarUnProducto(data:ProductoDTO){
    return;
  }

  editar(id:String){
    return;
  }

  editarUnProducto(id:String, data:ProductoDTO){
    return;
  }

  eliminarUnProducto(id:String):String{
    return;
  }

}
