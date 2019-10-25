// Options for map
var options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

var colors = {
  'epidemy': [[200, 225, 170], [150, 175, 120]],
  'terrorist': [[255, 230, 180], [230, 150, 0]],
  'war': [[255, 200, 255], [205, 150, 205]],
  'env-pollution': [[255, 195, 180], [230, 70, 0]],
  'natural-disaster': [[200, 225, 250], [150, 175, 200]]
}

// Create an instance of Leaflet
var mappa = new Mappa('Leaflet');
var myMap;

var canvas;

var canvasDiv;

var points = new Array;

function add_point(point = [0, 0, 'epidemy']) {
  points.push(point);
}

function setup() {

  canvasDiv = document.getElementById('mapDiv');
  canvas = createCanvas(windowWidth - 65, windowHeight - 95).parent('mapDiv');

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawDot);

  fill(70, 203, 31);
  stroke(100);
}

function drawDot() {
  // Clear the canvas
  clear();
  for (var i = 0; i < points.length; i++) {
    var dx = parseFloat(points[i][0]);
    var dy = parseFloat(points[i][1]);
    var category = points[i][2];
    if (myMap.map.getBounds().contains({ lat: dx, lng: dy })) {
      var pos = myMap.latLngToPixel(dx, dy);

      fill(colors[category][0][0], colors[category][0][1], colors[category][0][2]);
      stroke(colors[category][1][0], colors[category][1][1], colors[category][1][2]);

      ellipse(pos.x, pos.y, 15, 15);
      console.log('kropeczka');
    }
  }
}
