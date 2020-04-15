let datosX = [];
let datosY = [];
for (let valX = -5; valX <= 5; valX +=0.01)
{
    datosX.push(valX);
    datosY.push(2*valX - 4);
}
let graf1 = 
{
    x:datosX,
    y:datosY,
    type:'scatter'
}
let layout1 = 
{
    title:'Funcion 1',
    xaxis:{
        title: 'x'
    },
    yaxis:{
        title: 'y'
    },
    showlegend: false
}
let contenedor1 = document.getElementById("grafico1");
// console.log(contenedor);
Plotly.newPlot(contenedor1, [graf1], layout1);
////////////////////////////////////////////////////////////////
let datosX2 = [];
let datosY2 = [];
for (let valX = -4; valX <= 4; valX +=0.01)
{
    datosX2.push(valX);
    datosY2.push(6*valX*valX - 3*valX - 8);
}
let graf2 = 
{
    x:datosX2,
    y:datosY2,
    type:'scatter'
}
let layout2 = 
{
    title:'Funcion 2',
    xaxis:{
        title: 'x'
    },
    yaxis:{
        title: 'y'
    },
    showlegend: false
}
let contenedor2 = document.getElementById("grafico2");
// console.log(contenedor);
Plotly.newPlot(contenedor2, [graf2], layout2);
////////////////////////////////////////////////////////////////
let datosX3 = [];
let datosY3 = [];
for (let valX = -7; valX <= 7; valX +=0.01)
{
    datosX3.push(valX);
    datosY3.push(Math.sin(valX));
}
let graf3 = 
{
    x:datosX3,
    y:datosY3,
    type:'scatter'
}
let layout3 = 
{
    title:'Funcion 3',
    xaxis:{
        title: 'x'
    },
    yaxis:{
        title: 'y'
    },
    showlegend: false
}
let contenedor3 = document.getElementById("grafico3");
// console.log(contenedor);
Plotly.newPlot(contenedor3, [graf3], layout3);