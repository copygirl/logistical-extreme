global.SAMPLES = {
    coal       : { drop: "minecraft:coal" },
    copper     : { drop: "minecraft:raw_copper" },
    iron       : { drop: "minecraft:raw_iron" },
    gold       : { drop: "minecraft:raw_gold" },
    lapis      : { drop: "minecraft:lapis_lazuli", name: "Lapis Lazuli" },
    redstone   : { drop: "minecraft:redstone" },
    diamond    : {  },
    emerald    : {  },
    zinc       : { drop: "create:raw_zinc" },
    wanderlite : { drop: "vs_clockwork:wanderlite_crystal" },
};

for (const key in global.SAMPLES) {
    var entry  = global.SAMPLES[key];
    entry.id   = `${key}_ore_sample`
    entry.name = entry.name || `${key[0].toUpperCase()}${key.substring(1)}`;
}

StartupEvents.registry("block", (event) => {
    for (const { id, name } of Object.values(global.SAMPLES)) {
        event.create(id)
            .displayName(`${name} Sample`)
            .stoneSoundType().lightLevel(0.3)
            .hardness(0.2).resistance(2.0)
            .box(4,0,4, 12,4,12).noCollision()
            .waterlogged()
            .tagBlock("mineable/pickaxe")
            .tagBlock("kubejs:sample");
        event.create(`deepslate_${id}`)
            .displayName(`Deepslate ${name} Sample`)
            .stoneSoundType().lightLevel(0.3)
            .hardness(0.2).resistance(2.0)
            .box(4,0,4, 12,4,12).noCollision()
            .waterlogged()
            .tagBlock("mineable/pickaxe")
            .tagBlock("kubejs:sample");
    }
});
