ClientEvents.highPriorityAssets(event => {

    const textures = {
        coal       : { stone: "minecraft:block/coal_ore"    , deepslate: "minecraft:block/deepslate_coal_ore" },
        copper     : { stone: "minecraft:block/copper_ore"  , deepslate: "minecraft:block/deepslate_copper_ore" },
        iron       : { stone: "minecraft:block/iron_ore"    , deepslate: "minecraft:block/deepslate_iron_ore" },
        gold       : { stone: "minecraft:block/gold_ore"    , deepslate: "minecraft:block/deepslate_gold_ore" },
        lapis      : { stone: "minecraft:block/lapis_ore"   , deepslate: "minecraft:block/deepslate_lapis_ore" },
        redstone   : { stone: "minecraft:block/redstone_ore", deepslate: "minecraft:block/deepslate_redstone_ore" },
        diamond    : { stone: "minecraft:block/diamond_ore" , deepslate: "minecraft:block/deepslate_diamond_ore" },
        emerald    : { stone: "minecraft:block/emerald_ore" , deepslate: "minecraft:block/deepslate_emerald_ore" },
        zinc       : { stone: "create:block/zinc_ore"       , deepslate: "create:block/deepslate_zinc_ore" },
        wanderlite : { stone: "kubejs:block/wanderlite_ore" , deepslate: "vs_clockwork:block/deepslate_wanderlite_ore" },
        quartz     : { stone: "kubejs:block/quartz_ore"     , deepslate: "kubejs:block/deepslate_quartz_ore" },
    };

    for (const [ type, { stone, deepslate } ] of Object.entries(textures)) {
        event.add(`kubejs:models/block/${type}_ore_sample`, {
            parent: "kubejs:block/ore_sample",
            textures: { particle: "block/stone", ore: stone },
        });
        event.add(`kubejs:models/block/deepslate_${type}_ore_sample`, {
            parent: "kubejs:block/deepslate_ore_sample",
            textures: { particle: "block/deepslate", ore: deepslate },
        });
    }

});
