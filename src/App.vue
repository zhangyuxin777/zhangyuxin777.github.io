<style scoped>
  @import "css/app.css";
  @import "css/animate.css";
  @import "css/magic.css";
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
//  let THREE = require('three.js')
  export default {
    name: 'app',
    data () {
      return {
        scene: '',
        camera: '',
        renderer: '',
        geometry: '',
        material: '',
        mesh: ''
      }
    },
    computed: {},
    methods: {
//      init () {
//        this.scene = new THREE.Scene()
//        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
//        this.camera.position.z = 1000
//        this.geometry = new THREE.BoxGeometry(200, 200, 200)
//        this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
//        this.mesh = new THREE.Mesh(this.geometry, this.material)
//        this.scene.add(this.mesh)
//        this.renderer = new THREE.WebGLRenderer()
//        this.renderer.setSize(window.innerWidth, window.innerHeight)
//        document.body.append(this.renderer.domElement)
//      },
//      animate () {
//        requestAnimationFrame(this.animate)
//        this.mesh.rotation.x += 0.01
//        this.mesh.rotation.y += 0.02
//        this.renderer.render(this.scene, this.camera)
//      }
    },
    beforeMount () {
    },
    mounted () {
//      this.init()
//      this.animate()
    },
    watch: {}
  }
</script>
