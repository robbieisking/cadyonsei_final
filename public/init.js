
//씬 설정
glob.scene = new THREE.Scene()
glob.camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,0.1,100)
var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth*0.6, window.innerHeight *0.6);

glob.scene.add( new THREE.AmbientLight( 0x222222 ) );
var light = new THREE.PointLight( 0xffffff );

light.position.copy( glob.camera.position );
glob.scene.add( light );


//controls
controls = new THREE.OrbitControls( glob.camera, renderer.domElement );


// load될 시에 scene append하고 geometry 결정.
$(document).ready(function(){
  document.querySelector('div.three').appendChild(renderer.domElement)
  render()
  glob.camera.position.z = 50 ;
  glob.camera.position.x =25
  glob.camera.position.y = 25;
})


var render = function () {
  requestAnimationFrame( render );
  glob.now.forEach ( function (item) {item.render();
    item.scale.set(glob.scalex,glob.scaley,glob.scalez)})


controls.update();

  renderer.render(glob.scene, glob.camera);
};
