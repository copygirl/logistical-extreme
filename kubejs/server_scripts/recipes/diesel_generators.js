ServerEvents.recipes(event => {
    event.remove({ output: "createdieselgenerators:pumpjack_bearing" });
    event.shaped("createdieselgenerators:pumpjack_bearing", [
        "B",
        "Z",
    ], {
        B: "create:mechanical_bearing",
        Z: "create:zinc_block",
    });
});
