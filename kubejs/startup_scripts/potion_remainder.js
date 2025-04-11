// Ensure that when potions (including water bottles) are
// used in a crafting recipe, an empty water bottle remains.
ItemEvents.modification(event => event.modify(/potion$/,
    item => item.craftingRemainder = "minecraft:glass_bottle"));
