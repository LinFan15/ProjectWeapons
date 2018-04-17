function animate_COLT1911(object, controlHeld) {
    var direction = !controlHeld ? 'forwards' : 'backwards';

    //gun points to the x axis
    if (object.name === "colt_aim_end") {
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceY = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y - differenceY, object.position.z + differenceZ),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }

    }
    else if (object.name === "colt_aim_begin"){
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceY = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y - differenceY, object.position.z),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name === "colt_bullet_1" || object.name ==="colt_bullet_1_shell"){
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceY = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y - differenceY, object.position.z),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("colt_bullet") && !object.name.toLowerCase().includes("colt_bullet_1")){
        //-z direction
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("colt_bullet"));

        var differenceY = controlHeld ? 1.2 : -1.2;

        toAnimate.forEach(function(toAnimateObject) {
            if(toAnimateObject.object.name !== "bullet_1" || toAnimateObject.object.name !== "bullet_1_shell") {
                animation.push({
                    object: toAnimateObject.object,
                    oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                    oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceY, toAnimateObject.object.position.z),
                    newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    time: 0.5, direction: direction
                });
            }
        });

        animationPending = true;
    }
    else if (object.name === "colt_hammer_shoot_connection"){
        //z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceY = !controlHeld ? -0.25 : 0.25;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y - differenceY, object.position.z),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("colt_hammer_connection") || object.name === "colt_hammer_pin"){
        //y direction
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("colt_hammer_connection"));
        var hammerPin = animated.find(animatedObject => animatedObject.object.name === "colt_hammer_pin");

        toAnimate.push(hammerPin);

        if ((hammerPin.phase === 1 && !controlHeld) || (hammerPin.phase === 2 && controlHeld)) {
            var differenceZHammerPin = controlHeld ? -0.5 : 0.5;
            var differenceZ = controlHeld ? -1 : 1;

            toAnimate.forEach(function (toAnimateObject) {
                if(toAnimateObject.object.name === "colt_hammer_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z + differenceZHammerPin),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else{
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z - differenceZ),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((hammerPin.phase === 2 && !controlHeld) || (hammerPin.phase === 3 && controlHeld)) {
            var differenceZPartInside = controlHeld ? -0.5 : 0.5;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_hammer_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_begin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_part") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_part_inside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z + differenceZPartInside),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((hammerPin.phase === 3 && !controlHeld) || (hammerPin.phase === 4 && controlHeld)) {
            var differenceYBegin = controlHeld ? -0.5 : 0.5;
            var differenceYEnd = controlHeld ? -1 : 1;
            var differenceYEndHolder = controlHeld ? -1 : 1;
            var differenceYendHolderPin = controlHeld ? -1 : 1;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_hammer_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_begin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYBegin, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYEnd, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYEndHolder, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYendHolderPin, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_part") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_part_inside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((hammerPin.phase === 4 && !controlHeld) || (hammerPin.phase === 5 && controlHeld)) {
            var differenceZEndHolder = controlHeld ? -0.75 : 0.75;
            var differenceZendHolderPin = controlHeld ? -0.75 : 0.75;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_hammer_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_begin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z + differenceZEndHolder),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z + differenceZendHolderPin),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_part") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_part_inside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((hammerPin.phase === 5 && !controlHeld) || (hammerPin.phase === 6 && controlHeld)) {
            var differenceZendHolderPin = controlHeld ? -0.25 : 0.25;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_hammer_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_begin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z - differenceZendHolderPin),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder_part") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_connection_end_holder_part_inside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
    }
    else if ((object.name.toLowerCase().includes("colt_hammer_spring") || object.name === "colt_hammer")){
        //-x direction
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("colt_hammer_spring"));
        var hammer = animated.find(animatedObject => animatedObject.object.name === "colt_hammer");

        toAnimate.push(hammer);

        if ((hammer.phase === 1 && !controlHeld) || (hammer.phase === 2 && controlHeld)) {
            var differenceX = controlHeld ? -1 : 1;
            var differenceZ = controlHeld ? -0.5 : 0.5;
            var differenceY = controlHeld ? -0.5 : 0.5;
            toAnimate.forEach(function (toAnimateObject) {
                if (toAnimateObject.object.name === "colt_hammer") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y + differenceY, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_hammer_spring_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z - differenceZ),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_hammer_spring") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });
                animationPending = true;
        }
        else if ((hammer.phase === 2 && !controlHeld) || (hammer.phase === 3 && controlHeld)) {
            var differenceX = controlHeld ? -0.25 : 0.25;
            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_hammer") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_spring") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_hammer_spring_pin") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });
            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("colt_handle_back") || object.name === "colt_handle"){
        //-x direction
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("colt_handle_back"));
        var handle = animated.find(animatedObject => animatedObject.object.name === "colt_handle");

        toAnimate.push(handle);

        if ((handle.phase === 1 && !controlHeld) || (handle.phase === 2 && controlHeld)) {
            var differenceX = controlHeld ? -1 : 1;
            var differenceZ = controlHeld ? -0.5 : 0.5;

            toAnimate.forEach(function (toAnimateObject) {
                if(toAnimateObject.object.name === "colt_handle"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower_screw_upper") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_handle_back_lower_screw_lower" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z - differenceZ),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_handle_back_lower"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_handle_back_upper"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((handle.phase === 2 && !controlHeld) || (handle.phase === 3 && controlHeld)) {
            var differenceX = controlHeld ? -1 : 1;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_handle"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_upper") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower_screw_upper") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower_screw_lower") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((handle.phase === 3 && !controlHeld) || (handle.phase === 4 && controlHeld)) {
            var differenceY = controlHeld ? -0.25 : 0.25;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "colt_handle"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_upper") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceY, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower_screw_upper") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_handle_back_lower_screw_lower") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
    }
    else if (object.name === "colt_handle_hammer_connection"){
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceX = controlHeld ? -0.5 : 0.5;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x - differenceX, object.position.y, object.position.z),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name === "colt_handle_hammer_connection_pin"){
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = controlHeld ? -0.5 : 0.5;

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
    else if (object.name === "colt_handle_padding_l" || object.name === "colt_handle_padding_l_screw_lower" || object.name === "colt_handle_padding_l_screw_upper"){
        //y direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = !controlHeld ? -0.5 : 0.5;

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
    else if (object.name === "colt_handle_padding_r" || object.name === "colt_handle_padding_r_screw_lower" || object.name === "colt_handle_padding_r_screw_upper"){
        //y direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = !controlHeld ? -0.5 : 0.5;

        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z - differenceZ),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name === "colt_magazijn" || object.name === "colt_magazijn_bottom" || object.name === "colt_magazijn_bullet_grabbers" || object.name === "colt_magazijn_entrance" || object.name === "colt_magazijn_spring_ceiling" || object.name === "colt_magazijn_spring") {
        //-z direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceY = !controlHeld ? -3 : 3;
        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y + differenceY, object.position.z),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("colt_savety_switch")){
        //y direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceZ = !controlHeld ? -3 : 3;
        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z - differenceZ),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name === "colt_trekker"){
        //x direction
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceX = !controlHeld ? -0.75 : 0.75;

        // Put the right animation in the animation queue
        if ((animatedObject.phase < animatedObject.maxPhase && !controlHeld) || (animatedObject.phase > 1 && controlHeld)) {
            animation.push({
                object: object,
                oldPosition: new THREE.Vector3(object.position.x, object.position.y, object.position.z),
                oldRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                newPosition: new THREE.Vector3(object.position.x - differenceX, object.position.y, object.position.z),
                newRotation: new THREE.Euler(object.rotation.x, object.rotation.y, object.rotation.z),
                time: 0.5, direction: direction
            });

            // Signal there is a new animation to be processed.
            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("colt_kannon") || object.name === "colt_shoot_pin"){
        //x direction
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("colt_kannon"));
        var handle_r_padding = animated.find(animatedObject => animatedObject.object.name === "colt_shoot_pin");

        toAnimate.push(handle_r_padding);

        if ((handle_r_padding.phase === 1 && !controlHeld) || (handle_r_padding.phase === 2 && controlHeld)) {
            var differenceX = controlHeld ? -5 : 5;

            toAnimate.forEach(function (toAnimateObject) {
                if(toAnimateObject.object.name === "colt_shoot_pin"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_kannon_outside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside" ){
                        animation.push({
                            object: toAnimateObject.object,
                            oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                            oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                            newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                            newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                            time: 0.5, direction: direction
                        });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner_placer" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_pin" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }

            });

            animationPending = true;
        }
        else if ((handle_r_padding.phase === 2 && !controlHeld) || (handle_r_padding.phase === 3 && controlHeld)) {
            var differenceX = controlHeld ? -5 : 5;

            toAnimate.forEach(function (toAnimateObject) {
                if(toAnimateObject.object.name === "colt_shoot_pin"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_kannon_outside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner_placer" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_pin" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }

            });

            animationPending = true;
        }
        else if ((handle_r_padding.phase === 3 && !controlHeld) || (handle_r_padding.phase === 4 && controlHeld)) {
            var differenceX = controlHeld ? -5 : 5;

            toAnimate.forEach(function (toAnimateObject) {
                if(toAnimateObject.object.name === "colt_shoot_pin"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_kannon_outside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner_placer" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_pin" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }

            });

            animationPending = true;
        }
        else if ((handle_r_padding.phase === 4 && !controlHeld) || (handle_r_padding.phase === 5 && controlHeld)) {
            var differenceX = controlHeld ? -2 : 2;

            toAnimate.forEach(function (toAnimateObject) {
                if(toAnimateObject.object.name === "colt_shoot_pin"){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "colt_kannon_outside") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_inner_placer" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if (toAnimateObject.object.name === "colt_kannon_inside_pin" ){
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x - differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }

            });

            animationPending = true;
        }
    }
}