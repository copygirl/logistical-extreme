StartupEvents.registry("item", event => {
    event.create("kubejs:kinetic_mechanism").displayName("Kinetic Mechanism");
    event.create("kubejs:incomplete_kinetic_mechanism", "create:sequenced_assembly").displayName("Incomplete Kinetic Mechanism");

    event.create("kubejs:fluid_mechanism").displayName("Fluid Mechanism");
    event.create("kubejs:incomplete_fluid_mechanism", "create:sequenced_assembly").displayName("Incomplete Fluid Mechanism");

    event.create("kubejs:saw_blade").displayName("Saw Blade");
    event.create("kubejs:drill_head").displayName("Drill Head");
});
