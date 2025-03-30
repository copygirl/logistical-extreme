// See also: config/quark-common.toml
// experimental.variant_selector.variants
global.yeet([ "viewers" ],
// FIXME: Once we have recipes figured out, add "recipes" back in.
// global.yeet([ "viewers", "recipes" ],

    // ==== Common ====
    /_slab$/,                  // Includes vertical slab.
    /_stairs$/,
    /_fence$/,
    /_gate$/,
    /:(?!paper).*_wall$/,      // Don't include Quark paper wall.
    /_carpet$/,                // Includes leaf carpet.
    /_pane$/,
    /:chiseled_(?!bookshelf)/, // Don't include chiseled bookshelf.

    // ==== Wooden ====
    /_wood$/,                  // Includes stripped wood.
    /_hyphae$/,                // Includes stripped hyphae.
    /_trapdoor$/,              // Includes Create's train trapdoor.
    // Quark
    /_post$/,                  // Includes stripped post.
    /hollow_\w+(log|stem)/,
    // TODO: Decorative Blocks
    /^(?!create:).+_seat$/,    // Don't include Create seats.
    /_palisade$/,
    /_beam$/,
    /_support$/,

);

LootJS.modifiers(event => {
    const COLORS = [ 
        "brown", "red", "orange", "yellow", "lime", "green",
        "cyan", "light_blue", "blue", "purple", "magenta", "pink",
        "white", "light_gray", "gray", "black"
    ];

    function replace(original, variants) {
        for (const variant of variants)
            event
                .addBlockLootModifier(variant)
                .removeLoot(Ingredient.all)
                .addLoot(original);
    }

    function replace_planks(mod, type) {
        const planks_prefix = (mod == "quark") ? "planks_" : "";
        replace(`${mod}:${type}_planks`, [
            `${mod}:${type}_${planks_prefix}slab`,
            `quark:${type}_${planks_prefix}vertical_slab`,
            `${mod}:${type}_${planks_prefix}stairs`,
            `${mod}:${type}_fence`,
            `${mod}:${type}_fence_gate`,
            `${mod}:${type}_trapdoor`,
        ]);
    }

    function replace_wood(mod, type) {
        replace(`${mod}:${type}_log`, [ `${mod}:${type}_wood`, `quark:hollow_${type}_log`, `quark:${type}_post` ]);
        replace(`${mod}:stripped_${type}_log`, [ `${mod}:stripped_${type}_wood`, `quark:stripped_${type}_post` ]);
        replace_planks(mod, type);
    }

    function replace_shroom(mod, type) {
        replace(`${mod}:${type}_stem`, [ `${mod}:${type}_hyphae`, `quark:hollow_${type}_stem`, `quark:${type}_post` ]);
        replace(`${mod}:stripped_${type}_stem`, [ `${mod}:stripped_${type}_hyphae`, `quark:stripped_${type}_post` ]);
        replace_planks(mod, type);
    }

    function replace_stone(mod, type, variants) {
        replace(`${mod}:${type}`, variants.map(variant => {
            let variant_mod  = mod;
            let variant_type = type;
            let postfix = `_${variant}`;
            let prefix  = "";

            if (mod != "quark") {
                // Some blocks that are named "bricks" have their variants named "brick_<variant>" instead.
                if (type.endsWith("_bricks"))   variant_type = type.slice(0, -1);
                if (type.endsWith("_tiles"))    variant_type = type.slice(0, -1);
                if (type.endsWith("_shingles")) variant_type = type.slice(0, -1);
                if (type.endsWith("_block"))    variant_type = type.replace("_block", "");
            }

            if (variant == "chiseled") {
                prefix = `${variant}_`;
                postfix = "";
            }
            if (variant == "quark:chiseled") {
                variant_mod = "quark";
                prefix = `chiseled_`;
                postfix = "";
            }

            if (variant == "vertical_slab") {
                if (mod == "minecraft" || mod == "quark") {
                    variant_mod = "quark";
                } else {
                    variant_mod = "v_slab_compat";
                    prefix = `${mod}/${prefix}`;
                }
            }

            return `${variant_mod}:${prefix}${variant_type}${postfix}`;
        }))
    }

    // Minecraft

    replace_wood("minecraft", "oak");
    replace_wood("minecraft", "spruce");
    replace_wood("minecraft", "birch");
    replace_wood("minecraft", "jungle");
    replace_wood("minecraft", "acacia");
    replace_wood("minecraft", "dark_oak");
    replace_wood("minecraft", "mangrove");
    replace_wood("minecraft", "cherry");

    replace(`minecraft:bamboo_block`, [ `quark:bamboo_post` ]);
    replace(`minecraft:stripped_bamboo_block`, [ `quark:stripped_bamboo_post` ]);
    replace_planks("minecraft", "bamboo");

    replace_shroom("minecraft", "crimson");
    replace_shroom("minecraft", "warped");

    replace_stone("minecraft", "stone", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "cobblestone", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "mossy_cobblestone", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "smooth_stone", [ "slab", "vertical_slab" ]);
    replace_stone("minecraft", "stone_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("minecraft", "mossy_stone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "granite", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "polished_granite", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "diorite", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "polished_diorite", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "andesite", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "polished_andesite", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "calcite", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "dripstone", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "tuff", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "cobbled_deepslate", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace("minecraft:cobbled_deepslate", [ "minecraft:chiseled_deepslate" ]);
    replace_stone("minecraft", "polished_deepslate", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "deepslate_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "deepslate_tiles", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "mud_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace("minecraft:mud_bricks", [ "quark:carved_mud_bricks" ]);
    replace_stone("minecraft", "sandstone", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("minecraft", "smooth_sandstone", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "cut_sandstone", [ "slab", "vertical_slab" ]);
    replace_stone("minecraft", "red_sandstone", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("minecraft", "smooth_red_sandstone", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "cut_red_sandstone", [ "slab", "vertical_slab" ]);
    replace_stone("minecraft", "prismarine", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "prismarine_bricks", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "dark_prismarine", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "nether_bricks", [ "slab", "vertical_slab", "stairs", "fence", "fence_gate", "chiseled" ]);
    replace_stone("minecraft", "red_nether_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "blackstone", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "polished_blackstone", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("minecraft", "polished_blackstone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "endstone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("minecraft", "purpur_block", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("minecraft", "quartz_block", [ "slab", "vertical_slab", "stairs", "chiseled" ]);
    replace_stone("minecraft", "smooth_quartz", [ "slab", "vertical_slab", "stairs" ]);

    for (const waxed of [ "", "waxed_" ])
        for (const stage of [ "", "exposed_", "weathered_", "oxidized_" ])
            replace_stone("minecraft", `${waxed}${stage}cut_copper`, [ "slab", "vertical_slab", "stairs" ]);

    replace("minecraft:moss_block", [ "minecraft:moss_carpet" ]);
    replace("minecraft:iron_block", [ "minecraft:iron_trapdoor" ]);

    for (const color of COLORS)
        replace(`minecraft:${color}_wool`, [ `minecraft:${color}_carpet` ]);

    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak",
                            "mangrove", "cherry", "azalea", "flowering_azalea" ])
        replace(`minecraft:${type}_leaves`, [ `quark:${type}_leaf_carpet` ]);

    // Quark

    replace_wood("quark", "ancient");
    replace_wood("quark", "azalea");
    replace_wood("quark", "blossom");

    replace_stone("quark", "cobblestone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "mossy_cobblestone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "granite_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("quark", "diorite_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("quark", "andesite_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    for (const type of [ "limestone", "jasper", "shale", "myalite" ]) {
        replace_stone("quark", type, [ "slab", "vertical_slab", "stairs", "wall" ]);
        replace_stone("quark", `polished_${type}`, [ "slab", "vertical_slab", "stairs" ]);
        replace_stone("quark", `${type}_bricks`, [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    }
    replace_stone("quark", "permafrost", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "permafrost_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "polished_calcite", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "calcite_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("quark", "polished_dripstone", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "dripstone_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("quark", "polished_tuff", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "tuff_bricks", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("quark", "dirt_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "sandstone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "red_sandstone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "soul_sandstone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "soul_sandstone", [ "slab", "vertical_slab", "stairs", "wall", "chiseled" ]);
    replace_stone("quark", "cut_soul_sandstone", [ "slab", "vertical_slab" ]);
    replace_stone("quark", "smooth_soul_sandstone", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "netherrack_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "blue_nether_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "blackstone_bricks", [ "slab", "vertical_slab", "stairs", "wall" ]);
    replace_stone("quark", "duskbound_block", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "midori_block", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "iron_plate", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "rusty_iron_plate", [ "slab", "vertical_slab", "stairs" ]);
    replace("quark:bamboo_mat", [ "quark:bamboo_mat_carpet" ]);
    replace_stone("quark", "thatch", [ "slab", "vertical_slab", "stairs" ]);
    replace_stone("quark", "shingles", [ "slab", "vertical_slab", "stairs" ]);
    for (const color of COLORS) replace_stone("quark", `${color}_shingles`, [ "slab", "vertical_slab", "stairs" ]);
    replace("minecraft:ancient_leaves", [ "quark:ancient_leaf_carpet" ]);
    for (const type of [ "blue", "lavender", "orange", "yellow", "red" ]) replace(`minecraft:${type}_blossom_leaves`, [ `quark:${type}_blossom_leaf_carpet` ]);

    // Create

    for (const waxed of [ "", "waxed_" ])
        for (const stage of [ "", "exposed_", "weathered_", "oxidized_" ])
            for (const type of [ "shingles", "tiles" ])
                replace_stone("create", `${waxed}${stage}copper_${type}`, [ "slab", "vertical_slab", "stairs" ]);
    replace("create:framed_glass", [ "create:framed_glass_trapdoor" ]);
    for (const stone of [ "granite", "diorite", "andesite", "calcite", "dripstone", "deepslate", "tuff",
                            "asurine", "crimsite", "limestone", "ochrum", "scoria", "scorchia", "veridium" ])
        for (const type of [ "cut_$", "polished_cut_$", "cut_$_bricks", "small_$_bricks" ])
            replace_stone("create", type.replace("$", stone), [ "slab", "vertical_slab", "stairs", "wall" ]);

    // Create: Diesel Generators

    replace("createdieselgenerators:chip_wood_block", [ "createdieselgenerators:chip_wood_slab", "createdieselgenerators:chip_wood_stairs" ]);
    replace("createdieselgenerators:asphalt_block", [ "createdieselgenerators:asphalt_slab", "createdieselgenerators:asphalt_stairs" ]);
});
