ServerEvents.recipes(event => {

    const S = "create:shaft";
    const C = "create:cogwheel";
    const G = "create:gearbox";
    const A = "create:andesite_alloy";
    const P = "create:mechanical_piston";
    const K = "kubejs:kinetic_mechanism";
    const F = "kubejs:fluid_mechanism";

    function shaped(output, shape, lookup) { event.remove({ output: Item.of(output) }); event.shaped(output, shape, lookup); }
    function shapeless(output, input)      { event.remove({ output: Item.of(output) }); event.shapeless(output, input); }


    // ====================
    // == Basic Kinetics ==
    // ====================

    // Reduce the amount of shafts you get by crafting.
    // Reasoning being that there will be more efficient ways to craft andesite alloy.
    shaped("4x create:shaft", [ "A", "A" ], { A: A });
    event.recipes.createCutting("3x create:shaft", A);

    // Increase the number of buttons you get, to craft cogs by hand.
    event.remove({ output: "#minecraft:wooden_buttons" });
    for (const type of [ "oak", "spruce", "birch", "jungle", "acacia", "dark_oak",
                         "mangrove", "cherry", "bamboo", "crimson", "warped" ])
        event.shapeless(`4x minecraft:${type}_button`, `minecraft:${type}_planks`);
    for (const type of [ "ancient", "azalea", "blossom" ])
        event.shapeless(`4x quark:${type}_button`, `quark:${type}_planks`);
    shapeless("4x minecraft:stone_button", [ "minecraft:stone" ]);
    shapeless("4x minecraft:polished_blackstone_button", [ "minecraft:polished_blackstone" ]);

    // Modify manual cogwheel recipes to use buttons (again).
    event.remove({ output: "create:cogwheel" });
    event.remove({ output: "create:large_cogwheel" });
    event.shaped("create:cogwheel"      , [ "BBB", "BSB", "BBB" ], { S: S, B: "#minecraft:wooden_buttons" });
    event.shaped("create:large_cogwheel", [ "BBB", "BCB", "BBB" ], { C: C, B: "#minecraft:wooden_buttons" });
    // TODO: Add custom sequenced assembly recipe for small and large cogwheels.


    // ============================
    // == Andesite Tier Machines ==
    // ============================

    // Kinetic Mechanism, the basis for any machines.
    event.shaped("kubejs:kinetic_mechanism", [ "WCW", "CSC", "WCW" ], { W: "#minecraft:planks", C: C, S: S });

    shaped("create:basin"    , [ "A A", "A A", "AAA" ], { A: A });
    shaped("create:millstone", [ " H ", "ACA", "KGK" ], { H: "minecraft:hopper", C: C, G: G, A: A, K: K });
    shaped("minecraft:hopper", [ "ACA", "AKA", " A " ], { C: "#forge:chests/wooden", A: A, K: K });

    // Custom saw blade and drill head component.
    event.shaped("kubejs:saw_blade" , [ " I ", "ISI", " I " ], { I: "create:iron_sheet", S: S });
    event.shaped("kubejs:drill_head", [ "SA ", "ASI", " II" ], { I: "create:iron_sheet", S: S, A: A });
    shaped("create:mechanical_saw"  , [ "KA ", "GCS", "KA " ], { S: "kubejs:saw_blade", K: K, A: A, G: G, C: C });
    shaped("create:mechanical_drill", [ "KA ", "CSD", "KA " ], { C: "create:andesite_casing", D: "kubejs:drill_head", K: K, A: A, S: S });
    shaped("create:mechanical_press", [ " C ", "KPK", " I " ], { C: "create:andesite_casing", I: "minecraft:iron_block", P: P, K: K });

    shaped("create:rope_pulley", [ " C ", "KRK", " S " ], { C: "create:andesite_casing", S: "create:iron_sheet", R: "quark:rope", K: K });
    shaped("create:portable_storage_interface", [ " K ", "CPO", " K " ], { C: "create:andesite_casing", O: "create:chute", P: P, K: K });

    // Minecarts and rails
    event.remove({ input: "minecraft:iron_ingot", output: /[:_]minecart$/ });
    event.shaped("minecraft:minecart", [ "A A", "AAA", "S S" ], { A: A, S: S });
    event.remove({ output: /[:_]rail$/ });
    event.shaped("8x minecraft:rail", [ "ASA", "ASA", "ASA" ], { S: "minecraft:stick", A: A });
    event.recipes.createDeploying("minecraft:detector_rail" , [ "minecraft:rail"          , "minecraft:stone_pressure_plate" ]);
    event.recipes.createDeploying("minecraft:activator_rail", [ "minecraft:rail"          , "minecraft:redstone" ]); // TODO: Use redstone mechanism?
    event.recipes.createDeploying("minecraft:powered_rail"  , [ "minecraft:activator_rail", "create:golden_sheet" ]);
    event.recipes.createDeploying("create:controller_rail"  , [ "minecraft:powered_rail"  , "create:electron_tube" ]);
    // TODO: Add sequenced assembly recipe for rails?


    // ==========================
    // == Copper Tier Machines ==
    // ==========================

    // Fluid Mechanism, the basis for any machine dealing with fluids.
    event.shaped("kubejs:fluid_mechanism", [
        "CGC",
        "PKP",
        "CBC",
    ], {
        K: "kubejs:kinetic_mechanism",
        C: "minecraft:copper_ingot",
        P: "create:fluid_pipe",
        G: "#forge:glass/colorless",
        B: Item.of("minecraft:potion", '{Potion:"minecraft:water"}').strongNBT(),
    });

    // Fluid pipes
    shaped("create:mechanical_pump" , [ " A ", "PFP", " A " ], { P: "create:fluid_pipe", F: F, A: A });
    shaped("create:smart_fluid_pipe", [ " B ", "PFP", " E " ], { P: "create:fluid_pipe", B: "create:brass_sheet", E: "create:electron_tube", F: F });
    shaped("create:fluid_valve"     , [ " I ", "PFP", " C " ], { P: "create:fluid_pipe", I: "create:iron_sheet", F: F, C: C });

    // Fluid / copper machines
    event.replaceInput({ id: "create:crafting/kinetics/whisk" }, "create:iron_sheet", "create:copper_sheet");
    shaped("create:mechanical_mixer"        , [ " C ", "KPK", " W " ], { C: "create:copper_casing", W: "create:whisk", P: P, K: K });
    shaped("create:spout"                   , [ " C ", "FTF", " R " ], { C: "create:copper_casing", T: "create:fluid_tank", R: "minecraft:dried_kelp", F: F });
    shaped("create:hose_pulley"             , [ " C ", "FRF", " S " ], { C: "create:copper_casing", S: "create:copper_sheet", R: "minecraft:dried_kelp_block", F: F });
    shaped("create:portable_fluid_interface", [ " F ", "CPO", " F " ], { C: "create:copper_casing", O: "create:chute", P: P, F: F });


    // ========================
    // == Gold Tier Machines ==
    // ========================

    // Precision mechanism, the basis for any machine that needs precise timing or movement.
    shaped("create:precision_mechanism", [ "G", "C", "K" ], { C: "minecraft:clock", G: "#forge:glass/colorless", K: K });

    // For deployer's hand, replace brass with gold and include a precision mechanism.
    shaped("create:brass_hand", [ " A ", "SPS", " S " ], { S: "create:brass_sheet", P: "create:precision_mechanism", A: A });
    shaped("create:deployer"  , [ " K ", "CPH", " K " ], { C: "create:andesite_casing", H: "create:brass_hand", P: P, K: K });

});
