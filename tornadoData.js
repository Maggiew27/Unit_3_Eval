console.log(DATA)
const myData = DATA.features;

//calls the specific data from the json file
const inData = {
  datasets: [{
    //titles the data used
    label: 'Tornados in Canada 1980-Present',
    data: myData,
    parsing: {
      xAxisKey: "properties.DEPART_LON",
      yAxisKey: "properties.DEPART_LAT"
    },
    backgroundColor: "rgb(255,0,0)"
  }]

}



const data = {
  datasets: [{
    label: 'Tornado Scatter',
    data: inData,
    backgroundColor: 'rgb(, 99, 132)'
    //}
  }],
};

//calling the image from the file
const image = new Image();
image.src = 'Canada_Map.png';

//draws, sizes and places the map of canada image
const plugin = {
  id: 'Canada_Map.png',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {top, left, width, height} = chart.chartArea;
      const x = left + width / 2 - image.width/2;
      const y = top + height / 2 - image.height/2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
  }
};


const config = {
  type: 'scatter',
  data: inData,
  //map of canada background
  //plugins: [plugin],
  options: {
    scales:{

//x axis scale and label
    x:{
    title:{
    display:'true',
    text:'Longitude',
    align:'center'
  }
},

//y axis scale and label
    y:{
      title:{
      display:'true',
      text:'Latitudes',
      align:'center'
    }
  }
}
  }
};


const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, config);
