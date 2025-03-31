// "Cosmetic" recipe changes

ServerEvents.recipes(event => {
    // Mechanical pistons use regular pistons and gearboxes.
    event.shaped("create:mechanical_piston", [
            "P",
            "G",
            "E",
        ], {
            P: "minecraft:piston",
            G: "create:vertical_gearbox",
            E: "create:piston_extension_pole",
        });
    event.shaped("create:sticky_mechanical_piston", [
            "P",
            "G",
            "E",
        ], {
            P: "minecraft:sticky_piston",
            G: "create:vertical_gearbox",
            E: "create:piston_extension_pole",
        });

    // Gantry carriage and mechanical bearing use sticky mechanical piston.
    event.shaped("create:gantry_carriage", [
        "P",
        "C",
    ], {
        P: "create:sticky_mechanical_piston",
        C: "create:cogwheel",
    });
    event.shaped("create:mechanical_bearing", [
        "P",
        "T",
        "B",
    ], {
        P: "create:sticky_mechanical_piston",
        T: "create:turntable",
        B: "create:andesite_casing",
    });

    // Other bearings use mechanical bearing.
    event.shaped("create:windmill_bearing", [
        "P",
        "B",
    ], {
        P: "create:mechanical_bearing",
        B: "#forge:stone",
    });
    event.shaped("create:clockwork_bearing", [
        "P",
        "C",
        "B",
    ], {
        P: "create:mechanical_bearing",
        C: "minecraft:clock",
        B: "create:brass_casing",
    });
});
