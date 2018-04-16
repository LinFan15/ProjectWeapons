// Set up mtl loader for materials
function load_COLT1911(resolve) {
    var mtlLoader = new THREE.MTLLoader(manager);
    mtlLoader.setPath('objects/COLT1911/');
    mtlLoader.load('COLT1911.mtl', function(materials) {

        materials.preload();

        // Set up object loader with previously loaded material
        var objLoader = new THREE.OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.setPath('objects/COLT1911/');
        objLoader.load('COLT1911.obj', function (object) {
            scene.add(object);
            object.updateMatrixWorld();

            // Rotate entire object by 90 degrees
            objectGroup = object;
            object.rotation.z = 0 * (Math.PI / 180);

            // Set phase information for every imported childObject for animation
            object.children.forEach(function (childObject) {
                if (childObject.name === "aim_begin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "aim_end") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "barrel_inside") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "barrel_inside_inner") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "barrel_inside_inner_placer") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "barrel_inside_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "barrel_outside") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "bullet_1") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "bullet_1_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "bullet_2") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "bullet_2_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "bullet_3") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "bullet_3_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "bullet_4") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "bullet_4_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_connection_begin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_connection_end") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_connection_end_holder") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_connection_end_holder_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_connection_part") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_connection_part_inside") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_shoot_connection") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_spring") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "hammer_spring_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_back_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_back_lower_screw_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_back_lower_screw_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_back_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_hammer_connection") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_hammer_connection_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_padding_l") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_padding_l_screw_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_padding_l_screw_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_padding_r") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_padding_r_scew_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "handle_padding_r_screw_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "pistol_mag") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "mag_bottom") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "mag_bullet_grabbers") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "mag_entrance") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "mag_spring") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "mag_spring_ceiling") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "savety_switch") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "savety_switch_screw") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "shoot_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "pistol_trigger") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
            });
            resolve();
        }, onProgress, onError);
    });
}
