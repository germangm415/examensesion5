import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator';

export class ProductoDTO{

   
        @IsString()
        @IsNotEmpty()
        producto: string;

        @IsNotEmpty()
        @IsNumber()
        precio: number;

        @IsString()
        @IsNotEmpty()
        descripcion: string;
    
        @IsOptional()
        lugar: string;
    
        @IsString()
        @IsNotEmpty()
        fecha: string;
}