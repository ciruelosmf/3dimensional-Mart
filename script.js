//  import { OrbitControls } from "https://unpkg.com/three@0.155/examples/jsm/controls/OrbitControls.js";
//  import {GLTFLoader} from "https://unpkg.com/three@0.155/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';


import { PerspectiveCamera, CameraHelper } from 'three';







// Set up the scene


let cameraRig, activeCamera, activeHelper;
let cameraPerspective, cameraOrtho;
let cameraPerspectiveHelper, cameraOrthoHelper;
const frustumSize = 600;
let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;



const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xd51c1c);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 20;
camera.position.y = 0;
camera.position.set(0, 12, 26);
scene.add(camera);








/* const size = 100; // Size of the grid
const divisions = 100; // Number of divisions
const colorCenterLine = 0xAAAAAA; // Color of the center line
const colorGrid = 0x888888; // Color of the grid lines
const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
scene.add(gridHelper);



 */





var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);






// LIGHTS -------- LIGHTS -------- LIGHTS -------- LIGHTS
// LIGHTS -------- LIGHTS -------- LIGHTS -------- LIGHTS
// LIGHTS -------- LIGHTS -------- LIGHTS -------- LIGHTS
// LIGHTS -------- LIGHTS -------- LIGHTS -------- LIGHTS
const light = new THREE.AmbientLight(0x404040, 68);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(0, 20, 6);
scene.add(directionalLight);



// const pointLightHelper = new THREE.PointLightHelper(light);
// scene.add(pointLightHelper);











// PANORAMIC IMAGE --------   PANORAMIC IMAGE
// PANORAMIC IMAGE --------   PANORAMIC IMAGE
// PANORAMIC IMAGE --------   PANORAMIC IMAGE
// PANORAMIC IMAGE --------   PANORAMIC IMAGE
const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
sphereGeometry.scale(-1, 1, 1); // Reverse the normals to display the image correctly
// Load the panoramic image  
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('back2.jpg'); // upload here your image  
const material = new THREE.MeshBasicMaterial({ map: texture });
// Create a mesh with the sphere geometry and material
const mesh = new THREE.Mesh(sphereGeometry, material);
scene.add(mesh);
// Set initial rotation speed and angle
const rotationSpeed = 0.005; // Adjust the speed as needed
let currentRotationAngle = 0;



//const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper);

























// ---------------------------------------------
// ---------------------------------------------
// ---------        LoAD TITLE      ------------
// ---------------------------------------------
// ---------------------------------------------

const loader_title = new GLTFLoader();                 // MAIN TITLE 
loader_title.load("3dmart_title_text2.gltf", (gltf) => {
  const model_title = gltf.scene;
  model_title.traverse((child) => {
    if (child.isMesh) {
      const newMaterial = new THREE.MeshBasicMaterial({ color: 0x404040 }); // Red color
      child.material = newMaterial;
    }
  });
  model_title.position.set(0, 22, -41);
  model_title.scale.set(5, 5, 2);
  scene.add(model_title);
});














const loader_title_patr = new GLTFLoader();
loader_title_patr.load("ihpone_char_gtlf.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(-9, -6, -18);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, 0);
});

loader_title_patr.load("stanley.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(-32, 18, -8);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, -.5);
});

loader_title_patr.load("purif_text.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(-31, 7, -8);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, -0.3);
});

loader_title_patr.load("vacum_text.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(37, -12, -6);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, 0.5);
});

loader_title_patr.load("shoe_text.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(-26, -12, -8);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, -0.3);

});

loader_title_patr.load("cook_text.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(9, 15, -33);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, 0);

});

loader_title_patr.load("ring_text.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(37, 4, -5);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, 0.5);

});

loader_title_patr.load("tupp_text.gltf", (gltf) => {
  const loader_title_patr = gltf.scene;
  loader_title_patr.position.set(37, 16, -5);
  loader_title_patr.scale.set(3, 3, 3);
  scene.add(loader_title_patr);
  loader_title_patr.rotation.set(1.5, 0, 0.5);

});






























