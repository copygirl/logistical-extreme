// Re-add recipes for things that used variants previously,
// since those items are now no longer obtainable by crafting.

ServerEvents.recipes(event => {
    // Minecraft
    event.shaped("minecraft:composter", [ "P P", "PDP", "PPP" ], { P: "#minecraft:planks", D: "#minecraft:dirt" });
    event.shaped("minecraft:chiseled_bookshelf", [ "PPP", "   ", "PPP" ], { P: "#minecraft:planks" });
    event.shaped("minecraft:lectern", [ "PPP", " B ", " P " ], { P: "#minecraft:planks", B: "#forge:bookshelves" });
    event.shaped("minecraft:barrel", [ "P P", "P P", "PPP" ], { P: "#minecraft:planks" });
    event.shaped("minecraft:daylight_detector", [ "GGG", "QQQ", "PPP" ], { G: "#forge:glass/colorless", Q: "minecraft:quartz", P: "#minecraft:planks" });
    event.shaped("minecraft:grindstone", [ "SBS", "P P" ], { S: "minecraft:stick", B: "#forge:stone", P: "#minecraft:planks" });
    event.shaped("minecraft:armor_stand", [ "SSS", " S ", "SBS" ], { S: "minecraft:stick", B: "#forge:stone" });
    event.shapeless("minecraft:bamboo_mosaic", [ "minecraft:bamboo_planks" ]);
    // Create
    event.shaped("create:schematic_table", [ "PPP", " S ", " S " ], { P: "#minecraft:planks", S: "minecraft:smooth_stone" });
    event.shaped("create:turntable", [ "P", "S" ], { P: "#minecraft:planks", S: "create:shaft" });
    for (const color in global.COLORS) event.shaped(`create:${color}_seat`, [ "W", "P" ], { W: `minecraft:${color}_wool`, P: "#minecraft:planks" });
});
