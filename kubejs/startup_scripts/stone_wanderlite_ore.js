StartupEvents.registry("block", event => {
    event.create("wanderlite_ore")
        .displayName("Wanderlite Ore")
        .stoneSoundType()
        .hardness(3.0).resistance(3.0)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");
});
