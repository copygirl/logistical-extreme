// priority: 100

var what = {
    viewers:    [], // Hides item from recipe viewer.
    recipes:    [], // Removes any recipe involving the item as input or output.
    item_tags:  [], // Removes all item tags from the item.
    block_tags: [], // Removes all block tags from the block.
    fluid_tags: [], // Removes all fluid tags from the fluid.
    loot:       [], // TODO: Not implemented.
};

global.yeet = function() {
    for (const target of arguments[0])
        for (let i = 1; i < arguments.length; i++)
            what[target].push(arguments[i]);
}

ServerEvents.recipes(event => {
    for (const item of what.recipes) {
        event.remove({ input: item });
        event.remove({ output: item });
    }
});

ServerEvents.tags("item", event => {
    for (const item of what.item_tags)
        event.removeAllTagsFrom(item);
    for (const item of what.viewers)
        event.add("c:hidden_from_recipe_viewers", item);
});

ServerEvents.tags("block", event => {
    for (const block of what.block_tags)
        event.removeAllTagsFrom(block);
});

ServerEvents.tags("fluid", event => {
    for (const fluid of what.fluid_tags)
        event.removeAllTagsFrom(fluid);
});
