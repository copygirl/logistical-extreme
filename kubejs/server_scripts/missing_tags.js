// Adds blocks / items to tags they were already supposed to be in.

ServerEvents.tags("block", event => {
    event.add("minecraft:pressure_plates", "quark:obsidian_pressure_plate");
    event.add("forge:mushrooms", "quark:glow_shroom");
});

ServerEvents.tags("item", event => {
    event.add("forge:mushrooms", "quark:glow_shroom");
});
