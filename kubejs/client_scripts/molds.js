ClientEvents.highPriorityAssets(event => {

    event.add(`kubejs:models/block/unfired_clay_mold`, {
        parent: "kubejs:block/empty_mold",
        textures: { material: "minecraft:block/clay" },
    });

    for (const [ type, { texture } ] of Object.entries(global.MOLDS))
        event.add(`kubejs:models/block/empty_${type}_mold`, {
            parent: "kubejs:block/empty_mold",
            textures: { material: texture },
        });

    for (const fluid of global.FLUIDS)
        fluid.addMoldModels(event);

});
