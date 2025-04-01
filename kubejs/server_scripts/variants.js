// Hides variants from recipe viewers, and removes all
// recipes they're involved in (both as input, and output).
global.forEachVariant(variant =>
    global.yeet([ "viewers", "recipes" ], variant));

// Replaces block drops of variant blocks to ensure they always drop
// their original block, by directly modifying their loot table.
// For example, a stair will always drop a full block.
LootJS.modifiers(event =>
    global.forEachVariant((variant, original) => event
        .addBlockLootModifier(variant)
        .removeLoot(Ingredient.all)
        .addLoot(original)));
