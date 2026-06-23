// ========== THREE.JS PARTICLE FIELD ==========
(function() {
  const container = document.getElementById('particle-canvas');
  if (!container) return;

  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 1200 : 3000;
  const RADIUS = 5;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 12;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  // Geometry
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const color1 = new THREE.Color('#2563eb');
  const color2 = new THREE.Color('#06b6d4');
  const color3 = new THREE.Color('#ffffff');

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / PARTICLE_COUNT);
    const theta = Math.PI * goldenRatio * i;
    const r = RADIUS * (0.8 + Math.random() * 0.4);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const mix = Math.random();
    let c;
    if (mix < 0.5) {
      c = color1.clone().lerp(color2, mix * 2);
    } else {
      c = color2.clone().lerp(color3, (mix - 0.5) * 2);
    }
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Mouse tracking
  const mouse = { x: 0, y: 0 };
  const targetMouse = { x: 0, y: 0 };

  document.addEventListener('mousemove', (e) => {
    targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  let animId;
  function animate() {
    animId = requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;

    mouse.x += (targetMouse.x - mouse.x) * 0.05;
    mouse.y += (targetMouse.y - mouse.y) * 0.05;

    particles.position.x = mouse.x * 0.5;
    particles.position.y = mouse.y * 0.5;

    renderer.render(scene, camera);
  }
  animate();
})();
