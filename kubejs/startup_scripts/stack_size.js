const stack = {
    block_full   : 1, // default
    block_large  : 2, // signs, lanterns, painting
    block_medium : 4, // pressure plates, iron bars, small plants
    block_small  : 8, // torches, buttons, chains, ladders, rails, large plants

    item_large  : 4,  // default, leather
    item_medium : 8,  // gems, saplings
    item_small  : 16, // dusts, sticks, arrows, seeds

    mechanical_large  : 2, // large cogwheels
    mechanical_medium : 4, // small cogwheels
    mechanical_small  : 8, // shafts

    component_complex : 2, // precision mechanism
    component_simple  : 4, // propeller, brass hand

    food_snack : 16, // carrot
    food_meal  : 8,  // stews

    raw    : 4,
    ingot  : 4,
    sheet  : 8,
    nugget : 16,

    pile : 4,
    gem  : 8,
    dust : 16,
};

const manual = {
    "create:blaze_cake": 1,
    "create:creative_blaze_cake": 1,
};

// Full block and large items not included,
// they use default stacksize as specified above.
const groups = {
    // Blocks

    block_large: [
        "#minecraft:signs",
        // Lanterns
        "minecraft:lantern",
        "minecraft:soul_lantern",
        "quark:paper_lantern",
        "quark:paper_lantern_sakura",
        // Paintings, frames and similar
        "minecraft:painting",
        "minecraft:item_frame",
        "minecraft:glow_item_frame",
        "quark:glass_item_frame",
        "quark:glowing_glass_item_frame",
        "create:crafting_blueprint",
        "create:placard",
    ],
    block_medium: [
        "#minecraft:pressure_plates", // TODO: Add Quark obsidian and Copycat+ pressure plates to tag.
        "#minecraft:banners",
        "minecraft:flower_pot",
        "quark:iron_grate",
        // Bars
        "minecraft:iron_bars",
        "quark:gold_bars",
        "create:andesite_bars",
        "create:brass_bars",
        "create:copper_bars",
        // Small plants
        "#forge:mushrooms", // TODO: Add Quark glow shroom to tag.
        "#minecraft:small_flowers",
        "minecraft:grass",
        "minecraft:fern",
        "minecraft:dead_bush",
        "minecraft:sugarcane",
        "minecraft:crimson_roots",
        "minecraft:warped_roots",
        "minecraft:nether_sprouts",
        "minecraft:weeping_vines",
        "minecraft:twisting_vines",
        "minecraft:vine",
        "minecraft:big_dripleaf",
        "minecraft:small_dripleaf",
        "quark:chorus_weeds",
        "quark:chorus_twist",
        "minecraft:glow_lichen",
        "minecraft:hanging_roots",
        "quark:glow_shroom_ring",
        "quark:glow_lichen_growth",
        "minecraft:lily_pad",
        "minecraft:seagrass",
        "minecraft:sea_pickle",
        "minecraft:kelp",
        /^minecraft:.*_coral(_fan)?$/,
        "minecraft:sculk_vein",
        // Redstone components
        "minecraft:lever",
        "create:analog_lever",
        "minecraft:repeater",
        "minecraft:comparator",
        "quark:redstone_randomizer",
        "create:redstone_link",
        "create_connected:linked_transmitter",
        "create:pulse_repeater",
        "create:pulse_extender",
        "create:powered_latch",
        "create:powered_toggle_latch",
        "create_connected:sequenced_pulse_generator",
        // Corundum clusters
        "quark:red_corundum_cluster",
        "quark:orange_corundum_cluster",
        "quark:yellow_corundum_cluster",
        "quark:green_corundum_cluster",
        "quark:blue_corundum_cluster",
        "quark:indigo_corundum_cluster",
        "quark:violet_corundum_cluster",
        "quark:white_corundum_cluster",
        "quark:black_corundum_cluster",
    ],
    block_small: [
        "#minecraft:buttons", // TODO: Add Copycat+ button to tag.
        "minecraft:chain",
        "minecraft:tripwire_hook",
        "quark:rope",
        // Torches, rods and similar
        "minecraft:torch",
        "minecraft:soul_torch",
        "minecraft:redstone_torch",
        "#minecraft:candles",
        "minecraft:lightning_rod",
        "minecraft:end_rod",
        "quark:iron_rod",
        // Ladders, rails and similar
        "#minecraft:ladders", // TODO: Add Create and Copycats+ ladders to tag.
        "#minecraft:rails", // TODO: Add Create controller rails to tag.
        // Large plants
        "#minecraft:tall_flowers",
    ],

    // Items

    item_medium: [
        "#forge:gems",
        "#minecraft:saplings",
        "minecraft:flint",
        "minecraft:wheat",
        "minecraft:egg",
        /^quark:egg_parrot_/,
        /_spawn_egg$/, // In case they become obtainable?
        "minecraft:rotten_flesh",
        "minecraft:bone",
        "minecraft:blaze_rod",
        "minecraft:rabbit_hide",
        "minecraft:honeycomb",
        "minecraft:ink_sac",
        "minecraft:glow_ink_sac",
        "minecraft:slime_ball",
        "minecraft:magma_cream",
        "minecraft:book",
        "minecraft:enchanted_book", // They SHOULD be stackable.
        "quark:ancient_tome",
        "minecraft:echo_shard",
        "minecraft:rabbit_foot",
        "quark:crab_shell",
        /_banner_pattern$/,
        "#minecraft:decorated_pot_sherds",
        "minecraft:netherite_upgrade_smithing_template",
        "#minecraft:trim_templates",
        "quark:smithing_template_rune",
        "create:filter",
        "create:attribute_filter",
    ],
    item_small: [
        "#forge:dust", // TODO: Add gunpowder, sugar and blaze powder to tag.
        "#forge:dyes",
        "minecraft:stick",
        "#minecraft:arrows",
        "minecraft:name_tag",
        "minecraft:bone_meal",
        "minecraft:snowball",
        "minecraft:dried_kelp",
        "minecraft:string",
        "minecraft:spider_eye",
        "minecraft:fermented_spider_eye",
        "minecraft:feather",
        "create:sandpaper",
        "create:red_sandpaper",
        "minecraft:ghast_tear",
        // Seeds
        "#minecraft:seeds",
        "minecraft:cocoa_beans",
        "minecraft:torchflower_seeds",
        "minecraft:pitcher_pod",
        "minecraft:nether_wart",
    ],

    // Mechanical

    mechanical_large: [
        "create:large_cogwheel", "copycats:copycat_large_cogwheel",
        "create_connected:crank_wheel",
        "create:wooden_bracket", "create:metal_bracket",
        "create:metal_girder",
        "create:fluid_pipe", "copycats:copycat_fluid_pipe",
        "create:hand_crank",
        "create:andesite_tunnel", "create:brass_tunnel",
        "trackwork:med_suspension_track", "trackwork:med_phys_track",
    ],
    mechanical_medium: [
        "create:cogwheel", "copycats:copycat_cogwheel",
        "create:gantry_shaft",
        "create:belt_connector",
        "create:white_sail", "create:sail_frame",
        "vs_clockwork:wing", "vs_clockwork:flap",
        "create:andesite_funnel", "create:brass_funnel",
        "create:track", // Consider making this small?
        "trackwork:suspension_track", "trackwork:phys_track",
    ],
    mechanical_small: [
        "create:shaft", "copycats:copycat_shaft",
        "create_connected:shear_pin",
        "create:piston_extension_pole",
    ],

    // Components

    component_complex: [
        "create:precision_mechanism",
    ],
    component_simple: [
        "create:propeller",
        "create:whisk",
        "create:brass_hand",
        "create:crafter_slot_cover",
        "create:electron_tube",
    ],

    // Foods

    food_snack: [
        "minecraft:apple",
        "minecraft:melon_slice",
        "minecraft:glistering_melon_slice", // Not food but similar.
        "minecraft:chorus_fruit",
        "quark:ancient_fruit",
        "minecraft:carrot",
        "minecraft:potato",
        "minecraft:baked_potato",
        "minecraft:poisonous_potato",
        "minecraft:beetroot",
        "minecraft:cookie",
        "minecraft:sweet_berries",
    ],
    food_meal: [
        "minecraft:golden_apple",
        "minecraft:enchanted_golden_apple",
        "create:honeyed_apple",
        "minecraft:golden_carrot",
        "minecraft:beef", "minecraft:cooked_beef",
        "minecraft:porkchop", "minecraft:cooked_porkchop",
        "minecraft:mutton", "minecraft:cooked_mutton",
        "minecraft:chicken", "minecraft:cooked_chicken",
        "minecraft:rabbit", "minecraft:cooked_rabbit",
        "quark:crab_leg", "quark:cooked_crab_leg",
        "#minecraft:fishes",
        "minecraft:bread",
        "create:dough",
        "create:bar_of_chocolate",
        "create:chocolate_glazed_berries",
        // Bowls
        "minecraft:bowl",
        "minecraft:mushroom_stew",
        "minecraft:beetroot_stew",
        "minecraft:suspicious_stew",
        // Bottles, potions
        "minecraft:glass_bottle",
        "minecraft:honey_bottle",
        "minecraft:dragon_breath",
        "minecraft:experience_bottle",
        "minecraft:potion",
        "minecraft:splash_potion",
        "minecraft:lingering_potion",
        "create:builders_tea",
    ],

    // Other

    raw    : [ "#forge:raw_materials", "#create:crushed_raw_materials" ],
    ingot  : [ "#forge:ingots" ],
    sheet  : [ "#forge:plates" ],
    nugget : [ "#forge:nuggets" ],

    pile: [
        // TODO: Add dirt and sand piles, etc.
        "minecraft:clay",
        "createdieselgenerators:wood_chip",
    ],
    gem  : [ "#forge:gems" ], // Add Create (polished) rose quartz and Clockwork wanderlite crystal.
    dust : [ "#forge:dust" ], // Add Create wheat flour, cinder flour and powdered obsidian to tag.
};

ItemEvents.modification(event => {
    event.modify(/.*/, item => {
        let id_str = item.id.toString();

        if (manual[id_str] != null)
            { item.maxStackSize = manual[id_str]; return; }

        for (const group in groups)
            for (const match of groups[group])
                if (match instanceof RegExp) {
                    if (match.test(id_str))
                        { item.maxStackSize = stack[group]; return; }
                } else if (match.startsWith("#")) {
                    // FIXME: Tags are not available at this point. Use regex matching?
                    // if (item.hasTag(match.slice(1)))
                    //     { item.maxStackSize = stack[group]; return; }
                } else if (id_str == match)
                    { item.maxStackSize = stack[group]; return; }


        // Default handling never increases stack size.
        let is_block = (item.getBlock != null); // has "getBlock" method
        item.maxStackSize = Math.min(item.maxStackSize,
            is_block ? stack.block_full : stack.item_large);
    });
});
