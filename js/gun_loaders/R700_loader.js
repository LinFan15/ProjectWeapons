// Set up mtl loader for materials
function load_R700(resolve) {
    var mtlLoader = new THREE.MTLLoader(manager);
    mtlLoader.setPath('objects/');
    mtlLoader.load('R700.mtl', function(materials) {

        materials.preload();

        // Set up object loader with previously loaded material
        var objLoader = new THREE.OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.setPath('objects/');
        objLoader.load('R700.obj', function (object) {
            scene.add(object);
            object.updateMatrixWorld();

            // Rotate entire object by 90 degrees
            objectGroup = object;
            object.rotation.z = -90 * (Math.PI / 180);

            // Set phase information for every imported childObject for animation
            object.children.forEach(function (childObject) {
                if (childObject.name === "colf") {
                    animated.push({object: childObject, phase: 1, maxPhase: 1});
                }
                else if (childObject.name === "trigger_Housing_Schroef") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "trigger") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "trigger_Housing") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "trigger_Schroef") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "Trigger_Guard_Klepje_Schroef") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "mag") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "trigger_guard") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "trigger_guard_lid") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "bolt") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colf_bottom") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "barrel_ring") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "barrel_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "barrel_bottom") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
            });
            resolve();
        }, onProgress, onError);
    });
}