let model2;
async function loadModel_patr() {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync("vacu.gltf");
  model2 = gltf.scene; // Assign the loaded object to the variable
  model2.position.set(32, -14, -8);
  model2.scale.set(3, 3, 3); // Load BOOK
  model2.rotation.set(1, 1, 0);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/46plHzi";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link = model2.userData.link;
    if (link) {
      window.open(link, "_blank");
    }
  });
  animate();
}
loadModel_patr();













let model3;
// Define a function to load the model   SI FUNCIONA ROTACION
async function loadModel_ig() {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync("airp.gltf");
  model3 = gltf.scene; // Assign the loaded object to the variable
  model3.position.set(-35, 4, -8);
  model3.scale.set(2, 2, 2); // Load BOOK
  model3.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3EW7Cxe";
    }
  });
  scene.add(model3);
  model3.addEventListener("click", () => {
    const link = model3.userData.link;
    if (link) {
      window.open(link, "_blank");
    }
  });
  animate();
} loadModel_ig();










const loader2 = new GLTFLoader();
loader2.load("charg.gltf", (gltf) => {
  const model2 = gltf.scene;
  // Position and scale the model as needed
  model2.position.set(0, -1, -18);
  model2.scale.set(5, 5, 5);
  model2.rotation.set(4, 0, 0);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3rsBH4C";
      child.userData.name = "elago 3 in 1 Charging Station Compatible with Apple Products";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link2 = model2.userData.link;
    if (link2) {
      window.open(link2, "_blank");
    }
  })
    ;
});













 
 
loader2.load("rice.glb", (gltf) => {
  const model2 = gltf.scene;
  // Position and scale the model as needed
  model2.position.set(1, 15, -34);
  //model2.scale.set(5, 5, 5);
  model2.rotation.set(0, 0, 0);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3EStcD0";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link2 = model2.userData.link;
    if (link2) {
      window.open(link2, "_blank");
    }
  })
    ;
});












loader2.load("ring.gltf", (gltf) => {
  const model2 = gltf.scene;
  model2.position.set(32, 4, -8);
  model2.scale.set(5, 5, 5);
  model2.rotation.set(2, 0, -0.5);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3LzDoUG";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link2 = model2.userData.link;
    if (link2) {
      window.open(link2, "_blank");
    }
  });
});









loader2.load("shoes.gltf", (gltf) => {
  const model2 = gltf.scene;
  // Position and scale the model as needed
  model2.position.set(-32, -14, -8);
  model2.scale.set(5, 5, 5);
  model2.rotation.set(0, -0.2, -0.2);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3LAiPHK";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link2 = model2.userData.link;
    if (link2) {
      window.open(link2, "_blank");
    }
  })
    ;
});





loader2.load("tupp.gltf", (gltf) => {
  const model2 = gltf.scene;
  model2.position.set(32, 14, -8);
  model2.scale.set(7, 7, 7);
  model2.rotation.set(0, 0, 0);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3Lw7SHi";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link2 = model2.userData.link;
    if (link2) {
      window.open(link2, "_blank");
    }
  })
    ;
});




loader2.load("tumb.gltf", (gltf) => {
  const model2 = gltf.scene;
  model2.position.set(-35, 14, -8);
  model2.scale.set(5, 5, 5);
  model2.rotation.set(0, 0, 0);
  model2.traverse(child => {
    if (child.isMesh) {
      child.userData.link = "https://amzn.to/3ruyotF";
    }
  });
  scene.add(model2);
  model2.addEventListener("click", () => {
    const link2 = model2.userData.link;
    if (link2) {
      window.open(link2, "_blank");
    }
  })
    ;
});












const objLoader = new OBJLoader();
const mtlLoader = new MTLLoader();





mtlLoader.load('amal.mtl', (materiala) => {
  materiala.preload(); // Preload materials for use in the OBJ loader
  objLoader.setMaterials(materiala);
  objLoader.load(
    'amalogo.obj',
    (object) => {
      object.position.set(0, -36, 48);

      scene.add(object);

    },
    (xhr) => {
      // Progress callback (optional)
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      console.error('An error occurred while loading the OBJ file: ', error);
    }
  );
});














