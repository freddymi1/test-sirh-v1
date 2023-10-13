## Getting Started

- 1st, clone the github repository:

```bash
git clone https://github.com/freddymi1/test-sirh.git
```

- 2nd, navigate to the folder project:

```bash
cd test-sirh
```

- 3rd, install the module:

```bash
yarn install
```

- 4rd, run the development server:

```bash
yarn dev
```

## MODULES

_prettier_
Use this module to formating the code, to run the prettier, use this commande

```bash
yarn format
```

_eslint-plugin-import_
This module verify the import in component

_eslint-plugin-filenames_ and _eslint-plugin-check-file_
Verify the filename and variable or constant, to use this module, run:

```bash
yarn check-lint
```

## git-hooks Install

Edit the file `.git/config` and add the following lines in the `[core]` section:

```bash
hooksPath = .git-hooks
```

## pre-commit

This hook is called before obtaining the proposed commit log message and making a commit. Exiting with non-zero status from this script causes the git commit to abort.

This hook do multiple things:

- If changes detected in the project :
  - Check if service respect our coding style (eslint, prettier), if not, fail the commit
  - Check if service build correctly (npm run build), if not, fail the commit
