// priority: 20

// Hides variants from recipe viewers, and removes recipes involving them.
global.forEachVariant(variant =>
    global.yeet([ "viewers", "recipes", "item_tags" ], variant));

// Replaces block drops of variant blocks to ensure they always drop
// their original block, by directly modifying their loot table.
// For example, a stair will always drop a full block.
LootJS.modifiers(event =>
    global.forEachVariant((variant, original) => event
        .addBlockLootModifier(variant)
        .removeLoot(Ingredient.all)
        .addLoot(original)));

// Re-add recipes for things that used variants previously,
// since those items are now no longer obtainable by crafting.
ServerEvents.recipes(event => {

    // This DOES NOT work. KubeJS, Whhhyyy?
    // event.replaceInput({ input: "#minecraft:wooden_slabs" },
    //     "#minecraft:wooden_slabs", "#minecraft:planks");

    function shaped(output, shape, lookup) { event.remove({ output: output }); event.shaped(output, shape, lookup); }
    function shapeless(output, input)      { event.remove({ output: output }); event.shapeless(output, input); }

    // Minecraft

    shaped("minecraft:composter"         , [ "P P", "PDP", "PPP" ], { P: "#minecraft:planks", D: "#minecraft:dirt" });
    shaped("minecraft:barrel"            , [ "P P", "P P", "PPP" ], { P: "#minecraft:planks" });
    shaped("minecraft:chiseled_bookshelf", [ "PPP", "   ", "PPP" ], { P: "#minecraft:planks" });
    shaped("minecraft:lectern"           , [ "PPP", " B ", " P " ], { P: "#minecraft:planks", B: "#forge:bookshelves" });
    shaped("minecraft:daylight_detector" , [ "GGG", "QQQ", "PPP" ], { G: "#forge:glass/colorless", Q: "minecraft:quartz", P: "#minecraft:planks" });

    shaped("minecraft:grindstone" , [        "SBS", "P P" ], { S: "minecraft:stick", B: "minecraft:stone", P: "#minecraft:planks" });
    shaped("minecraft:armor_stand", [ "SSS", " S ", "SBS" ], { S: "minecraft:stick", B: "minecraft:smooth_stone" });

    // shapeless("minecraft:bamboo_mosaic", [ "minecraft:bamboo_planks" ]);

    // Quark

    shapeless("quark:glass_item_frame", [ "minecraft:item_frame", "#forge:glass/colorless" ]);
    event.shapeless("quark:glowing_glass_item_frame", [ "minecraft:glow_item_frame", "#forge:glass/colorless" ]);

    // Create

    event.remove({ id: /casing_from_wood/ }); // Only keep the log recipes.
    shaped("create:schematic_table"   , [ "PPP", " S ", " S " ], { P: "#minecraft:planks", S: "minecraft:smooth_stone" });
    shaped("create:turntable"         , [      "P", "A" ], { P: "#minecraft:planks", A: "create:shaft" });
    shaped("create:mechanical_piston" , [ "P", "B", "A" ], { P: "#minecraft:planks", B: "create:andesite_casing", A: "create:shaft" });
    shaped("create:gantry_carriage"   , [ "P", "B", "A" ], { P: "#minecraft:planks", B: "create:andesite_casing", A: "create:cogwheel" });
    shaped("create:windmill_bearing"  , [ "P", "B", "A" ], { P: "#minecraft:planks", B: "#forge:stone"          , A: "create:shaft" });
    shaped("create:mechanical_bearing", [ "P", "B", "A" ], { P: "#minecraft:planks", B: "create:andesite_casing", A: "create:shaft" });
    shaped("create:clockwork_bearing" , [ "P", "B", "A" ], { P: "#minecraft:planks", B: "create:brass_casing"   , A: "create:electron_tube" });
    for (const color of global.COLORS) shaped(`create:${color}_seat`, [ "W", "P" ], { W: `minecraft:${color}_wool`, P: "#minecraft:planks" });

    // Clockwork

    shaped("vs_clockwork:propeller_bearing", [ "P", "B", "A" ], { P: "#minecraft:planks", B: "create:andesite_casing", A: "create:electron_tube" });

    // Create: Diesel Generators

    event.remove({ id: /^createdieselgenerators:crushing\/wood_chip_(slabs|stairs|fences)$/ });

});

ServerEvents.tags("item", event => {
    // Let's make tracks craftable again, as well!
    event.add("create:sleepers", "minecraft:smooth_stone");
});
