LootJS.modifiers(event => {

    function replace(id, drop) {
        let loot = event.addBlockLootModifier(id);
        loot.removeLoot(Ingredient.all);
        if (drop != null) loot.addLoot(drop);
    }

    for (const { id, drop } of Object.values(global.SAMPLES)) {
        replace(`kubejs:${id}`, drop);
        replace(`kubejs:deepslate_${id}`, drop);
    }

});
