global.VARIANTS = {};

StartupEvents.postInit(event => {

    // Minecraft

    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry", "crimson", "warped" ]) {
        addLogs("minecraft", type, [ "crimson", "warped" ].includes(type));
        addAuto(`minecraft:${type}_planks`);
    }

    addAutoMany("minecraft", [
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
    add("minecraft:nether_bricks", {
        unique1: "quark:nether_brick_fence_gate",
        unique2: "minecraft:nether_brick_fence"
    });

    for (const waxed of [ "", "waxed_" ])
        for (const stage of [ "", "exposed_", "weathered_", "oxidized_" ])
            addAuto(`minecraft:${waxed}${stage}cut_copper`);

    add("minecraft:glass", { wall: "minecraft:glass_pane" });
    for (const color of global.COLORS) {
        add(`minecraft:${color}_wool`, { slab: `minecraft:${color}_carpet` });
        add(`minecraft:${color}_stained_glass`, { wall: `minecraft:${color}_stained_glass_pane` });
    }

    add("minecraft:snow_block", { slab: "minecraft:snow" });
    add("minecraft:moss_block", { slab: "minecraft:moss_carpet" });
    add("minecraft:cobbled_deepslate", { unique3: "minecraft:chiseled_deepslate" });
    add("minecraft:iron_block", { unique2: "minecraft:iron_trapdoor" });

    // Quark

    for (const type of [ "ancient", "azalea", "blossom" ]) {
        addLogs("quark", type);
        addAuto(`quark:${type}_planks`);
    }

    add("minecraft:bamboo_block", { unique1: "quark:bamboo_post" });
    add("minecraft:stripped_bamboo_block", { unique1: "quark:stripped_bamboo_post" });

    addAutoMany("quark", [
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

    add("minecraft:mud_bricks", { unique2: "quark:mud_pillar", unique3: "quark:carved_mud_bricks" });
    add("quark:iron_plate", { unique2: "quark:iron_pillar" });
    add("quark:bamboo_mat", { slab: "quark:bamboo_mat_carpet" });

    for (const type of [ "dripstone_block", "calcite", "tuff" ])
        add(`minecraft:${type}`, {
            slab     : `quark:${type}_slab`,
            vertical : `quark:${type}_vertical_slab`,
            stairs   : `quark:${type}_stairs`,
            wall     : `quark:${type}_wall`,
        });

    addAuto("quark:shingles");
    add("quark:framed_glass", { wall: "quark:framed_glass_pane" });
    add("quark:dirty_glass", { wall: "quark:dirty_glass_pane" });
    for (const color of global.COLORS) {
        addAuto(`quark:${color}_shingles`);
        add(`quark:${color}_framed_glass`, { wall: `quark:${color}_framed_glass_pane` });
    }
    for (const color of [ "red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black" ])
        add(`quark:${color}_corundum`, { wall: `quark:${color}_corundum_pane` });

    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "mangrove", "cherry", "azalea", "flowering_azalea" ])
        add(`minecraft:${type}_leaves`, { slab: `quark:${type}_leaf_carpet` });
    for (const type of [ "ancient", "blue_blossom", "lavender_blossom", "orange_blossom", "yellow_blossom", "red_blossom" ])
        add(`quark:${type}_leaves`, { slab: `quark:${type}_leaf_carpet` });

    // Create

    for (const waxed of [ "", "waxed_" ])
        for (const stage of [ "", "exposed_", "weathered_", "oxidized_" ]) {
            addAuto(`create:${waxed}${stage}copper_shingles`);
            addAuto(`create:${waxed}${stage}copper_tiles`);
        }

    for (const type of [ "granite", "diorite", "andesite", "calcite", "dripstone", "deepslate", "tuff",
                         "asurine", "crimsite", "limestone", "ochrum", "scoria", "scorchia", "veridium" ]) {
        addAutoMany("create", [ `cut_${type}`, `polished_cut_${type}`, `cut_${type}_bricks`, `small_${type}_bricks` ]);
        add(`create:polished_cut_${type}`, { unique2: `create:${type}_pillar`, unique2: `create:layered_${type}` });
    }

    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak", "crimson", "warped", "mangrove", "ornate_iron" ])
        add(`create:${type}_window`, { wall: `create:${type}_window_pane` });

    // For the sake of being able to place any framed glass using a single
    // original block, we'll abuse the variant selector categories a little.
    add("create:framed_glass", {
        slab    : "create:horizontal_framed_glass",
        unique3 : "create:vertical_framed_glass",
        wall    : "create:framed_glass_pane",
        unique1 : "create:horizontal_framed_glass_pane",
        stairs  : "create:vertical_framed_glass_pane",
        unique2 : "create:framed_glass_trapdoor",
    });
    // However, this one isn't included. :p
    add("create:tiled_glass", { wall: "create:tiled_glass_pane" });

    // Create: Connected

    for (const type of [ "cherry", "bamboo" ])
        add(`create_connected:${type}_window`, { wall: `create_connected:${type}_window_pane` });

    // Create: Diesel Generators

    addAuto("createdieselgenerators:chip_wood_block");
    addAuto("createdieselgenerators:asphalt_block");



    // Modify the requirements of Create schematics.
    const SchematicRequirementRegistries = Java.loadClass(
        "com.simibubi.create.api.schematic.requirement.SchematicRequirementRegistries");
    global.forEachVariant((variant, original) =>
        SchematicRequirementRegistries.registerBlockSimple(variant, original));



    // DEBUGGING: Enable this to print the VARIANTS dictioary in a format
    // that can be easily pasted into the "quark-common.toml" config file.
    if (false) {
        let list = [];
        global.forEachVariant((variant, original, type) =>
            list.push(`${type},${original},${variant}`));
        console.log("DEBUG! Variants for 'quark-common.toml':" + JsonIO.toPrettyString(list));
    }

});


// Helper function that calls "func" for each variant.
// The function has the signature (variant, original, type).
global.forEachVariant = function(func) {
    for (const original in global.VARIANTS) {
        let variants = global.VARIANTS[original];
        for (const type in variants) {
            let variant = variants[type];
            func(variant, original, type);
        }
    }
}

// Helper function to register some variants.
function add(original, variants) {
    // Make sure the blocks referenced actually exist. Otherwise show an error.
    if (Block.getBlock(original) == Blocks.AIR)
        { console.error(`The block "${original} does not exist.`); return; }
    for (const variant of Object.values(variants))
        if (Block.getBlock(variant) == Blocks.AIR)
            { console.error(`The block "${variant} does not exist.`); return; }

    global.VARIANTS[original] = global.VARIANTS[original] || {};
    Object.assign(global.VARIANTS[original], variants);
}

// Attempts to register the variant, but only if it exists. Returns if successful.
function tryAdd(original, variant_type, variant) {
    if (Block.getBlock(original) == Blocks.AIR)
        { console.error(`The block "${original} does not exist.`); return false; }
    if (Block.getBlock(variant) == Blocks.AIR) return false;

    var variants = global.VARIANTS[original] || {};
    variants[variant_type] = variant;
    global.VARIANTS[original] = variants;
    return true;
}

function addLogs(mod, type, is_shroom) {
    let log  = is_shroom ? "stem"   : "log";
    let wood = is_shroom ? "hyphae" : "wood";
    add(`${mod}:${type}_${log}`, {
        unique1 : `quark:${type}_post`,
        unique2 : `quark:hollow_${type}_${log}`,
        unique3 : `${mod}:${type}_${wood}`,
    });
    add(`${mod}:stripped_${type}_${log}`, {
        unique1 : `quark:stripped_${type}_post`,
        unique3 : `${mod}:stripped_${type}_${wood}`,
    });
}

const consider = {
    slab     : { slab: {} },
    vertical : { vertical_slab: { mods: [ "quark", "v_slab_compat" ] } },
    stairs   : { stairs: {} },
    wall     : { fence: {}, wall: {} }, // prefer "wall" over "fence" if both exist
    unique1  : { fence_gate: {} },
    unique2  : { trapdoor: {}, pillar: { mods: [ "quark" ] } },
    unique3  : { chiseled: { prefix: true, mods: [ "quark" ] }, },
};

const try_remove = [
    /_block$/,
    /_planks$/,
    /_wool$/,
    /s$/,
];

function addAuto(original) {
    if (Block.getBlock(original) == Blocks.AIR)
        { console.error(`Block "${original} not found"`); return; }

    let mod  = original.split(":", 2)[0];
    let name = original.split(":", 2)[1];

    for (const variant_type in consider) {
        // Tries to add the specified variant, assuming it exists.
        for (const variant_name in consider[variant_type]) {
            let variant_options = consider[variant_type][variant_name];
            let considerations = variant_options.prefix
                ? [ `${mod}:${variant_name}_${name}` ]
                : [ `${mod}:${name}_${variant_name}` ];

            // Add
            try_remove.some(regex => {
                let new_name = name.replace(regex, "");
                if (new_name == name) return false;
                considerations.push(variant_options.prefix
                    ? `${mod}:${variant_name}_${new_name}`
                    : `${mod}:${new_name}_${variant_name}`);
            });

            // Consider alternative mods to find the block from.
            let orig_considerations = considerations.slice();
            for (const alt_mod of variant_options.mods || [])
                for (const orig_consideration of orig_considerations) {
                    // Vertical Slabs Compat uses "v_slab_compat:<mod>/<name>" format.
                    let prefix = (alt_mod == "v_slab_compat") ? `v_slab_compat:${mod}/` : `${alt_mod}:`
                    considerations.push(`${prefix}${orig_consideration.split(":", 2)[1]}`);
                }

            for (const consideration of considerations)
                if (tryAdd(original, variant_type, consideration)) break;
        }
    }
}

function addAutoMany(mod, originals) {
    for (const original of originals)
        addAuto(`${mod}:${original}`);
}
