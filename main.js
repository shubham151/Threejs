import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// console.log(THREE)
//Scene
const scene = new THREE.Scene();

//Sizes
const size = {
  width: window.innerWidth,
  height: window.innerHeight
}


//Create a sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83"
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Light
const light = new THREE.PointLight(0xffffff, 100 );
light.position.set(10, 0, 10);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, size.width/ size.height, 0.1,100);
camera.position.z = 10;
scene.add(camera);




//Render

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera)

//Controls

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true

//Resize

window.addEventListener('resize', () => {
  size.width = window.innerWidth,
  size.height = window.innerHeight


  //Update camera

  
  camera.aspect = size.width/ size.height
  camera.updateProjectionMatrix()
  renderer.setSize(size.width, size.height)
  renderer.render(scene, camera)

});

const animate = () => {
  renderer.scene(scene, camera)
  window.requestAnimationFrame(animate)
}

animate()