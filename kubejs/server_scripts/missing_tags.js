// Adds blocks / items to tags they were already supposed to be in.

ServerEvents.tags("block", event => {
    event.add("quark:obsidian_pressure_plate", "#minecraft:pressure_plates");
    event.add("quark:glow_shroom", "#forge:mushrooms");
});

ServerEvents.tags("item", event => {
});
