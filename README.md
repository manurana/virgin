# CRA with boosters

- [x] Prettier
- [x] Eslint
- [x] Husky
- [ ] Absolute imports
- [ ] Env vars
- [ ] TS Codegen from API definitions

### We start with

```bash
yarn create react-app virgin --template typescript
```

## Prettier and Eslint

- eslint is for code-quality
- prettier is for formatting

read this for more details : https://prettier.io/docs/en/comparison.html

```bash
yarn add -D prettier eslint-config-prettier
```

- add new `.eslintrc.js` including prettier config (see repo)
- remove eslint config from `package.json`
- create new `.prettierrc.js` with config (see repo)

### Configure VSCode to work with Prettier and Eslint

- Add the
  [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  and [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions.
- Add this to config

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Now we have ensured that any file that we SAVE will be linted and
formatted.

### Existing codebase

We may still need to lint and prettify the existing codebase

These 3 new scripts (`lint`, `lint:fix`, `pretty`) are for running
lint and pretty manually, for the whole codebase. Add them to
`package.json`

> First LINT, then PRETTY

```json
  "scripts": {
    ... existing scripts
    "lint": "eslint ./ --ignore-path .gitignore",
    "lint:fix": "yarn lint -- --fix",
    "pretty": "prettier --write .", // prettier auto ignores .gitignore files
  },
```

## Husky

This ensures that all commits are linted and formatted. This is
in addition to the VSCode config (as a safety net)

> ONLY STAGED files will be checked

```bash
yarn add -D husky lint-staged
npx husky-init && yarn
npx husky add .husky/pre-commit "npx lint-staged"
```

Edit `package.json` to add `lint-staged` stuff. Only STAGED (and filtered) files are passed to the commands

```json
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "eslint --fix",
      "prettier --write --ignore-unknown"
    ]
  },
```

## References

- https://typicode.github.io/husky/#/?id=automatic-recommended
- https://prettier.io/docs/en/install.html#git-hooks
- https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically
- https://github.com/okonet/lint-staged#examples
