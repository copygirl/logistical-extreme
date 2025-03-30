#!/bin/bash
if [[ $# -eq 0 ]] || [[ $@ == "-h" ]] || [[ $@ == "--help" ]]; then
  echo "usage: ./publish.sh [options] <target>"
  echo "Publishes the packwiz modpack to the specified target using rsync."
  echo "Options are passed to rsync. See 'rsync --help' or 'man rsync' for help."
  echo "WARNING: Files not matching .packwizignore patterns will be deleted from the target!"
  echo "example usage: ./publish.sh user@example.com:/var/www/modpack"
  exit 0
fi

if ! type git     &> /dev/null; then echo "error: git is not available on your system."; exit 1; fi
if ! type rsync   &> /dev/null; then echo "error: rsync is not available on your system."; exit 1; fi
if ! type packwiz &> /dev/null; then echo "error: packwiz is not available on your system."; exit 1; fi
if [[ ! -f "pack.toml" ]]; then echo "error: Could not find 'pack.toml'. Not in a packwiz project directory?"; exit 1; fi

target=${@: -1}     # Final argument passed to the script.
options=${@:1:$#-1} # All except the final argument.

# This updates index.toml and pack.toml with file indexing information, such as
# up-to-date hashes for all included files. This is required publishing the modpack.
packwiz refresh

# Transfer modpack files to target.
# --recursive: Recursively transfer sub-directories such as config/ and mods/.
# --delete:    Deletes files from target that are (no longer) part of the modpack.
#              Files that match .packwizignore patterns won't be deleted.
rsync -r --delete --exclude-from=.packwizignore $options . "$target"

# We don't want the indexing information to be part of version control, so
# we'll just undo the changes that 'packwiz refresh' made to these files.
git restore pack.toml
# Assume index.toml is in .gitignore, so changes to it shouldn't matter.
