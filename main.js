const canvas  = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true);

const crearEscena = function () {
    const escena = new BABYLON.Scene(engine);

    const camara = new BABYLON.ArcRotateCamera("camarita", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0), escena);
    camara.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("Luz", new BABYLON.Vector3(0, 1, 0), escena);
    light.intensity = 0.7;

    const Esfera = new BABYLON.MeshBuilder.CreateSphere("Esfera", {diameter: 5}, escena);
    Esfera.position.y =2;

    return escena;
}

const escena = crearEscena();

engine.runRenderLoop(function () {
    escena.render();
})

window.addEventListener("resize", () => {
    engine.resize();
})