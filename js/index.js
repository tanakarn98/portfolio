window.addEventListener("load", init);

function init() {
  // サイズを指定
  const width = window.innerWidth;
  const height = window.innerHeight;

  // レンダラの作成、DOMに追加
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xf3f3f3, 1.0);
  document.body.appendChild(renderer.domElement);

  // シーンの作成、カメラの作成と追加、ライトの作成と追加
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, width / height, 1, 100);
  camera.position.set(0, 1, 5);
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  // OrbitControls の追加
  // const controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.userPan = false;
  // controls.userPanSpeed = 0.0;
  // controls.maxDistance = 5000.0;
  // controls.maxPolarAngle = Math.PI * 0.495;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 1.0;
  // controls.minPolarAngle = 0; // radians
  // controls.maxPolarAngle = Math.PI; // radians
  // controls.minAzimuthAngle = -Infinity; // radians
  // controls.maxAzimuthAngle = Infinity; // radians

  // オブジェクトの読み込み
  const loader = new THREE.GLTFLoader();
  const url = "building.glb";

  loader.load(url, (data) => {
    const glb = data;
    const object = glb.scene;

    scene.add(object);
  });

  // レンダリング
  const animation = () => {
    renderer.render(scene, camera);

    // controls.update();
    requestAnimationFrame(animation);
  };

  animation();
}
