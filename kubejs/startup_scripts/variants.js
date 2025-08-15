global.VARIANTS = {};

// =========================
// == Variant Definitions ==
// =========================

StartupEvents.postInit(_ => {
    minecraft();
    quark();
    create();
    other();

    // Modify the requirements of Create schematics.
    const SchematicRequirementRegistries = Java.loadClass(
        "com.simibubi.create.api.schematic.requirement.SchematicRequirementRegistries");
    global.forEachVariant((variant, original) =>
        SchematicRequirementRegistries.registerBlockSimple(variant, original));

    // DEBUGGING: Enable this to print the VARIANTS dictionary in a format
    // that can be easily pasted into the "quark-common.toml" config file.
    if (false) {
        let list = [];
        global.forEachVariant((variant, original, type) =>
            list.push(`${type},${original},${variant}`));
        console.log("DEBUG! Variants for 'quark-common.toml':" + JsonIO.toPrettyString(list));
    }
});

function minecraft() {
    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry", "crimson", "warped" ])
        wood("minecraft", type, [ "crimson", "warped" ].includes(type));

    auto("minecraft", [
        "bamboo_planks", "bamboo_mosaic",
        "stone", "cobblestone", "mossy_cobblestone",
        "smooth_stone", "stone_bricks", "mossy_stone_bricks",
        "granite", "polished_granite",
        "diorite", "polished_diorite",
        "andesite", "polished_andesite",
        "cobbled_deepslate", "polished_deepslate", "deepslate_bricks", "deepslate_tiles",
        "bricks", "mud_bricks",
        "sandstone", "smooth_sandstone", "cut_sandstone",
        "red_sandstone", "smooth_red_sandstone", "cut_red_sandstone",
        "prismarine", "prismarine_bricks", "dark_prismarine",
        "nether_bricks", "red_nether_bricks",
        "blackstone", "polished_blackstone", "polished_blackstone_bricks",
        "end_stone_bricks", "purpur_block",
        "quartz_block", "smooth_quartz",
    ]);

    // Nether Bricks are one of the rare stone blocks that has a fence shape.
    variant("minecraft:nether_bricks").add("unique2", "nether_brick_fence");

    for (const waxed of [ "", "waxed_" ])
        for (const stage of [ "", "exposed_", "weathered_", "oxidized_" ])
            variant(`minecraft:${waxed}${stage}cut_copper`).auto();

    variant("minecraft:glass").add("wall", "glass_pane");
    for (const color of global.COLORS) {
        variant(`minecraft:${color}_wool`).add("slab", `${color}_carpet`);
        variant(`minecraft:${color}_stained_glass`).add("wall", `${color}_stained_glass_pane`);
    }

    variant("minecraft:cobbled_deepslate").add("unique3", "chiseled_deepslate");

    variant("minecraft:quartz_block").add("unique2", "quartz_pillar");
    variant("minecraft:purpur_block").add("unique2", "purpur_pillar");

    variant("minecraft:snow_block").add("slab", "snow");
    variant("minecraft:moss_block").add("slab", "moss_carpet");

    variant("minecraft:iron_block").add("unique2", "iron_trapdoor");
}

