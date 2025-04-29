function Fluid(name, color, opt) {
    opt = opt || {};

    this.name  = name;
    this.color = color;
    this.molds = opt.molds || [  ];
    this.light = opt.light || 0;

    this.id            = opt.id            || `kubejs:molten_${name}`;
    this.display_name  = opt.display_name  || getDisplayName(this.id);
    this.fluid_texture = opt.fluid_texture || `kubejs:block/molten_${name}_still`;
}

Fluid.prototype.registerFluid = function(event) {
    event.create(this.id).displayName(this.display_name).bucketColor(this.color);
}

Fluid.prototype.registerMolds = function(event) {
    for (const mold of this.molds) {
        let mold_id = `kubejs:${this.name}_${mold}_mold`;
        let mold_display_name = `${getDisplayName(mold)} Mold of ${this.display_name}}`;
        let mold_sound = global.MOLDS[mold].sound;
        event.create(mold_id).displayName(mold_display_name)
            .soundType(mold_sound).lightLevel(this.light).box(5,0,3, 11,4,13)
            .hardness(0.2).resistance(2.0).fullBlock(false).waterlogged();
    }
}

Fluid.prototype.addMoldModels = function(event) {
    for (const mold of this.molds) {
        let model_id = `kubejs:models/block/${this.name}_${mold}_mold`;
        let mold_texture = global.MOLDS[mold].texture;
        event.add(model_id, {
            parent: "kubejs:block/filled_mold",
            textures: { material: mold_texture, fluid: this.fluid_texture },
        });
    }
}

global.FLUIDS = [
    // base metals
    new Fluid("zinc",           0xaebda8, { molds: [ "clay", "steel" ], light:  5 / 15 }),
    new Fluid("copper",         0xe88956, { molds: [ "clay", "steel" ], light:  8 / 15 }),
    new Fluid("gold",           0xffe354, { molds: [ "clay", "steel" ], light:  8 / 15 }),
    new Fluid("iron",           0xffb629, { molds: [ "clay", "steel" ], light: 10 / 15 }),
    // alloyed metals
    new Fluid("andesite_alloy", 0x78837c, { molds: [ "clay", "steel" ], light:  5 / 15 }),
    new Fluid("brass",          0xdaa500, { molds: [ "clay", "steel" ], light:  7 / 15 }),
    new Fluid("netherite",      0x373131, { molds: [         "steel" ], light: 12 / 15 }),
    // additional materials
    new Fluid("redstone",       0xe32008),
    new Fluid("amethyst",       0xa476ee),
    new Fluid("quartz",         0xe7dfd7),
    new Fluid("rose_quartz",    0xf96777, { molds: [ "clay", "steel" ], light:  6 / 15 }),
];

global.MOLDS = {
    clay  : { sound: "stone", texture: "minecraft:block/terracotta" },
    steel : { sound: "metal", texture: "minecraft:block/iron_block" },
};

StartupEvents.registry("fluid", event => {
    for (const fluid of global.FLUIDS)
        fluid.registerFluid(event);
});

StartupEvents.registry("block", event => {
    event.create("kubejs:unfired_clay_mold")
        .displayName("Unfired Clay Mold")
        .soundType("gravel").box(5,0,3, 11,4,13)
        .hardness(0.2).resistance(2.0)
        .fullBlock(false).waterlogged();
    for (const [ mold, { sound } ] of Object.entries(global.MOLDS))
        event.create(`kubejs:empty_${mold}_mold`)
            .displayName(`Empty ${getDisplayName(mold)} Mold`)
            .soundType(sound).box(5,0,3, 11,4,13)
            .hardness(0.2).resistance(2.0)
            .fullBlock(false).waterlogged();
    for (const fluid of global.FLUIDS)
        fluid.registerMolds(event);
});
