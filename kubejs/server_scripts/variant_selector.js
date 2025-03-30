// See also: config/quark-common.toml
// experimental.variant_selector.variants
global.yeet([ "viewers" ],
// global.yeet([ "viewers", "recipes" ],

    // ==== Common ====
    /_slab$/,                  // Includes vertical slab.
    /_stairs$/,
    /_fence$/,
    /_gate$/,
    /:(?!paper).*_wall$/,      // Don't include Quark paper wall.
    /_carpet$/,                // Includes leaf carpet.
    /_pane$/,
    /:chiseled_(?!bookshelf)/, // Don't include chiseled bookshelf.

    // ==== Wooden ====
    /_wood$/,     // Includes stripped wood.
    /_hyphae$/,   // Includes stripped hyphae.
    /_trapdoor$/, // Includes Create's train trapdoor.
    // Quark
    /_post$/,     // Includes stripped post.
    /hollow_\w+(log|stem)/,
    // TODO: Decorative Blocks
    /^(?!create:).+_seat$/, // Don't include Create seats.
    /_palisade$/,
    /_beam$/,
    /_support$/,

);
