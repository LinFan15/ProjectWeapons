var camera, scene, controls, raycaster, renderer, clock;
var objectGroup = {children: []};
var mouse = new THREE.Vector2(), INTERSECTED;
var ctrlHeld = false;
var animation = [], animated = [], animationPending = false;
var weapons = [[]];
var currentWeapon = 1;

var manager = new THREE.LoadingManager();

// Calculate progress
var onProgress = function(xhr) {
    if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
};

// Show errors in dev console.
var onError = function( xhr ) {
    console.error( xhr );
};