
init();
animate();

// Initialize variables, load 3D objects and setup scene.
function init() {
    clock = new THREE.Clock();
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // Allows us to rotate the camera around a point in world space.
    controls = new THREE.OrbitControls( camera );
    controls.autoRotate = true;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    scene.background = new THREE.TextureLoader().load("textures/Metal-and-Iron-Background-69.jpg");

    var light = new THREE.AmbientLight( 0xffffff, 4 );
    light.position.set( 1, 1, 1 ).normalize();
    scene.add( light );

    // Set function to show progress of 3d model import in dev console.
    manager.onProgress = function(item, loaded, total) {
        console.log(item, loaded, total);
    };

    var load = new Promise((resolve, reject) => {
        load_R700(resolve);
    });

    load.then(() => {
        objectGroup.x += 1200 * weapons.length;
        // Center the camera on the imported 3d object by getting the right world coordinates from a BoundingBox
        var BBoxCenter = new THREE.Box3().setFromObject(objectGroup).getCenter();
        controls.target.set(BBoxCenter.x, BBoxCenter.y, BBoxCenter.z);
        controls.update();


        weapons.push([objectGroup, 'R600']);
    });

    var load = new Promise((resolve, reject) => {
        load_R700(resolve);
    });

    load.then(() => {
        weapons.push([objectGroup, 'R700']);
        objectGroup.x += 1200 * weapons.length;
    });

    // Setup all sounds
    var soundId = 0;
    var sounds = [];
    sounds.push(new Howl({
        src: ['music/Volatile Reaction.mp3'],
        volume: 1,
        onend:function () {
            soundId = soundId === 4 ? 0 : soundId + 1;
            sounds[soundId].play();
        }
    }));

    sounds.push(new Howl({
        src: ['music/The Complex.mp3'],
        volume: 1,
        onend:function () {
            soundId = soundId === 4 ? 0 : soundId + 1;
            sounds[soundId].play();
        }
    }));

    sounds.push(new Howl({
        src: ['music/Five Armies.mp3'],
        volume: 1,
        onend:function () {
            soundId = soundId === 4 ? 0 : soundId + 1;
            sounds[soundId].play();
        }
    }));

    sounds.push(new Howl({
        src: ['music/Movement Proposition.mp3'],
        volume: 1,
        onend:function () {
            soundId = soundId === 4 ? 0 : soundId + 1;
            sounds[soundId].play();
        }
    }));

    sounds.push(new Howl({
        src: ['music/Failing Defense.mp3'],
        volume: 1,
        onend:function () {
            soundId = soundId === 4 ? 0 : soundId + 1;
            sounds[soundId].play();
        }
    }));

    sounds[soundId].play();

    // Put camera in a better position
    camera.position.z = 5;

    // Set up a raycaster for mouse input
    raycaster = new THREE.Raycaster();

    // Add necessary event listeners
    document.getElementById('switcherBack').onclick = onSwitcherBackClick;
    document.getElementById('switcherForward').onclick = onSwitcherForwardClick;

    document.addEventListener( 'keydown', onDocumentKeyDown, false );
    document.addEventListener( 'keyup', onDocumentKeyUp, false );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false);
    document.addEventListener( 'wheel', onDocumentMouseWheel, false);

    window.addEventListener( 'resize', onWindowResize, false );

}

function onSwitcherBackClick() {
    if(currentWeapon === 0) {
        currentWeapon = weapons.length - 1;
    }
    else {
        currentWeapon--;
    }

    var BBoxCenter = new THREE.Box3().setFromObject(weapons[currentWeapon][0]).getCenter();
    document.getElementById('weaponLabel').innerText = weapons[currentWeapon][1];
    controls.target.set(BBoxCenter.x, BBoxCenter.y, BBoxCenter.z);
    objectGroup = weapons[currentWeapon][0];
    controls.update();
}

function onSwitcherForwardClick() {
    if(currentWeapon + 1 >= weapons.length) {
        currentWeapon = 1;
    }
    else {
        currentWeapon++;
    }

    var BBoxCenter = new THREE.Box3().setFromObject(weapons[currentWeapon][0]).getCenter();
    document.getElementById('weaponLabel').innerText = weapons[currentWeapon][1];
    controls.target.set(BBoxCenter.x, BBoxCenter.y, BBoxCenter.z);
    objectGroup = weapons[currentWeapon][0];
    controls.update();
}

// Resize renderer canvas and correct camera aspect when the browser window is resized
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

// Check whether the control key is being held down
function onDocumentKeyDown( event ) {
    if(event.keyCode === 17) {
        ctrlHeld = true;
    }
}

function onDocumentKeyUp( event ) {
    if(event.keyCode === 17) {
        ctrlHeld = false;
    }
}

