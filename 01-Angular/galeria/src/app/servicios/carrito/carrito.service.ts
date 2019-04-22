import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {
    carritoCompras = [];

    agregarCarritoDeCompras(
        itemCarrito:ItemCarritoCompras
        ):ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;
        
        // [1,2,3].find()

        
        
        return [];
    }


}

[1,2,3,4].forEach(busqueda);


function busqueda(valor, indice, arreglo){
    console.log('Valor:',valor);
    if(valor==1){
        console.log('Te encontre 1 !!');
    }
}








