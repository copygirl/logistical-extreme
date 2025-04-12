global.yeet([ "viewers", "recipes" ],
    "minecraft:wooden_shovel",
    "minecraft:wooden_pickaxe",
    "minecraft:wooden_axe",
    "minecraft:wooden_hoe",
    "minecraft:wooden_sword", // Keep wooden sword for fun?
);

ServerEvents.recipes(event => {
    const flint   = "minecraft:flint";
    const binding = "farmersdelight:straw"; // TODO: Use tag, allow string?
    const stick   = "minecraft:stick";

    event.shaped("kubejs:flint_axe_head"    , [ "FF", "F " ], { F: flint });
    event.shaped("kubejs:flint_shovel_head" , [  "F",  "F" ], { F: flint });
    event.shaped("kubejs:flint_hoe_head"    , [ "FF"       ], { F: flint });
    event.shaped("kubejs:flint_knife_blade" , [ " F", "F " ], { F: flint });

    event.shapeless("kubejs:flint_axe"          , [ "kubejs:flint_axe_head"    , binding, stick ]);
    event.shapeless("kubejs:flint_shovel"       , [ "kubejs:flint_shovel_head" , binding, stick ]);
    event.shapeless("kubejs:flint_hoe"          , [ "kubejs:flint_hoe_head"    , binding, stick ]);
    event.shapeless("farmersdelight:flint_knife", [ "kubejs:flint_knife_blade" , binding, stick ]);

    event.remove({ id: "farmersdelight:flint_knife" });
});
