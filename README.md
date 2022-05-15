# CRA with boosters

```bash
yarn create react-app virgin --template typescript
```

create new `.eslintrc.js` and remove eslint config from `package.json`

```bash
yarn add -D prettier eslint-config-prettier
```

edit `.eslintrc.js` to add prettier config  
create new `.prettierrc.js` with configs

```bash
yarn add -D husky lint-staged
npx husky-init && yarn
npx husky add .husky/pre-commit "npx lint-staged"
```

edit package.json to add:

- 3 new scripts (`lint`, `lint:fix`, `pretty`)
- `lint-staged` stuff

in VSCode, add the eslint and prettier extensions  
add this to config

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### references

https://typicode.github.io/husky/#/?id=automatic-recommended
https://prettier.io/docs/en/install.html#git-hooks
https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically
