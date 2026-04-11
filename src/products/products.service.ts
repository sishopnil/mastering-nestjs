import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { title } from 'process';

@Injectable()
export class ProductsService {;
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getProduct(id: string) {
        const product = this.products.find((prod) => prod.id === id);
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        return { ...product};
    }

    updateProduct(
        id: string,
        productData: {
            title?: string;
            description?: string;
            price?: number;
        }
    ) {
        const [product, productIndex] = this.findProduct(id);
        const updatedProduct = {
            title: productData.title !== undefined ? productData.title : "",
            description: productData.description !== undefined ? productData.description : "",
            price: productData.price !== undefined ? productData.price : 0
         };
        this.products[productIndex] = { ...product, ...updatedProduct };
        return {...product, ...updatedProduct};
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        return [product, productIndex];
    }
}