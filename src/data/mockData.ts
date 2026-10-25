{/*ALmacena los cafes*/}
import { Producto } from '../types';

export const productos: Producto[] = [
    {
        id: 1,
        nombre: 'Moca de la casa',
        descripcion: 'Espresso, chocolate y leche cremosa.',
        precio: '$13.000',
        imagen: require('../../assets/images/moca.jpg'),
    },
    {
        id: 2,
        nombre: 'Cold brew',
        descripcion: 'Café frío de sabor intenso y refrescante.',
        precio: '$10.000',
        imagen: require('../../assets/images/cold-brew.jpg'),
    },
    {
        id: 3,
        nombre: 'Latte caramelo',
        descripcion: 'Espresso suave con leche y caramelo.',
        precio: '$12.000',
        imagen: require('../../assets/images/latte-caramelo.jpg'),
    },
    {
        id: 4,
        nombre: 'Iced Americano',
        descripcion: 'Espresso suave con sabor a chocolate con hielo refrescante.',
        precio: '$16.000',
        imagen: require('../../assets/images/iced-americano.webp'),
    },
];
