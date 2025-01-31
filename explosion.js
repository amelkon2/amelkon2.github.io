const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const texture = loader.load('path/to/your/image.jpg');
const geometry = new THREE.PlaneGeometry(16, 9, 64, 36);
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

function explode() {
  const positions = geometry.attributes.position;
  const initialPositions = positions.array.slice();
  
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);
    
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.3,
      Math.random() * 0.5
    );
    
    function animate() {
      positions.setXYZ(
        i,
        x + velocity.x,
        y + velocity.y,
        z + velocity.z
      );
      positions.needsUpdate = true;
      
      if (z < 8) {
        requestAnimationFrame(animate);
      }
    }
    
    animate();
  }
}

document.addEventListener('click', explode);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
