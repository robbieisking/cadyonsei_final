
function makeCube() {

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );

  cube.render = function () {
    this.scale.x = glob.scalex
    this.scale.y = glob.scaley
    this.scale.z = glob.scalez
  }

  glob.scene.add( cube );
  glob.now.push(cube)

}

function makeCylinder() {
  var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var cylinder = new THREE.Mesh( geometry, material );

  cylinder.render = function () {

    this.rotation.x += 0.1;
    this.rotation.y += 0.1;

  }

  glob.scene.add( cylinder );
  glob.now.push( cylinder);

}

function makeExtrude (){

  var randomPoints = [];
  for ( var i = 0; i < glob.ext_height; i ++ ) {
    randomPoints.push( new THREE.Vector3( 0 , 0 , i ) );
  }
  var randomSpline =  new THREE.CatmullRomCurve3( randomPoints );
  //
  var extrudeSettings = {
    steps			: 200,
    bevelEnabled	: false,
    extrudePath		: randomSpline
  };
  var pts = [], numPts = 30;
  var radius = glob.ext_rad;
  for ( var i = 0; i < numPts * 2; i ++ ) {
    var l = radius
    var a = i / numPts * Math.PI;
    pts.push( new THREE.Vector2 ( Math.cos( a ) * l, Math.sin( a ) * l ) );
  }
  var shape = new THREE.Shape( pts );
  var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
  var material2 = new THREE.MeshLambertMaterial( { color: 0xff8000, wireframe: false } );
  var mesh = new THREE.Mesh( geometry, material2 );
  mesh.render = function() {


  }
  glob.scene.add( mesh );
  glob.now.push(mesh)

}


function makePlane() {

  var geometry = new THREE.PlaneGeometry( 40, 40, 32);
  var material = new THREE.MeshPhongMaterial( {
    color: new THREE.Color('rgb(102,255,255)'),
    side: THREE.DoubleSide,
    shading: THREE.FlatShading,
    opacity:0.5
  } )
  var plane = new THREE.Mesh( geometry, material );
  glob.scene.add( plane );

}
