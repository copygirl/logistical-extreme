LootJS.modifiers(event => {
    // Fixes full tatami mats so only half of it drops the block.
    event.addBlockLootModifier("farmersdelight:full_tatami_mat")
        .removeLoot(Ingredient.all)
        .customCondition({
            condition: "minecraft:block_state_property",
            block: "farmersdelight:full_tatami_mat",
            properties: { part: "head" },
        })
        .addLoot("farmersdelight:tatami");
});