/* mtlLoader.load('cokm.mtl', (materials) => {
  materials.preload(); // Preload materials for use in the OBJ loader
  objLoader.setMaterials(materials);
  objLoader.load(
    'cok.obj',
    (object) => {
      object.position.set(1, 15, -34);
      object.traverse(child => {
        if (child.isMesh) {
          child.userData.link = "https://amzn.to/3EStcD0";
        }
      });
      scene.add(object);
      object.addEventListener("click", () => {
        const link2 = object.userData.link;
        if (link2) {
          window.open(link2, "_blank");
        }
      })
    },
    (xhr) => {
      // Progress callback (optional)
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      console.error('An error occurred while loading the OBJ file: ', error);
    }
  );
}); */






  mtlLoader.load('discc.mtl', (materials) => {
    materials.preload(); // Preload materials for use in the OBJ loader
    objLoader.setMaterials(materials);
    objLoader.load(
      'discc.obj',
      (object) => {
        object.position.set(0, -32, 48);
        object.traverse(child => {
            if (child.isMesh) {
                child.userData.link = "https://amzn.to/3EStcD0";
                 }
               });         
        scene.add(object);
        object.addEventListener("click", () => {
            const link2 = object.userData.link;
            if (link2) {          
                window.open(link2, "_blank");
            }})
      },
      (xhr) => {
        // Progress callback (optional)
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded222');
      },
      (error) => {
        console.error('An error occurred while loading the OBJ file: ', error);
      }
    );
  });



























/*     // Load the OBJ file
    objLoader.load(
      'fires.obj',
      (object) => {
        // Add the loaded mesh to the scene
        object.position.set(17,15,-31);
        scene.add(object);
      },
      (xhr) => {
        // Progress callback (optional)
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        // Error callback
        console.error('An error occurred while loading the OBJ file: ', error);
      }
    );
  */




















































// -----------------------------------------------------------------------------
// --------------                                    ----------------------------
// -------------        SHOW PRODCUT NAME IN HTML     ------------------------------
// -------------                                        -----------------------------
// --------------------------------------------------------------------------------            
/* const myDiv = document.getElementById('price_now');
// myDiv.style.display = 'none';
// Change the background color
// price_now.textContent = pricesInThousands[pricesInThousands.length - 1].closingPrice * 1000;
let isMobile = false;
const mobileScreenWidth = 768; // For example, screens narrower than 768px are considered mobile
if (window.innerWidth < mobileScreenWidth) {
  isMobile = true;
}
if (isMobile) {
  myDiv.style.display = 'block';
  price_now.textContent = "asdasd";
} else {
  // Do something for non-mobile devices (e.g., desktop or tablet)
  console.log('This is not a mobile device.');
  price_now.textContent = "asdasd";

} */



// ---------------------------------------------
// ---------------------------------------------
// ---------        GLOE EFFECT     ------------
// ---------------------------------------------
// ---------------------------------------------














//                                         Flag to track if orbiting should be disabled
let disableOrbiting = false;
//                                   Function to disable orbiting
function disableOrbitControls() {
  controls.enabled = false;
}
//                                         Function to enable orbiting
function enableOrbitControls() {
  controls.enabled = true;
}



let isMouseDown = false;
let isInsideObject = false;
let clickedObject = null;

function onObjectMouseDown(event) {
  isMouseDown = true;
  clickedObject = null;

  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  handleInteraction(mouse);
}

function onObjectMouseUp(event) {
  if (isMouseDown && isInsideObject && clickedObject) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    handleInteraction(mouse);
  }
  isMouseDown = false;
  isInsideObject = false;
  clickedObject = null;
}

function onObjectTouchStart(event) {
  event.preventDefault();
  isMouseDown = true;
  clickedObject = null;
  const touch = event.touches[0];
  const mouse = new THREE.Vector2();
  mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
  handleInteraction(mouse);
}

function onObjectTouchEnd(event) {
  if (isMouseDown && isInsideObject && clickedObject) {
    const touch = event.changedTouches[0];
    const mouse = new THREE.Vector2();
    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
    handleInteraction(mouse);
  }

  isMouseDown = false;
  isInsideObject = false;
  clickedObject = null;
}