function quark() {
    variant("minecraft:bamboo_block"         ).add("unique1", "quark:bamboo_post");
    variant("minecraft:stripped_bamboo_block").add("unique1", "quark:stripped_bamboo_post");
    variant("minecraft:nether_bricks").add("unique1", "quark:nether_brick_fence_gate");
    variant("minecraft:mud_bricks")
        .add("unique2", "quark:mud_pillar")
        .add("unique3", "quark:carved_mud_bricks");

    for (const type of [ "dripstone_block", "calcite", "tuff" ])
        variant(`minecraft:${type}`)
            .add("slab"     , `quark:${type}_slab`)
            .add("vertical" , `quark:${type}_vertical_slab`)
            .add("stairs"   , `quark:${type}_stairs`)
            .add("wall"     , `quark:${type}_wall`)

    for (const type of [ "granite", "diorite", "andesite" ])
        variant(`minecraft:polished_${type}`).add("unique2", `quark:${type}_pillar`);

    for (const type of [ "ancient", "azalea", "blossom" ])
        wood("quark", type);

    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry", "azalea", "flowering_azalea" ])
        variant(`minecraft:${type}_leaves`).add("slab", `quark:${type}_leaf_carpet`);

    auto("quark", [
        "cobblestone_bricks", "mossy_cobblestone_bricks",
        "granite_bricks", "diorite_bricks", "andesite_bricks",
        // Disabled in favor of Create's limestone.
        // "limestone", "polished_limestone", "limestone_bricks",
        "jasper", "polished_jasper", "jasper_bricks",
        "shale", "polished_shale", "shale_bricks",
        "myalite", "polished_myalite", "myalite_bricks",
        "permafrost", "permafrost_bricks",
        "polished_calcite", "calcite_bricks",
        "polished_dripstone", "dripstone_bricks",
        "polished_tuff", "tuff_bricks",
        "dirt_bricks",
        "sandstone_bricks", "red_sandstone_bricks", "soul_sandstone_bricks",
        "soul_sandstone", "cut_soul_sandstone", "smooth_soul_sandstone",
        "netherrack_bricks", "blue_nether_bricks", "blackstone_bricks",
        "duskbound_block", "midori_block",
        "iron_plate", "rusty_iron_plate",
        "thatch",
    ]);

    for (const type of [ "jasper", "shale", "myalite", "dripstone", "calcite", "tuff" ])
        variant(`quark:polished_${type}`).add("unique2", `${type}_pillar`);
    variant("quark:midori_block").add("unique2", "midori_pillar");
    variant("quark:iron_plate"  ).add("unique2", "iron_pillar");

    variant("quark:shingles").auto();
    for (const color of global.COLORS)
        variant(`quark:${color}_shingles`).auto();

    variant("quark:framed_glass").add("wall", "framed_glass_pane");
    variant("quark:dirty_glass" ).add("wall", "dirty_glass_pane");
    for (const color of global.COLORS)
        variant(`quark:${color}_framed_glass`).add("wall", `${color}_framed_glass_pane`);
    for (const color of [ "red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black" ])
        variant(`quark:${color}_corundum`).add("wall", `${color}_corundum_pane`);

    for (const type of [ "ancient", "blue_blossom", "lavender_blossom", "orange_blossom", "yellow_blossom", "red_blossom" ])
        variant(`quark:${type}_leaves`).add("slab", `${type}_leaf_carpet`);
    variant("quark:bamboo_mat").add("slab", "bamboo_mat_carpet");
}

function create() {
    for (const waxed of [ "", "waxed_" ])
        for (const stage of [ "", "exposed_", "weathered_", "oxidized_" ]) {
            variant(`create:${waxed}${stage}copper_shingles`).auto();
            variant(`create:${waxed}${stage}copper_tiles`).auto();
        }

    for (const type of [ "granite", "diorite", "andesite", "calcite", "dripstone", "deepslate", "tuff",
                         "asurine", "crimsite", "limestone", "ochrum", "scoria", "scorchia", "veridium" ]) {
        auto("create", [ `cut_${type}`, `polished_cut_${type}`, `cut_${type}_bricks`, `small_${type}_bricks` ]);
        variant(`create:polished_cut_${type}`).add("unique2", `${type}_pillar`).add("unique3", `layered_${type}`);
    }

    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "crimson", "warped", "mangrove", "ornate_iron" ])
        variant(`create:${type}_window`).add("wall", `${type}_window_pane`);

    // For the sake of being able to place any framed glass using a single
    // original block, we'll abuse the variant selector categories a little.
    variant("create:framed_glass")
        .add("slab"    , "horizontal_framed_glass")
        .add("unique3" , "vertical_framed_glass")
        .add("wall"    , "framed_glass_pane")
        .add("unique1" , "horizontal_framed_glass_pane")
        .add("stairs"  , "vertical_framed_glass_pane")
        .add("unique2" , "framed_glass_trapdoor");
    // However, this one isn't included. :p
    variant("create:tiled_glass").add("wall", "tiled_glass_pane");

    variant("create:railway_casing").add("unique2", "train_trapdoor");
}

function other() {
    // == Create: Connected ==
    for (const type of [ "cherry", "bamboo" ])
        variant(`create_connected:${type}_window`).add("wall", `${type}_window_pane`);

    // == Create: Diesel Generators ==
    variant("createdieselgenerators:chip_wood_block").auto();
    variant("createdieselgenerators:asphalt_block").auto();

    // == Every Compat (Wood Good) ==
    for (const type of [ "azalea", "ancient", "blossom" ])
        variant(`everycomp:c/quark/${type}_window`).add("wall", `c/quark/${type}_window_pane`);

    // == Farmer's Delight ==
    variant("farmersdelight:tatami")
        .add("slab", "half_tatami_mat")
        .add("unique3", "full_tatami_mat");
}

// ==================
// == Variant Type ==
// ==================

