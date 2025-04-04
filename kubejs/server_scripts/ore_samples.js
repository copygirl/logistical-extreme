LootJS.modifiers(event => {
    for (var { id, drop } of Object.values(global.SAMPLES)) {
        if (drop == null) continue;
        event.addBlockLootModifier(id)
            .removeLoot(Ingredient.all)
            .addLoot(drop);
        event.addBlockLootModifier(`deepslate_${id}`)
            .removeLoot(Ingredient.all)
            .addLoot(drop);
    }
});
