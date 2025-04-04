// Yeet Vanilla(-ish) saplings from existance!
global.yeet([ "viewers", "recipes", "item_tags" ],
    /_sapling$/,
    "minecraft:mangrove_propagule",
    "minecraft:azalea",
    "minecraft:flowering_azalea",
);

// This was used to convert between Vanilla and DT saplings.
global.yeet([ "viewers", "recipes" ], "dynamictrees:dirt_bucket");
