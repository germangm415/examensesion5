import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoDTO } from './dtos/producto.dto';

@Controller()
export class AppController {

  private logger = new Logger('appController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("obtenerTodo")
  obtenerTodo():String {
      return this.appService.obtenerTodo();

  }


  @Get("obtenerProducto/:id")
  obtenerUnProducto(@Param("id") id:String):String {
      return this.appService.obtenerUnProducto(id);

  }
  
  @Post()
  @UsePipes(ValidationPipe)
  agregarUnProducto(@Body() data:ProductoDTO){
      return this.appService.agregarUnProducto(data);

  }


  @Put("editar/:id")
  editar(@Param("id") id:String){
      return this.appService.editar(id);
  }

  @Patch("/:id")
  @UsePipes(ValidationPipe)
  editarProducto(@Param("id") id:String, @Body()data:ProductoDTO){
      return this.appService.editarUnProducto(id, data);
  }

  @Delete("editarProducto/:id")
  eliminarUnProducto(@Param("id") id:String){
      return this.appService.eliminarUnProducto(id);

  }
}
