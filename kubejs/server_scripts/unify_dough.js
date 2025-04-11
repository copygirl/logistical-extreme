global.yeet([ "viewers", "recipes", "item_tags" ], "farmersdelight:wheat_dough");

ServerEvents.recipes(event => {

    event.remove({ id: "create:crafting/appliances/dough" });
    let water_bottle = Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT();
    event.shapeless("create:dough", [ "create:wheat_flour", water_bottle ]);

    event.remove({ id: "create:mixing/dough_by_mixing" });
    event.recipes.createMixing("create:dough", [ "create:wheat_flour", Fluid.of("minecraft:water", 250) ]);

    event.remove({ type: "minecraft:crafting_shaped", output: "minecraft:bread" });
    event.remove({ type: "minecraft:crafting_shaped", output: "farmersdelight:pie_crust" });
    event.remove({ type: "minecraft:crafting_shaped", output: "minecraft:cake" });
    event.remove({ id: "minecraft:pumpkin_pie" });

    event.shaped("minecraft:cake", [
        "SSS",
        "EEE",
        "MCM",
    ], {
        S: "minecraft:sugar",
        E: "minecraft:egg",
        M: "#forge:milk",
        C: "farmersdelight:pie_crust",
    });

    event.shaped("minecraft:pumpkin_pie", [
        " E ",
        "PPP",
        "SCS",
    ], {
        E: "minecraft:egg",
        P: "farmersdelight:pumpkin_slice",
        S: "minecraft:sugar",
        C: "farmersdelight:pie_crust",
    });

    // TODO: Revisit after adding "Create: Central Kitchen", remove manual crafting recipes?

});
