// ===============================
// THIS FILE WAS NOT THE ORIGINAL IP OF NIC DURISH. 
// IT HAS BEEN MODIFIED
// ORIGINAL AUTHOR    : Mamboleo
// URL                : https://github.com/Mamboleoo/DecorativeBackgrounds
// ===============================

/*****************
 * Wiggly Canvas
 *****************/
var canvas = document.querySelector("#scene");
var width = canvas.offsetWidth,
  height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0xffffff, 0);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
camera.position.set(-75, -45, 150);

var sphere = new THREE.Group();
scene.add(sphere);
var mat1 = new THREE.LineBasicMaterial({
  color: 0x888888,
  opacity: 0.3,
});
var mat2 = new THREE.LineBasicMaterial({
  color: 0x3f51b5,
  opacity: 0.3,
});
mat1.transparent = true;
mat2.transparent = true;

var radius = 200;
var lines = 50;
var dots = 50;
for (var i = 0; i < lines; i++) {
  var geometry = new THREE.Geometry();
  var line = new THREE.Line(this.geometry, Math.random() > 0.2 ? mat1 : mat2);
  line.speed = Math.random() * 1000 + 1000;
  line.wave = Math.random();
  line.radius = Math.floor(radius + (Math.random() - 0.5) * (radius * 0.2));
  for (var j = 0; j < dots; j++) {
    var x = (j / dots) * line.radius * 2 - line.radius;
    var vector = new THREE.Vector3(x, 0, 0);
    geometry.vertices.push(vector);
  }
  line.rotation.x = Math.random() * Math.PI;
  line.rotation.y = Math.random() * Math.PI;
  line.rotation.z = Math.random() * Math.PI;
  sphere.add(line);
}

function updateDots(a) {
  var i, j, line, vector, y;
  for (i = 0; i < lines; i++) {
    line = sphere.children[i];
    for (j = 0; j < dots; j++) {
      vector = sphere.children[i].geometry.vertices[j];
      var ratio = 1 - (line.radius - Math.abs(vector.x)) / line.radius;
      y = Math.sin(a / line.speed + j * 0.15) * 12 * ratio;
      vector.y = y;
    }
    line.geometry.verticesNeedUpdate = true;
  }
}

function render(a) {
  requestAnimationFrame(render);
  updateDots(a);
  sphere.rotation.y = a * 0.00001;
  sphere.rotation.x = -a * 0.00001;
  renderer.render(scene, camera);
}

function onResize() {
  canvas.style.width = "";
  canvas.style.height = "";
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

requestAnimationFrame(render);
var resizeTm;
window.addEventListener("resize", function () {
  resizeTm = clearTimeout(resizeTm);
  resizeTm = setTimeout(onResize, 200);
});

/* ====================== *
 *  Initiate Canvas       *
 * ====================== */
paper.install(window);
paper.setup(document.getElementById("shapes-canvas"));

// Paper JS Variables
var canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;

var shapeGroup = new Group();

var positionArray = [];

function getCanvasBounds() {
  // Get current canvas size
  canvasWidth = view.size.width;
  canvasHeight = view.size.height;
  canvasMiddleX = canvasWidth / 2;
  canvasMiddleY = canvasHeight / 2;
  // Set path position
  var position1 = {
    x: canvasMiddleX / 2 + 100,
    y: 100,
  };

  var position2 = {
    x: 200,
    y: canvasMiddleY,
  };

  var position3 = {
    x: canvasMiddleX - 50 + canvasMiddleX / 2,
    y: 150,
  };

  var position4 = {
    x: 0,
    y: canvasMiddleY + 100,
  };

  var position5 = {
    x: canvasWidth - 130,
    y: canvasHeight - 75,
  };

  var position6 = {
    x: canvasMiddleX + 80,
    y: canvasHeight - 50,
  };

  var position7 = {
    x: canvasWidth + 60,
    y: canvasMiddleY - 50,
  };

  var position8 = {
    x: canvasMiddleX + 100,
    y: canvasMiddleY + 100,
  };

  positionArray = [
    position3,
    position2,
    position5,
    position4,
    position1,
    position6,
    position7,
    position8,
  ];
}

/* ====================== *
 * Create Shapes          *
 * ====================== */
function initializeShapes() {
  // Get Canvas Bounds
  getCanvasBounds();

  var shapePathData = [
    "M231,352l445-156L600,0L452,54L331,3L0,48L231,352",
    "M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z",
    "M0,65l16,138l96,107l270-2L470,0L337,4L0,65z",
    "M333,0L0,94l64,219L29,437l570-151l-196-42L333,0",
    "M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z",
    "M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352",
    "M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100",
    "M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 ",
  ];

  for (var i = 0; i <= shapePathData.length; i++) {
    // Create shape
    var headerShape = new Path({
      strokeColor: "rgba(150,150,150, 0.2)",
      strokeWidth: 1,
      parent: shapeGroup,
    });
    // Set path data
    headerShape.pathData = shapePathData[i];
    headerShape.scale(2);
    // Set path position
    headerShape.position = positionArray[i];
  }
}

initializeShapes();

/* ====================== *
 * Animation              *
 * ====================== */
view.onFrame = function paperOnFrame(event) {
  if (event.count % 4 === 0) {
    // Slows down frame rate
    for (var i = 0; i < shapeGroup.children.length; i++) {
      if (i % 2 === 0) {
        shapeGroup.children[i].rotate(-0.1);
      } else {
        shapeGroup.children[i].rotate(0.1);
      }
    }
  }
};

view.onResize = function paperOnResize() {
  getCanvasBounds();

  for (var i = 0; i < shapeGroup.children.length; i++) {
    shapeGroup.children[i].position = positionArray[i];
  }

  if (canvasWidth < 700) {
    shapeGroup.children[3].opacity = 0;
    shapeGroup.children[2].opacity = 0;
    shapeGroup.children[5].opacity = 0;
  } else {
    shapeGroup.children[3].opacity = 1;
    shapeGroup.children[2].opacity = 1;
    shapeGroup.children[5].opacity = 1;
  }
};
