const productos = [
{
    id: '1',
    name: 'Milanesas de SOJA',
    category: 'Sola mi alma y yo',
    description:
    'Milanesas de pura soja, con cebolla y especias, sin huevo, ni lacteos.',
    price: 350,
    img:'https://www.hazteveg.com/img/recipes/full/201408/R14-72224.jpg',
    stock: 10,
},
{
    id: '2',
    name:'Milanesas de GARBANZOS',
    category: 'Sola mi alma y yo',
    description:
    'Milanesas de puro garbanzo, con agregado de cebolla y condimentos, sin huevo ni lácteos.',
    price: 350,
    img: 'https://resizer.glanacion.com/resizer/lZsa8l3yl5Ejf7KPUs0TMUXqBts=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PAR2SD6MJNE5ZAVXYGBCIQZJEU.jpg',
    hashtags: ['#comesano', '#comidaconamor', '#natural'],
      stock: 8,
  
},
{
    id: '3',
    name:'Milanesas de POROTOS NEGROS',
    category: 'Sola mi alma y yo',
    description:
    'Milanesas de puro porot negro, con agregado de cebolla y condimentos, sin huevo ni lácteos.',
    price: 350,
    img: 'https://cocinacriolla.com.ar/wp-content/uploads/2021/12/hamburguesa-de-porotos.jpg',
    hashtags: ['#comesano', '#comidaconamor', '#natural'],
      stock: 8,
},
{
    id: '4',
    name:'Milanesas  Rellenas de SOJA, Verduras y Queso',
    category: 'En compañía es mejor',
    description:
    'Milanesas de pura soja, con agregado de cebolla y condimentos, sin huevo ni lácteos.Rellenas de verduras asadas y queso.',
    price: 450,
    img: 'https://cdn0.recetasgratis.net/es/posts/4/0/6/milanesas_de_soja_rellenas_58604_orig.jpg',
    hashtags: ['#comesano', '#comidaconamor', '#natural'],
      stock: 8,
},
{
    id: '5',
    name:'Milanesas de GARBANZOS, Rellenas de Espinaca',
    category: 'En compañía es mejor',
    description:
    'Milanesas de pura GARBANZO, con agregado de cebolla y condimentos, sin huevo ni lácteos.Rellenas de espinaca salteada con ajo',
    price: 450,
    img: 'https://okdiario.com/img/2018/05/02/hamburguesas-de-garbanzos-y-espinacas.jpg',
    hashtags: ['#comesano', '#comidaconamor', '#natural'],
      stock: 8,
},
{
    id: '6',
    name:'Milanesas de POROTOS NEGROS, Rellenas de Calabaza',
    category: 'En compañía es mejor',
    description:
    'Milanesas de pura POROTO NEGRO, con agregado de cebolla y condimentos, sin huevo ni lácteos. Rellenas de Calabaza',
    price: 450,
    img: 'https://img-global.cpcdn.com/recipes/311c6afcca9a0d22/158x132cq70/hamburguesitas-de-porotos-negros-opcional-vegana-foto-principal.jpg',
    hashtags: ['#comesano', '#comidaconamor', '#natural'],
      stock: 8,
},
{
    id: '7',
    name:'Mini bastoncitos de GARBANZOS',
    category: 'Amores de mi alma',
    description:
    'Mini bastoncitos de Garbanzos, con el tamaño justo para que el bebé agarre, con agregados de verduras para darle sabor, como cebolla y ajo. No tiene sal, huevo, ni lácteos ',
    price: 350,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfC2N0blHw3TCz_4nI5ei4heHn3wu79KSVNJmXOMnCreSL7eNY6paQfpWJgGt0MZ61tHg&usqp=CAU',
    hashtags: ['#comesano', '#comidaconamor', '#natural', '#BLW'],
      stock: 8, 
},
{
    id: '8',
    name:'Albondiguitas de POROTOS NEGROS',
    category: 'Amores de mi alma',
    description:
    'Albondiguitas de Porotos Negros, con el tamaño justo para que el bebé agarre, con agregados de verduras para darle sabor, como cebolla y ajo. No tiene sal, huevo, ni lácteos ',
    price: 350,
    img: 'https://mlouiqhv7qz1.i.optimole.com/cb:rNE0~44338/w:768/h:576/q:mauto/https://nutreduca.com/wp-content/uploads/2018/04/Albo%CC%81ndigas-porotos-negros.jpg',
    hashtags: ['#comesano', '#comidaconamor', '#natural', '#BLW'],
      stock: 8, 
},
{
    id: '9',
    name:'Panquequitos de GARBANZOS y Calabaza',
    category: 'Amores de mi alma',
    description:
    'Panquequitos de Garbanzos con Calabaza, con el tamaño justo para que el bebé agarre, con agregados de verduras para darle sabor, como cebolla y ajo. No tiene sal, huevo, ni lácteos ',
    price: 350,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45_gJTQNEzXYNivA456aUq80aFDV3a5DxI4gabzqE4U-_K6SojBPWEe2QzPexqu-5H0I&usqp=CAU',
    hashtags: ['#comesano', '#comidaconamor', '#natural', '#BLW'],
      stock: 8, 

},
];

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (!error) {
                resolve(productos);
            }else {
                reject('Hubo un error intente más tarde')
            }
         }, 2000)
    })
}