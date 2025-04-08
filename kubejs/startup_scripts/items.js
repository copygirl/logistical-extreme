StartupEvents.registry("item", event => {
    event.create("kubejs:kinetic_mechanism")
        .displayName("Kinetic Mechanism")
        .texture("kubejs:item/kinetic_mechanism");
    event.create("kubejs:incomplete_kinetic_mechanism", "create:sequenced_assembly")
        .displayName("Incomplete Kinetic Mechanism")
        .texture("kubejs:item/incomplete_kinetic_mechanism");

    event.create("kubejs:saw_blade")
        .displayName("Saw Blade")
        .texture("kubejs:item/saw_blade");

    event.create("kubejs:drill_head")
        .displayName("Drill Head")
        .texture("kubejs:item/drill_head");
});
