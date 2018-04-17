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
                if (childObject.name === "colt_aim_begin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_aim_end") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_kannon_inside") {
                    animated.push({object: childObject, phase: 1, maxPhase: 5});
                }
                else if (childObject.name === "colt_kannon_inside_inner") {
                    animated.push({object: childObject, phase: 1, maxPhase: 5});
                }
                else if (childObject.name === "colt_kannon_inside_inner_placer") {
                    animated.push({object: childObject, phase: 1, maxPhase: 5});
                }
                else if (childObject.name === "colt_kannon_inside_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 5});
                }
                else if (childObject.name === "colt_kannon_outside") {
                    animated.push({object: childObject, phase: 1, maxPhase: 5});
                }
                else if (childObject.name === "colt_bullet_1") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_bullet_1_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "colt_bullet_2") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_bullet_2_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_bullet_3") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_bullet_3_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_bullet_4") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_bullet_4_shell") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_hammer") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_hammer_connection_begin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_connection_end") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_connection_end_holder") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_connection_end_holder_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_connection_part") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_connection_part_inside") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 6});
                }
                else if (childObject.name === "colt_hammer_shoot_connection") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_hammer_spring") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_hammer_spring_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_handle") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "colt_handle_back_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "colt_handle_back_lower_screw_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "colt_handle_back_lower_screw_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "colt_handle_back_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 4});
                }
                else if (childObject.name === "colt_handle_hammer_connection") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_hammer_connection_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_padding_l") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_padding_l_screw_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_padding_l_screw_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_padding_r") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_padding_r_scew_upper") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_handle_padding_r_screw_lower") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_magazijn") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_magazijn_bottom") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_magazijn_bullet_grabbers") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_magazijn_entrance") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_magazijn_spring") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_magazijn_spring_ceiling") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_savety_switch") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
                else if (childObject.name === "colt_savety_switch_screw") {
                    animated.push({object: childObject, phase: 1, maxPhase: 3});
                }
                else if (childObject.name === "colt_shoot_pin") {
                    animated.push({object: childObject, phase: 1, maxPhase: 5});
                }
                else if (childObject.name === "colt_trekker") {
                    animated.push({object: childObject, phase: 1, maxPhase: 2});
                }
            });
            resolve();
        }, onProgress, onError);
    });
}
