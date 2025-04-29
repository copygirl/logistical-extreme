// priority: 100

const stripNamespace = global.getDisplayName = function(id) {
    // https://minecraft.wiki/w/Resource_location#Legal_characters
    // Also strips # in case the given string is a tag.
    return id.replace(/^#?[0-9a-z_\-\.]+:/, "");
}

const getDisplayName = global.getDisplayName = function(id) {
    return stripNamespace(id).split("_").map(s => s[0].toUpperCase() + s.slice(1)).join(" ");
}
