import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { title } from 'process';
import { get } from 'http';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    getProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getProduct(prodId);
    }

    @Post()
    insertProduct(
        @Body('title') pTitle: string,
        @Body('description') pDescription: string,
        @Body('price') pPrice: number
    ) {
        const retrunId = this.productService.insertProduct(pTitle, pDescription, pPrice);

        return { id: retrunId };
    }

    @Put(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') pTitle: string,
        @Body('description') pDescription: string,
        @Body('price') pPrice: number
    ) {
        return this.productService.updateProduct(prodId, {
            title: pTitle,
            description: pDescription,
            price: pPrice
        });
    }

    // @Delete(':id')
    // deleteProduct(@Param('id') prodId: string) {
    //     return this.productService.deleteProduct(prodId);
    // }
}
