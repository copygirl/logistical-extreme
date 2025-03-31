ServerEvents.recipes(event => {
    event.remove({ output: "vs_clockwork:flap_bearing" });
    event.shaped("vs_clockwork:flap_bearing", [
        "F",
        "B",
    ], {
        F: "vs_clockwork:flap",
        B: "create:mechanical_bearing",
    });

    event.remove({ output: "vs_clockwork:phys_bearing" });
    event.shaped("vs_clockwork:phys_bearing", [
        "T",
        "W",
        "C",
    ], {
        T: "create:turntable",
        W: "vs_clockwork:wanderlite_matrix",
        C: "create:brass_casing",
    });

    event.remove({ output: "vs_clockwork:propeller_bearing" });
    event.shaped("vs_clockwork:propeller_bearing", [
        "T",
        "B",
        "C",
    ], {
        T: "create:turntable",
        B: "create:mechanical_bearing",
        C: "create:brass_casing",
    });
});