// Set correct mouse coordinates in canvas for raycasting
function onDocumentMouseMove( event ) {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onDocumentMouseUp( event ) {
    // If no animation is running and the user clicked on a 3d object, process input
    if(!animationPending && INTERSECTED !== null) {
        event.preventDefault();

        // If user clicked left mouse button, set the necessary animation
        if(event.button === 0) {
            setAnimation(INTERSECTED);
        }
        // If user clicked right mouse button, center camera on clicked 3d object
        else if(event.button === 2) {
            var BBoxCenter = new THREE.Box3().setFromObject(INTERSECTED).getCenter();
            controls.target.set(BBoxCenter.x, BBoxCenter.y, BBoxCenter.z);
            controls.update();
        }
    }
}

// Zoom the camera in or out when user uses the scroll wheel
function onDocumentMouseWheel( event ) {
    if(!animationPending) {
        event.preventDefault();
        if(event.deltaY < 0) {
            camera.zoom = camera.zoom * 1.1;
        } else {
            camera.zoom = camera.zoom * 0.9;
        }
        camera.updateProjectionMatrix()
    }
}

// Set the right animation dependant on the object clicked
function setAnimation(object) {
    // If the control key was held, put parts back together, otherwise take them apart
    var controlHeld = ctrlHeld;
    animate_R700(object, controlHeld);
}

// Execute any queued animations; all animations in the queue will run simultaneously
function animate() {
    requestAnimationFrame(animate);

    // Get frametime so we know how far to move each object this frame
    var delta = clock.getDelta();

    // If any animations are to be processed, do so
    if (animationPending) {
        var allDone = true;
        animation.forEach(function (animationObject) {
            var addToPosition = new THREE.Vector3();

            // Calculate how far to translate the object in each direction this frame.
            addToPosition.x = (animationObject.newPosition.x - animationObject.oldPosition.x) /
                animationObject.time * delta;
            addToPosition.y = (animationObject.newPosition.y - animationObject.oldPosition.y) /
                animationObject.time * delta;
            addToPosition.z = (animationObject.newPosition.z - animationObject.oldPosition.z) /
                animationObject.time * delta;

            // If the amount we were to translate the object would make the object exceed the target position,
            // add the difference between the current position and the target position instead
            if ((addToPosition.x > (animationObject.newPosition.x - animationObject.object.position.x) && addToPosition.x > 0) ||
                (addToPosition.x < (animationObject.newPosition.x - animationObject.object.position.x) && addToPosition.x < 0)) {

                addToPosition.x = animationObject.newPosition.x - animationObject.object.position.x
            }

            if ((addToPosition.y > (animationObject.newPosition.y - animationObject.object.position.y) && addToPosition.y > 0) ||
                (addToPosition.y < (animationObject.newPosition.y - animationObject.object.position.y) && addToPosition.y < 0)) {

                addToPosition.y = animationObject.newPosition.y - animationObject.object.position.y
            }

            if ((addToPosition.z > (animationObject.newPosition.z - animationObject.object.position.z) && addToPosition.z > 0) ||
                (addToPosition.z < (animationObject.newPosition.z - animationObject.object.position.z) && addToPosition.z < 0)) {

                addToPosition.z = animationObject.newPosition.z - animationObject.object.position.z
            }

            // Same thing as above, just with rotations
            var addToRotation = new THREE.Euler();
            addToRotation.x = (animationObject.newRotation.x - animationObject.oldRotation.x) /
                animationObject.time * delta;
            addToRotation.y = (animationObject.newRotation.y - animationObject.oldRotation.y) /
                animationObject.time * delta;
            addToRotation.z = (animationObject.newRotation.z - animationObject.oldRotation.z) /
                animationObject.time * delta;

            if ((addToRotation.x > (animationObject.newRotation.x - animationObject.object.rotation.x) && addToRotation.x > 0) ||
                (addToRotation.x < (animationObject.newRotation.x - animationObject.object.rotation.x) && addToRotation.x < 0)) {

                addToRotation.x = animationObject.newRotation.x - animationObject.object.rotation.x
            }

            if ((addToRotation.y > (animationObject.newRotation.y - animationObject.object.rotation.y) && addToRotation.y > 0) ||
                (addToRotation.y < (animationObject.newRotation.y - animationObject.object.rotation.y) && addToRotation.y < 0)) {

                addToRotation.y = animationObject.newRotation.y - animationObject.object.rotation.y
            }

            if ((addToRotation.z > (animationObject.newRotation.z - animationObject.object.rotation.z) && addToRotation.z > 0) ||
                (addToRotation.z < (animationObject.newRotation.z - animationObject.object.rotation.z) && addToRotation.z < 0)) {

                addToRotation.z = animationObject.newRotation.z - animationObject.object.rotation.z
            }

            // Add the calculated translations and rotations to the current position and rotation of the object.
            animationObject.object.position.add(addToPosition);

            animationObject.object.rotation.x += addToRotation.x;
            animationObject.object.rotation.y += addToRotation.y;
            animationObject.object.rotation.z += addToRotation.z;

            // Check if the object has reached the target position and rotation; if not, set allDone to false,
            // to signal the animation hasn't completed yet.
            if (!animationObject.newPosition.equals(animationObject.object.position) ||
                (animationObject.newRotation.x !== animationObject.object.rotation.x ||
                    animationObject.newRotation.y !== animationObject.object.rotation.y ||
                    animationObject.newRotation.z !== animationObject.object.rotation.z)) {
                allDone = false;
            }
        });

        // If the animation has completed, clean up.
        if (allDone) {
            // Signal there are no more animations to be processed at this time.
            animationPending = false;

            // Update phase information for each object that was animated.
            animation.forEach(function (animationObject) {
                var animatedObject = animated.find(animatedObject => animatedObject.object.name === animationObject.object.name);
                if (animationObject.direction === 'forwards') {
                    if (animatedObject.phase < animatedObject.maxPhase) {
                        animatedObject.phase++;
                    }
                }
                else {
                    if (animatedObject.phase > 1) {
                        animatedObject.phase--;
                    }
                }
            });

            animation = [];
        }
    }

    render()
}

function render() {
    // Get the 3d object the mouse is pointing to and highlight it.
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(objectGroup.children);

    if (intersects.length > 0) {
        document.getElementsByTagName('html')[0].style.cursor = 'pointer';
        if (INTERSECTED !== intersects[0].object) {
            if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
            INTERSECTED = intersects[0].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex(0xff0000);
        }
    } else {
        document.getElementsByTagName('html')[0].style.cursor = 'default';
        if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        INTERSECTED = null;
    }

    renderer.render(scene, camera);
}