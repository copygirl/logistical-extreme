ItemEvents.toolTierRegistry(event =>
    event.add("flint", tier => {
        tier.level = 0;
        tier.uses  = 131;
        tier.speed = 2.0;
        tier.attackDamageBonus = 0.0;
        tier.enchantmentValue  = 0;
        tier.repairIngredient  = "minecraft:flint";
    }));

StartupEvents.registry("block", event =>
    event.create("kubejs:flint_pebble")
        .displayName("Flint Pebble").stoneSoundType()
        .hardness(0).box(5, 0, 5, 11, 3, 11).noCollision());

StartupEvents.registry("item", event => {
    event.create("flint_axe_head"   ).unstackable().displayName("Flint Axe Head");
    event.create("flint_shovel_head").unstackable().displayName("Flint Shovel Head");
    event.create("flint_hoe_head"   ).unstackable().displayName("Flint Hoe Head");

    // Knife blade can be used as a simple knife as well to gather
    // straw, so you can actually craft a regular and other tools.
    event.create("flint_knife_blade").displayName("Flint Knife Blade")
        .maxDamage(21).tag("farmersdelight:straw_harvesters");

    event.create("flint_axe", "axe").displayName("Flint Axe")
        .tier("flint").tag("minecraft:tools").tag("minecraft:axes");
    event.create("flint_shovel", "shovel").displayName("Flint Shovel")
        .tier("flint").tag("minecraft:tools").tag("minecraft:shovels");
    event.create("flint_hoe", "hoe").displayName("Flint Hoe")
        .tier("flint").tag("minecraft:tools").tag("minecraft:hoes");
});
