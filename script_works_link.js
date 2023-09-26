
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";



// Set up the scene
const textureLoader = new THREE.TextureLoader();
const gradient = new THREE.LinearGradient('#000000', '#ffffff');
gradient.position.set(0.5, 0.5, 0.5);




var scene = new THREE.Scene();
scene.background = gradient;
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create the room
var roomGeometry = new THREE.BoxGeometry( 10, 10, 10 );
var roomMaterial = new THREE.MeshBasicMaterial( { color: 0xdddddd, side: THREE.BackSide } );
var room = new THREE.Mesh( roomGeometry, roomMaterial );
scene.add( room );

let texture_ft = new THREE.TextureLoader().load( '../asd2.jfif');

// Create the objects
var object1Geometry = new THREE.BoxGeometry( 1, 3, 0.1 );
var object1Material = new THREE.MeshBasicMaterial( { map: texture_ft } );
var object1 = new THREE.Mesh( object1Geometry, object1Material );
object1.position.set( -2, 0, 0 );
object1.userData = { link: "https://www.facebook.com/profile.php?id=100005207205784&__tn__=-UC*F" };
scene.add( object1 );

var object2Geometry = new THREE.BoxGeometry( 1, 3, 0.1 );
var object2Material = new THREE.MeshBasicMaterial( { map: texture_ft } );
var object2 = new THREE.Mesh( object2Geometry, object2Material );
object2.position.set( 0, 0, 0 );
scene.add( object2 );

var object3Geometry = new THREE.BoxGeometry( 1, 3, 0.1 );
var object3Material = new THREE.MeshBasicMaterial( { map: texture_ft } );
var object3 = new THREE.Mesh( object3Geometry, object3Material );
object3.position.set( 2, 0, 0 );
scene.add( object3 );



renderer.domElement.addEventListener("click", onObjectClick, false);

function onObjectClick(event) {
        event.preventDefault();

        // Calculate the mouse position in normalized device coordinates
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Raycast to detect if an object was clicked
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        // Open link in new tab if object was clicked
        if (intersects.length > 0 && intersects[0].object.userData.link) {
          window.open(intersects[0].object.userData.link, "_blank");
        }
}


// Set up the camera and controls
camera.position.z = 5;
var controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// Render the scene
var animate = function () {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
};
animate();
