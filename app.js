var express = require('express');
var app = express();

app.use (express.static(__dirname + '/public') );


camisetasLista = [
    {color:"Naranja" ,  imagen:"/images/camiseta1.png"},
    {color:"Roja" ,  imagen:"/images/camiseta2.png"},
    {color:"Azul" ,  imagen:"/images/camiseta3.png"},
    {color:"Verde" ,  imagen:"/images/camiseta4.png"}
]

app.get('/' , function( request, response){
    response.render('index.pug' , {
        titulo: "Camisetas de lenguajes.com",
        textoParrafo: "Camisetas para todxs."
    } );
})

app.get('/tienda.html' , function( request, response){
    
    response.render('tienda.pug' , {
        camisetas: camisetasLista
    } );
})

app.get('/tienda/comprar/:color' , function( request, response){

    let datosDeCamiseta = camisetasLista.filter( function(item){
        if( request.params.color == item.color){
            return item
        }
    })[0]
    
    response.render('detalles.pug' , {
        color: request.params.color,
        datos: datosDeCamiseta
    } );
})

app.use ( function(request, response){

    response.status(400);

    let URLerror = request.originalUrl;

    response.render('404.pug' , {textoError: URLerror});

})

 app.listen( 3001 , function(){
     console.log("Listen in port 3001");
 })