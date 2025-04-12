StartupEvents.registry("block", event => {
    event.create("quartz_ore")
        .displayName("Quartz Ore")
        .stoneSoundType()
        .hardness(3.0).resistance(3.0)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");
    event.create("deepslate_quartz_ore")
        .displayName("Deepslate Quartz Ore")
        .stoneSoundType()
        .hardness(4.5).resistance(3.0)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");

    event.create("wanderlite_ore")
        .displayName("Wanderlite Ore")
        .stoneSoundType()
        .hardness(3.0).resistance(3.0)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");
});