function handleInteraction(mouse) {
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  console.log(intersects[0].object, "intersects[0].object")

  if (intersects.length > 0 && intersects[0].object.userData.link) {
    isInsideObject = true;


    clickedObject = intersects[0].object;
    window.open(clickedObject.userData.link, "_blank");
    disableOrbiting = true;
    disableOrbitControls();
  } else {
    isInsideObject = false;
    disableOrbiting = false;
    enableOrbitControls();
  }
}

window.addEventListener("mousedown", onObjectMouseDown);
window.addEventListener("mouseup", onObjectMouseUp);
window.addEventListener("touchstart", onObjectTouchStart);
window.addEventListener("touchend", onObjectTouchEnd);




let isTabActive = true; // Assume the tab is initially active

// Listen for the window's visibilitychange event to track tab visibility
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Tab is no longer active, pause camera animations/controls
    isTabActive = false;
    isMouseDown = false;
    isInsideObject = false;
    clickedObject = null;
    // Pause your camera controls/animations here
  } else {
    // Tab is active again, resume camera animations/controls
    isTabActive = true;
    // Resume your camera controls/animations here
  }
});

window.addEventListener("blur", () => {
  isMouseDown = false;
  isInsideObject = false;
  clickedObject = null;
});






























/*  antes de solucion de gpt p pantala tacctil
let isMouseDown = false;
let isInsideObject = false;
let clickedObject = null;

function onObjectMouseDown(event) {
    isMouseDown = true;
    clickedObject = null;

    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].object.userData.link) {
        isInsideObject = true;
        clickedObject = intersects[0].object;
    } else {
        isInsideObject = false;
    }
}

function onObjectMouseUp(event) {
    if (isMouseDown && isInsideObject && clickedObject) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects([clickedObject], true);

        if (intersects.length > 0 && intersects[0].object === clickedObject) {
            // Open the link in a new tab
            window.open(clickedObject.userData.link, "_blank");
        }
    }

    isMouseDown = false;
    isInsideObject = false;
    clickedObject = null;
}

window.addEventListener("mousedown", onObjectMouseDown);
window.addEventListener("mouseup", onObjectMouseUp); */



/* function onObjectClick(event) {  
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
        }  }
 */










var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.rotateSpeed = 0.3; // Adjust rotation speed
controls.minDistance = 7;
controls.maxDistance = 75.1;



/* 
// Render the scene funciona bien
var animate = function () {
 requestAnimationFrame( animate );
 // Update rotation
 // haloGroup.rotation.y += 0.002;
 mesh.rotation.y = currentRotationAngle;
 model2.rotation.y = currentRotationAngle;
 
 renderer.render( scene, camera );
};
*/



// Define variables for rotation animation
let currentRotationAngle2 = 0;
let rotationSpeed2 = 1.22; // Initial rotation speed

// Define variables for timed rotation
let isRotating = false;
let rotationStartTime = 0;

// Inside your animation/render loop
var animate = function() {
  requestAnimationFrame(animate);






  /*     
      const currentTime = Date.now();
      if (!isRotating && currentTime - rotationStartTime > 2400) {
          isRotating = true;
          rotationStartTime = currentTime;
          rotationSpeed2 = 0.005; // High rotation speed for half a second
      }
  
      if (isRotating && currentTime - rotationStartTime > 900) {
          isRotating = false;
          rotationSpeed2 = 0.03; // Return to normal rotation speed
      }
  
      // Check if the model is defined before accessing properties
      if (model2) {
          currentRotationAngle2 += rotationSpeed2;
          model2.rotation.y = currentRotationAngle2; // Use 'model' here
          model3.rotation.y = -(currentRotationAngle2)+22; // Use 'model' here
        
      }
      currentRotationAngle += rotationSpeed    ; */

  // console.log("model2.userData.link");
  //  if (!disableOrbiting && isTabActive) {
  //    controls.update(); // Update camera controls
  //}
  currentRotationAngle += 0.00017;
  mesh.rotation.y = currentRotationAngle;
  renderer.render(scene, camera);

};



animate();
