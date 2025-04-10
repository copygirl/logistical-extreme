ServerEvents.recipes(event => {
    // Removes the cobble to other Vanilla stone recipes.
    event.remove({ id: "minecraft:diorite" });
    event.remove({ id: "minecraft:granite" });
    event.remove({ id: "minecraft:andesite" });

    // Remove crafting recipes that can be done in stonecutter.
    event.remove({ type: "minecraft:crafting_shaped", output: /^minecraft:polished_[a-z]+$/ });
    event.remove({ type: "minecraft:crafting_shaped", output: /^quark:polished_[a-z]+$/ });
    event.remove({ type: "minecraft:crafting_shaped", output: /^minecraft:.*_bricks$/ });
    event.remove({ type: "minecraft:crafting_shaped", output: /^quark:.*_bricks$/ });

    // Fix up nether bricks recipes.
    event.remove({ type: "minecraft:crafting_shapeless", output: /_nether_bricks$/ });
    event.shaped("minecraft:nether_bricks", [ "BB", "BB" ], { B: "minecraft:nether_brick" });
    event.shapeless("minecraft:red_nether_bricks", [ "minecraft:nether_bricks", "minecraft:nether_wart_block" ]);
    event.shapeless("quark:blue_nether_bricks"   , [ "minecraft:nether_bricks", "minecraft:warped_wart_block" ]);
    event.recipes.createHaunting("minecraft:warped_wart_block", "minecraft:nether_wart_block");

    // Fix up mud brick recipes by making them stonecutting recipes.
    event.remove({ output: "quark:mud_brick_lattice" });
    event.stonecutting("minecraft:mud_bricks"   , "minecraft:packed_mud");
    event.stonecutting("quark:mud_brick_lattice", "minecraft:packed_mud");
    // Let's also fix up Farmer's Delight recipe while we're at it.
    event.remove({ id: "farmersdelight:packed_mud_from_straw" });
    event.shapeless("minecraft:packed_mud", [ "minecraft:mud", "farmersdelight:straw" ]);

    // Fix some more recipes by using stonecutting.
    event.stonecutting("quark:dirt_bricks", "minecraft:dirt");
    event.stonecutting("quark:netherrack_bricks", "minecraft:netherrack");
});
