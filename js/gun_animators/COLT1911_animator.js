function animate_COLT1911(object, controlHeld) {
    var direction = !controlHeld ? 'forwards' : 'backwards';

    //gun points to the x axis
    if (object.name === "aim_end") {
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z + differenceZ),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }

    }
    else if (object.name === "aim_begin"){
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z + differenceZ),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name === "bullet_1" || object.name ==="bullet_1_shell"){
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z + differenceZ),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("bullet") && !object.name.toLowerCase().includes("bullet_1")){
        //-z direction
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("bullet"));


    }
    else if (object.name === "hammer_shoot_connection"){
        //z direction
    }
    else if (object.name.toLowerCase().includes("hammer_connection") || object.name === "hammer_pin"){
        //y direction
    }
    else if (object.name.toLowerCase().includes("hammer") && !object.name.toLowerCase().includes("hammer_connection") && object.name !== "hammer_pin" && object.name !== "hammer_shoot_connecction"){
        //-x direction
    }
    else if (object.name.toLowerCase().includes("handle_back")){
        //-x direction
    }
    else if (object.name === "handle_hammer_connection"){
        //-x direction * 0.5
    }
    else if (object.name === "handle_hammer_connection_pin"){
        //-y direction
    }
    else if (object.name.toLowerCase().includes("handle_padding_l")){
        //y direction
    }
    else if (object.name.toLowerCase().includes("handle_padding_r")){
        //-y direction
    }
    else if (object.name.toLowerCase().includes("mag_") || object.name === "pistol_mag") {
        //-z direction
    }
    else if (object.name.toLowerCase().includes("savety_switch")){
        //y direction
    }
    else if (object.name === "pistol_trigger"){
        //x direction
    }
    else if (object.name.toLowerCase().includes("barrel_i") || object.name === "barrel_o" || object.name === "shoot_pin"){
        //x direction
    }
}