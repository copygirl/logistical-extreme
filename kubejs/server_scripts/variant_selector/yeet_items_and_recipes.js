// Hides variants from recipe viewers, and removes all
// recipes they're involved in (both as input, and output).

global.yeet([ "viewers" ],
// FIXME: Once we have recipes figured out, add "recipes" back in.
// global.yeet([ "viewers", "recipes" ],

    // ==== Common ====
    /_slab$/,                  // Includes vertical slab.
    /_stairs$/,
    /_fence$/,
    /_gate$/,
    /:(?!paper).*_wall$/,      // Don't include Quark paper wall.
    /_carpet$/,                // Includes leaf carpet.
    /_pane$/,
    /_trapdoor$/,              // Includes iron, train and framed glass trapdoor.
    /:chiseled_(?!bookshelf)/, // Don't include chiseled bookshelf.
    /_pillar$/,
    /:layered_/,

    // ==== Wooden ====
    /_wood$/,                  // Includes stripped wood.
    /_hyphae$/,                // Includes stripped hyphae.
    // Quark
    /_post$/,                  // Includes stripped post.
    /hollow_\w+(log|stem)/,
    // TODO: Decorative Blocks
    /^(?!create:).+_seat$/,    // Don't include Create seats.
    /_palisade$/,
    /_beam$/,
    /_support$/,

    // Create framed glass
    "create:horizontal_framed_glass",
    "create:vertical_framed_glass",

);
