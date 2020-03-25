let datosX = [];
let datosY = [];
for (let valX = -3; valX <= 3; valX +=0.01)
{
    datosX.push(valX);
    datosY.push(4*valX * valX -2*valX);
}
let parabola = 
{
    x:datosX,
    y:datosY,
    type:'scatter'
}
let layout = 
{
    title:'Parábola',
    xaxis:{
        title: 'x'
    },
    yaxis:{
        title: 'y'
    },
    showlegend: false
}
let contenedor = document.getElementById("miGrafico");
// console.log(contenedor);
Plotly.newPlot(contenedor, [parabola], layout);