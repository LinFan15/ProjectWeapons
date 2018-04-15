function animate_R700(object, controlHeld) {
    var direction = !controlHeld ? 'forwards' : 'backwards';

    if (object.name === "colf_bottom") {
        var animatedObject = animated.find(animatedObject => animatedObject.object.name === object.name);
        var differenceY = !controlHeld ? -0.25 : 0.25;

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
    else if (object.name.toLowerCase().includes("trigger") || object.name === "mag") {
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("trigger"));
        var mag = animated.find(animatedObject => animatedObject.object.name === "mag");

        toAnimate.push(mag);

        var toAnimateTriggerGuard = toAnimate.filter(toAnimateObject => toAnimateObject.object.name.toLowerCase().includes('trigger_guard'));
        toAnimateTriggerGuard.push(mag);

        var toAnimateTriggerAssembly = toAnimate.filter(toAnimateObject => !toAnimateObject.object.name.toLowerCase().includes('trigger_guard') &&
            !toAnimateObject.object.name.toLowerCase().includes('mag'));

        // Animations are divided in phases, correlating with positions the different parts can be in, different motions are executed dependant on the phase
        // Phase 1 is the starting phase, so we can only take things further apart from here
        // The motions for each object for a particular phase are inverted when reversing from the phase that comes after it
        if ((mag.phase === 1 && !controlHeld) || (mag.phase === 2 && controlHeld)) {
            var differenceX = controlHeld ? -1 : 1;

            toAnimate.forEach(function (toAnimateObject) {
                animation.push({
                    object: toAnimateObject.object,
                    oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                    oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceX, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                    newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    time: 0.5, direction: direction
                });
            });

            animationPending = true;
        }
        else if ((mag.phase === 2 && !controlHeld) || (mag.phase === 3 && controlHeld)) {
            var differenceXTriggerGuard = controlHeld ? -1 : 1;

            var differenceXTrigger = controlHeld ? -0.25 : 0.25;
            var differenceZTriggerSchroef = controlHeld ? -0.25 : 0.25;
            var differenceYTriggerHousingSchroef = controlHeld ? 0.25 : -0.25;

            toAnimateTriggerGuard.forEach(function(toAnimateObject) {
                animation.push({
                    object: toAnimateObject.object,
                    oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                    oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceXTriggerGuard, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                    newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    time: 0.5, direction: direction
                });
            });

            // Here we assign a different animation to each object in the toAnimateTriggerAssembly array
            toAnimateTriggerAssembly.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "trigger") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceXTrigger, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "trigger_Schroef") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z + differenceZTriggerSchroef),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "trigger_Housing_Schroef") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYTriggerHousingSchroef, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
        else if ((mag.phase === 3 && !controlHeld) || (mag.phase === 4 && controlHeld)) {
            var differenceZTriggerGuardKlepjeSchroef = controlHeld ? -0.25 : 0.25;
            var differenceXMag = controlHeld ? 0.25 : -0.25;
            var differenceXTriggerGuardLid = controlHeld ? -0.25 : 0.25;

            toAnimateTriggerGuard.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "Trigger_Guard_Klepje_Schroef") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z + differenceZTriggerGuardKlepjeSchroef),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "mag") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceXMag, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "trigger_guard_lid") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x + differenceXTriggerGuardLid, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
    }
    else if (object.name.toLowerCase().includes("barrel") || object.name === "bolt") {
        var toAnimate = animated.filter(animatedObject => animatedObject.object.name.toLowerCase().includes("barrel"));
        var bolt = animated.find(animatedObject => animatedObject.object.name === "bolt");

        toAnimate.push(bolt);

        if ((bolt.phase === 1 && !controlHeld) || (bolt.phase === 2 && controlHeld)) {
            var differenceY = controlHeld ? -5 : 5;

            toAnimate.forEach(function (toAnimateObject) {
                animation.push({
                    object: toAnimateObject.object,
                    oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                    oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceY, toAnimateObject.object.position.z),
                    newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                    time: 0.5, direction: direction
                });
            });

            animationPending = true;
        }
        else if ((bolt.phase === 2 && !controlHeld) || (bolt.phase === 3 && controlHeld)) {
            var differenceYBolt = controlHeld ? 1.2 : -1.2;
            var differenceYBarrelUpper = controlHeld ? -1 : 1;
            var differenceYBarrelBottom = controlHeld ? -0.2 : 0.2;
            var differenceYBarrelRing = controlHeld ? -0.6 : 0.6;

            toAnimate.forEach(function(toAnimateObject) {
                if(toAnimateObject.object.name === "bolt") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYBolt, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "barrel_upper") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYBarrelUpper, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "barrel_bottom") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYBarrelBottom, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
                else if(toAnimateObject.object.name === "barrel_ring") {
                    animation.push({
                        object: toAnimateObject.object,
                        oldPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y, toAnimateObject.object.position.z),
                        oldRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        newPosition: new THREE.Vector3(toAnimateObject.object.position.x, toAnimateObject.object.position.y + differenceYBarrelRing, toAnimateObject.object.position.z),
                        newRotation: new THREE.Euler(toAnimateObject.object.rotation.x, toAnimateObject.object.rotation.y, toAnimateObject.object.rotation.z),
                        time: 0.5, direction: direction
                    });
                }
            });

            animationPending = true;
        }
    }
}