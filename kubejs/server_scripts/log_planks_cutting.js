ServerEvents.recipes(event => {

    function cuttingBoard(output, input) {
        event.custom({
            "type": "farmersdelight:cutting",
            "tool": { "type": "farmersdelight:tool_action", "action": "axe_strip" },
            "sound": "minecraft:item.axe.strip",
            "result": output.map(item => Item.of(item).toJson()),
            "ingredients": [ Ingredient.of(input) ],
        });
    }

    function add(mod, types, is_shroom) {
        for (const type of types) {
            let log      = `${mod}:${type}_${is_shroom ? "stem" : "log"}`;
            let stripped = `${mod}:stripped_${type}_${is_shroom ? "stem" : "log"}`;
            let planks   = `${mod}:${type}_planks`;

            // Remove the default recipes for stripped logs and planks.
            event.remove({ output: stripped });
            event.remove({ output: planks });

            // Add in-world application (right-click) recipes for chopping logs and stripped logs.
            event.recipes.createItemApplication([ stripped, "farmersdelight:tree_bark" ], [ log, `#minecraft:axes` ]);
            event.recipes.createItemApplication([ planks, Item.of(planks, 3) ], [ stripped, `#minecraft:axes` ]);

            // Re-add Farmer's Delight cutting recipes.
            cuttingBoard([ stripped, "farmersdelight:tree_bark" ], log);
            cuttingBoard([ Item.of(planks, 4) ], stripped);

            // Re-add Create cutting recipes.
            event.recipes.createCutting([ stripped, Item.of("farmersdelight:tree_bark").withChance(0.5) ], log);
            event.recipes.createCutting([               // TODO: Account for maximum stack size?
                Item.of(planks, 4), Item.of(planks, 2), // Looks weird because planks stack up to 4 (by default).
                Item.of("createdieselgenerators:wood_chip", 2),
                Item.of("createdieselgenerators:wood_chip").withChance(0.5),
            ], stripped);
        }
    }

    // Remove base recipes that turn sticks and planks directly into wood chips.
    event.remove({ output: "createdieselgenerators:wood_chip" });

    add("minecraft", [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry" ]);
    add("minecraft", [ "crimson", "warped" ], true);
    add("quark", [ "ancient", "azalea", "blossom" ]);

    // Add recipe for cutting planks into sticks.
    event.recipes.createCutting([
        "4x minecraft:stick",
        Item.of("createdieselgenerators:wood_chip").withChance(0.5),
    ], "#minecraft:planks");

});
