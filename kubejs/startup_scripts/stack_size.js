const stack = {
    block_full   : 1, // default
    block_large  : 2, // signs, lanterns, painting
    block_medium : 4, // planks, iron bars, large plants
    block_small  : 8, // torches, pressure plates, buttons, chains, ladders, rails, small plants
    // NOTE: Planks are one of the few "full size" blocks that stack more.

    item_large  :  4, // default, leather
    item_medium :  8, // saplings, tree seeds
    item_small  : 16, // sticks, arrows, seeds

    mechanical_large  : 2, // large cogwheels
    mechanical_medium : 4, // small cogwheels
    mechanical_small  : 8, // shafts

    component_complex : 2, // precision mechanism
    component_simple  : 4, // propeller, brass hand

    food_snack : 16, // carrot
    food_meal  :  8, // cooked
    food_feast :  4, // stews

    raw    :  4,
    ingot  :  4,
    sheet  :  8,
    nugget : 16,

    pile :  4,
    gem  :  8,
    dust : 16,
};

const manual = {
    // Minecraft
    "minecraft:dragon_egg": 1,
    "minecraft:pink_petals": 16,
    // Create
    "create:blaze_cake": 1,
    "create:creative_blaze_cake": 1,
    "create:andesite_alloy": 8,
};

// Full block and large items not included,
// they use default stacksize as specified above.
const groups = {
    // Blocks

    block_large: [
        /_sign$/,
        "minecraft:lantern",
        "minecraft:soul_lantern",
        "minecraft:painting",
        /[:_]item_frame$/,
        // Quark
        "quark:paper_lantern",
        "quark:paper_lantern_sakura",
        // Create
        "create:crafting_blueprint",
        "create:placard",
    ],
    block_medium: [
        /_planks$/, // 1 log turns into 4 planks.
        /_banners$/,
        "minecraft:flower_pot",
        "minecraft:pointed_dripstone", // 4 crafts into a block.
        "minecraft:iron_bars",
        /_wool$/,
        // Large plants
        "minecraft:sunflower",
        "minecraft:lilac",
        "minecraft:rose_bush",
        "minecraft:peony",
        "minecraft:pitcher_plant",
        // Redstone components
        "minecraft:lever",
        "minecraft:repeater",
        "minecraft:comparator",
        // Quark
        "quark:iron_grate",
        "quark:gold_bars",
        "quark:redstone_randomizer",
        /_corundum_cluster$/,
        "quark:bamboo_mat",
        // Create
        "create:andesite_bars",
        "create:brass_bars",
        "create:copper_bars",
        "create:analog_lever",
        "create:redstone_link",
        "create:pulse_repeater",
        "create:pulse_extender",
        "create:powered_latch",
        "create:powered_toggle_latch",
        "create_connected:linked_transmitter",
        "create_connected:sequenced_pulse_generator",
        // Farmer's Delight
        "farmersdelight:sandy_shrub",
        /^farmersdelight:wild_/,
        /_mushroom_colony$/,
        "farmersdelight:tatami",
        "farmersdelight:canvas_rug",
    ],
    block_small: [
        /_button$/,
        /_pressure_plate$/,
        "minecraft:chain",
        "minecraft:tripwire_hook",
        // Torches, rods and similar
        "minecraft:torch",
        "minecraft:soul_torch",
        "minecraft:redstone_torch",
        /[:_]candle$/,
        "minecraft:lightning_rod",
        "minecraft:end_rod",
        // Ladders, rails and similar
        /[:_]ladder$/,
        /[:_]rail$/,
        // Small plants
        /_mushroom$/,
        "minecraft:dandelion",
        "minecraft:poppy",
        "minecraft:blue_orchid",
        "minecraft:allium",
        "minecraft:azure_bluet",
        /_tulip$/,
        "minecraft:oxeye_daisy",
        "minecraft:cornflower",
        "minecraft:lily_of_the_valley",
        "minecraft:torchflower",
        "minecraft:wither_rose",
        "minecraft:grass",
        "minecraft:fern",
        "minecraft:dead_bush",
        "minecraft:bamboo",
        "minecraft:sugar_cane",
        "minecraft:crimson_roots",
        "minecraft:warped_roots",
        "minecraft:nether_sprouts",
        "minecraft:weeping_vines",
        "minecraft:twisting_vines",
        "minecraft:vine",
        "minecraft:big_dripleaf",
        "minecraft:small_dripleaf",
        "minecraft:glow_lichen",
        "minecraft:hanging_roots",
        "minecraft:lily_pad",
        "minecraft:seagrass",
        "minecraft:sea_pickle",
        "minecraft:kelp",
        /_coral(_fan)?$/,
        "minecraft:sculk_vein",
        // Quark
        "quark:rope",
        "quark:iron_rod",
        "quark:chorus_weeds",
        "quark:chorus_twist",
        "quark:glow_shroom",
        "quark:glow_shroom_ring",
        "quark:glow_lichen_growth",
        // Farmer's Delight
        "farmersdelight:rope", // To be disabled.
        "farmersdelight:sandy_shrub",
    ],

    // Items

    item_medium: [
        /_sapling$/,
        "minecraft:mangrove_propagule",
        "minecraft:bowl",
        "minecraft:flint",
        "minecraft:wheat",
        /_egg$/,
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
        "minecraft:echo_shard",
        "minecraft:rabbit_foot",
        /_banner_pattern$/,
        /_sherd$/,
        /_template$/,
        // Dynamic Trees
        /^dynamictrees:.+_seed$/,
        /^dynamictreesplus:.+_seed$/,
        /^dtquark:.+_seed$/,
        // Quark
        "quark:ancient_tome",
        /^quark:egg_parrot_/,
        "quark:crab_shell",
        // Create
        "create:filter",
        "create:attribute_filter",
        // Farmer's Delight
        "farmersdelight:straw",
        "farmersdelight:canvas",
        "farmersdelight:tree_bark",
    ],
    item_small: [
        /_dye$/,
        /_arrow$/,
        "minecraft:stick",
        "minecraft:name_tag",
        "minecraft:bone_meal",
        "minecraft:snowball",
        "minecraft:dried_kelp",
        "minecraft:string",
        "minecraft:spider_eye",
        "minecraft:fermented_spider_eye",
        "minecraft:feather",
        "minecraft:ghast_tear",
        // Seeds
        /_seeds$/,
        "minecraft:cocoa_beans",
        "minecraft:pitcher_pod",
        "minecraft:nether_wart",
        // Create
        "create:sandpaper",
        "create:red_sandpaper",
        // Farmer's Delight
        "farmersdelight:rice",
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
        /_mechanism$/,
    ],
    component_simple: [
        "create:propeller",
        "create:whisk",
        "create:brass_hand",
        "create:crafter_slot_cover",
        "create:electron_tube",
        "kubejs:saw_blade",
        "kubejs:drill_head",
    ],

    // Foods

    food_snack: [
        "minecraft:apple",
        "minecraft:melon_slice",
        "minecraft:glistering_melon_slice", // Not food but similar.
        "minecraft:chorus_fruit",
        "minecraft:carrot",
        "minecraft:potato",
        "minecraft:poisonous_potato",
        "minecraft:beetroot",
        "minecraft:cookie",
        "minecraft:glow_berries",
        "minecraft:sweet_berries",
        // Quark
        "quark:ancient_fruit",
        // Farmer's Delight
        "farmersdelight:tomato",
        "farmersdelight:onion",
        "farmersdelight:rice_panicle",
        "farmersdelight:rotten_tomato",
        "farmersdelight:pumpkin_slice",
        "farmersdelight:cabbage_leaf",
        "farmersdelight:cake_slice",
        "farmersdelight:apple_pie_slice",
        "farmersdelight:sweet_berry_cheesecake_slice",
        "farmersdelight:chocolate_pie_slice",
        "farmersdelight:sweet_berry_cookie",
        "farmersdelight:honey_cookie",
        "farmersdelight:melon_popsicle",
        "farmersdelight:kelp_roll_slice",
    ],
    food_meal: [
        "minecraft:golden_apple",
        "minecraft:enchanted_golden_apple",
        "minecraft:golden_carrot",
        "minecraft:baked_potato",
        // Should raw meat and fish be in snack category?
        // Feels like having them be "unfinished meals" makes sense.
        "minecraft:beef", "minecraft:cooked_beef",
        "minecraft:porkchop", "minecraft:cooked_porkchop",
        "minecraft:mutton", "minecraft:cooked_mutton",
        "minecraft:chicken", "minecraft:cooked_chicken",
        "minecraft:rabbit", "minecraft:cooked_rabbit",
        "minecraft:cod", "minecraft:cooked_cod",
        "minecraft:salmon", "minecraft:cooked_salmon",
        "minecraft:tropical_fish",
        "minecraft:pufferfish",
        "minecraft:bread",
        // Bottles, potions
        /_bottle$/,
        /[:_]potion$/,
        "minecraft:dragon_breath",
        // Quark
        "quark:crab_leg", "quark:cooked_crab_leg",
        // Create
        "create:honeyed_apple",
        "create:builders_tea",
        "create:dough",
        "create:bar_of_chocolate",
        "create:chocolate_glazed_berries",
        // Farmer's Delight
        "farmersdelight:cabbage", // Cuts into 2 cabbage leaves.
        "farmersdelight:fried_egg",
        "farmersdelight:hot_cocoa",
        "farmersdelight:apple_cider",
        "farmersdelight:melon_juice",
        "farmersdelight:glow_berry_custard",
        "farmersdelight:wheat_dough", // To be disabled.
        "farmersdelight:raw_pasta",
        "farmersdelight:minced_beef", "farmersdelight:beef_patty",
        "farmersdelight:chicken_cuts", "farmersdelight:cooked_chicken_cuts",
        "farmersdelight:bacon", "farmersdelight:cooked_bacon",
        "farmersdelight:cod_slice", "farmersdelight:cooked_cod_slice",
        "farmersdelight:salmon_slice", "farmersdelight:cooked_salmon_slice",
        "farmersdelight:mutton_slice", "farmersdelight:cooked_mutton_slice",
        "farmersdelight:ham", "farmersdelight:smoked_ham",
        "farmersdelight:barbecue_stick",
        /_sandwich$/,
        /[:_]hamburger$/,
        "farmersdelight:mutton_wrap",
        "farmersdelight:dumplings",
        "farmersdelight:stuffed_potato",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:salmon_roll",
        "farmersdelight:cod_roll",
        "farmersdelight:kelp_roll",
        "farmersdelight:dog_food",
        "farmersdelight:horse_feed",
    ],
    food_feast: [
        /_soup$/,
        /_stew$/,
        /_salad$/,
        // Farmer's Delight
        "farmersdelight:tomato_sauce",
        "farmersdelight:pie_crust",
        "farmersdelight:apple_pie",
        "farmersdelight:sweet_berry_cheesecake",
        "farmersdelight:chocolate_pie",
        "farmersdelight:cooked_rice",
        "farmersdelight:bone_broth",
        "farmersdelight:bacon_and_eggs",
        "farmersdelight:pasta_with_meatballs",
        "farmersdelight:pasta_with_mutton_chop",
        "farmersdelight:mushroom_rice",
        "farmersdelight:roasted_mutton_chop",
        "farmersdelight:vegetable_noodles",
        "farmersdelight:steak_and_potatoes",
        "farmersdelight:ratatouille",
        "farmersdelight:squid_ink_pasta",
        "farmersdelight:grilled_salmon",
        "farmersdelight:roast_chicken",
        "farmersdelight:stuffed_pumpkin",
        "farmersdelight:honey_glazed_ham",
        "farmersdelight:shepherds_pie",
    ],

    // Other

    raw    : [ /:raw_[a-z]+$/, /:crushed_raw_/, "minecraft:netherite_scrap" ],
    ingot  : [ /_ingot$/ ],
    sheet  : [ /_sheet$/, /_plate$/ ],
    nugget : [ /_nugget$/ ],

    pile: [
        // TODO: Add dirt and sand piles, etc.
        "minecraft:clay",
        "createdieselgenerators:wood_chip",
    ],
    gem: [
        "minecraft:emerald",
        "minecraft:lapis_lazuli",
        "minecraft:diamond",
        "minecraft:quartz",
        "minecraft:amethyst_shard",
        "minecraft:prismarine_shard",
        "minecraft:prismarine_crystals",
        "minecraft:echo_shard",
        "create:rose_quartz",
        "create:polished_rose_quartz",
        "vs_clockwork:wanderlite_crystal",
    ],
    dust: [
        /_dust$/,
        "minecraft:redstone",
        "minecraft:gunpowder",
        "minecraft:blaze_powder",
        "minecraft:sugar",
        "create:wheat_flour",
        "create:cinder_flour",
        "create:powdered_obsidian",
    ],
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
                } else if (id_str == match)
                    { item.maxStackSize = stack[group]; return; }


        // Default handling never increases stack size.
        let is_block = (item.getBlock != null); // has "getBlock" method
        item.maxStackSize = Math.min(item.maxStackSize,
            is_block ? stack.block_full : stack.item_large);
    });
});
