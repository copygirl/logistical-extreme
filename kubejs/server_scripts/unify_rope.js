global.yeet([ "viewers", "recipes", "item_tags", "block_tags" ], "farmersdelight:rope");

ServerEvents.recipes(event => {
    event.remove({ output: "quark:rope" });
    event.remove({ output: "farmersdelight:rope" });
    event.shaped("1x quark:rope", [ "S", "S", "S" ], { S: "minecraft:string" });
    event.shaped("2x quark:rope", [ "S", "S", "S" ], { S: "farmersdelight:straw" });
    event.shaped("farmersdelight:safety_net", [ "RR", "RR" ], { R: "quark:rope" });
});