function Variant(original) {
    if (Block.getBlock(original) == Blocks.AIR) throw new Error(`The block "${original}" does not exist.`);
    this.original = original;
    this.variants = {};
}

Variant.prototype.tryAdd = function(type, variant) {
    if (!variant.includes(":")) variant = `${this.original.split(":")[0]}:${variant}`;
    if (Block.getBlock(variant) == Blocks.AIR) return false;
    this.variants[type] = variant;
    return true;
}

Variant.prototype.add = function(type, variant) {
    if (!this.tryAdd(type, variant))
        throw new Error(`The variant block "${variant}" does not exist.`);
    return this;
}

Variant.prototype.log = function() {
    const result = /:(stripped_)?(.+)_(log|stem)$/.exec(this.original);
    if (!result) throw new Error(`The block "${this.original}" is not a log.`);
    const [ _, stripped, type, log ] = result;
    const wood = (log == "stem") ? "hyphae" : "wood";
                   this.add("unique1", `quark:${stripped ?? ""}${type}_post`);
    if (!stripped) this.add("unique2", `quark:hollow_${type}_${log}`);
                   this.add("unique3", `${stripped ?? ""}${type}_${wood}`);
    return this;
}

Variant.prototype.auto = function() {
    const consider = {
        slab     : { slab: {} },
        vertical : { vertical_slab: { mods: [ "quark", "v_slab_compat" ] } },
        stairs   : { stairs: {} },
        wall     : { fence: {}, wall: {} }, // prefer "wall" over "fence" if both exist
        unique1  : { fence_gate: {} },
        unique2  : { trapdoor: {} },
        unique3  : { chiseled: { prefix: true, mods: [ "quark" ] }, },
    };

    const try_remove = [
        /_block$/,
        /_planks$/,
        /_wool$/,
        /s$/,
    ];

    const [ mod, name ] = this.original.split(":", 2);

    for (const variant_type in consider)
        for (const variant_name in consider[variant_type]) {
            let variant_options = consider[variant_type][variant_name];
            let considerations = variant_options.prefix
                ? [ `${variant_name}_${name}` ]
                : [ `${name}_${variant_name}` ];

            // Consider the first variations of the name where
            // part of the end is removed, such as "_block".
            try_remove.some(regex => {
                let new_name = name.replace(regex, "");
                if (new_name == name) return false;
                considerations.push(variant_options.prefix
                    ? `${variant_name}_${new_name}`
                    : `${new_name}_${variant_name}`);
                return true;
            });

            // Consider alternative mods to find the block from.
            let orig_considerations = considerations.slice();
            for (const alt_mod of variant_options.mods ?? [])
                for (const orig_consideration of orig_considerations)
                    // Vertical Slabs Compat uses "v_slab_compat:<mod>/<name>" format.
                    considerations.push((alt_mod == "v_slab_compat")
                        ? `${alt_mod}:${mod}/${orig_consideration}`
                        : `${alt_mod}:${orig_consideration}`);

            for (const consideration of considerations)
                if (this.tryAdd(variant_type, consideration))
                    break;
        }
}

// ======================
// == Helper Functions ==
// ======================

function variant(original) {
    // Ideally I'd like to write this as the following, but unfortunately, Rhino's implementation
    // of the `??` operator does not short-circuit, so the right side always seems to execute?
    // return global.VARIANTS[original] ?? (global.VARIANTS[original] = new Variant(original));
    const existing = global.VARIANTS[original];
    if (existing) return existing;
    return global.VARIANTS[original] = new Variant(original);
}
function auto(mod, originals) {
    for (const original of originals)
        variant(`${mod}:${original}`).auto();
}
function wood(mod, type, is_shroom) {
    const log  = is_shroom ? "stem"   : "log";
    const wood = is_shroom ? "hyphae" : "wood";
    variant(`${mod}:${type}_${log}`)
        .add("unique1", `quark:${type}_post`)
        .add("unique2", `quark:hollow_${type}_${log}`)
        .add("unique3", `${type}_${wood}`);
    variant(`${mod}:stripped_${type}_${log}`)
        .add("unique1", `quark:stripped_${type}_post`)
        .add("unique3", `stripped_${type}_${wood}`);
    variant(`${mod}:${type}_planks`).auto();
}

// Helper function that calls "func" for each variant.
// The function has the signature (variant, original, type).
global.forEachVariant = function(func) {
    for (const [ original, { variants } ] of Object.entries(global.VARIANTS))
        for (const [ type, variant ] of Object.entries(variants))
            func(variant, original, type);
}
