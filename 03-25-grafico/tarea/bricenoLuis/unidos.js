let datosX = [];
let datosY = [];
for (let valX = -3; valX <= 3; valX +=0.01)
{
    datosX.push(valX);
    datosY.push(Math.exp(valX));
}
let graf1 = 
{
    x:datosX,
    y:datosY,
    type:'scatter'
}
let layout = 
{
    title:'Funciones exponenciales',
    xaxis:{
        title: 'x'
    },
    yaxis:{
        title: 'y'
    },
    // showlegend: false
}

////////////////////////////////////////////////////////////////
let datosX2 = [];
let datosY2 = [];
for (let valX = -3; valX <= 3; valX +=0.01)
{
    datosX2.push(valX);
    datosY2.push(Math.exp(-valX));
}
let graf2 = 
{
    x:datosX2,
    y:datosY2,
    type:'scatter'
}


// Llamado a plotly
let contenedor = document.getElementById("graficos");
// console.log(contenedor);
Plotly.newPlot(contenedor, [graf1, graf2], layout);