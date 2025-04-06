ServerEvents.recipes(event => {

    function add(mod, types, is_shroom) {
        for (const type of types) {
            let stripped = `${mod}:stripped_${type}_${is_shroom ? "stem" : "log"}`;
            let planks   = `${mod}:${type}_planks`;

            // Remove the Vanilla crafting recipe.
            event.remove({ type: "minecraft:crafting_shapeless", output: planks });

            // Add an in-world item application (right-click) recipe.
            event.recipes.createItemApplication([ planks, Item.of(planks, 3) ], [ stripped, `#minecraft:axes` ]);

            // Remove the Create cutting recipe, replace it with our own.
            event.remove({ type: "create:cutting", output: planks });
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
