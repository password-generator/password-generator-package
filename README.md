[![Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/password-generator/password-generator-package)

[![NPM Version](https://img.shields.io/npm/v/@password-generator/password-generator-package.svg?style=flat-square)](https://www.npmjs.com/package/@password-generator/password-generator-package) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/@password-generator/password-generator-package.svg?style=flat-square)](https://npmjs.org/package/@password-generator/password-generator-package)

[![License](https://img.shields.io/github/license/password-generator/password-generator-package?style=flat-square)](LICENSE.md) [![Last Commit](https://img.shields.io/github/last-commit/password-generator/password-generator-package?style=flat-square)](https://github.com/password-generator/password-generator-package/commits/) ![Language Most Used](https://img.shields.io/github/languages/top/password-generator/password-generator-package?style=flat-square) [![Implementations](https://img.shields.io/badge/%F0%9F%92%A1-implementations-8C8E93.svg?style=flat-square)](https://github.com/password-generator/password-generator-package/issues) ![Repository Size](https://img.shields.io/github/repo-size/password-generator/password-generator-package?style=flat-square)

[![Forks](https://img.shields.io/github/forks/password-generator/password-generator-package?style=social)](https://github.com/password-generator/password-generator-package/network/members) [![Stars](https://img.shields.io/github/stars/password-generator/password-generator-package?style=social)](https://github.com/password-generator/password-generator-package/stargazers) [![Watches](https://img.shields.io/github/watchers/password-generator/password-generator-package?style=social)](https://github.com/password-generator/password-generator-package/watchers)

<h1 id="title" align="center">Welcome to password-generator-package 👋</h1>

<h4 align="center"> 🚧 password-generator-package in production... 🚧</h4>

> Package with the algorithm to generate passwords

### 🔖 Table Of Contents

- 📃 [About](#about)
- 🤔 [How To Use](#how-to-use)
- 🚀 [Technologies](#technologies)
- 🌱 [Minimal Requirements](#minimal-requirements)
- 🎇 [Features](#features)
- 💡 [How To Contribute](#how-to-contribute)
- 🤗 [Contributors](#contributors)
- 👤 [Author](#author)
- 🔏 [License](#license)

---

<h2 id="about">📃 About</h2>

This package contains the password generation algorithm, it was created for code reuse and easy maintenance!

[Back To The Top](#title)

---

<h2 id="how-to-use">🤔 How To Use</h2>

#### 💻 Desktop

Install package with you package-manager
```sh
yarn add https://github.com/password-generator/password-generator-package
```

Import and execute
```typescript
import generatePassword from '@password-generator/password-generator-package';

const password = generatePassword({
  passwordLength: 16,
  initialText: 'blabla'
  cases: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  }
});

console.log(password);
```

[Back To The Top](#title)

---

<h2 id="technologies">🚀 Technologies</h2>

- Typescript
- Node

[Back To The Top](#title)

---

<h2 id="minimal-requirements">🌱 Minimal Requirements</h2>

- NodeJs

[Back To The Top](#title)

---

<h2 id="features">🎇 Features</h2>

- [x] create algorithm
- [x] finish ambient config
- [ ] private functions

[Back To The Top](#title)

---

<h2 id="how-to-contribute">💡 How To Contribute</h2>

- Make a fork of this repository
- Clone to you machine and entry on respective paste
- Create a branch with your resource: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`
- A green button will appear at the beginning of this repository
- Click to open and fill in the pull request information

<p align="center">
<i>Contributions, issues and features requests are welcome!</i><br />
<i>📮 Submit PRs to help solve issues or add features</i><br />
<i>🐛 Find and report issues</i><br />
<i>🌟 Star the project</i><br />
</p>

[Back To The Top](#title)

---

<h2 id="contributors">🤗 Contributors</h2>

<p>

<a href="https://github.com/Mikael-R"><img width="60px" src="https://avatars1.githubusercontent.com/u/60241602?v=4" alt="Mikael-R"/></a>
<a href="https://github.com/mateushnsoares"><img width="60px" src="https://avatars1.githubusercontent.com/u/59037640?v=4" alt="mateushnsoares"/></a>

</p>

[Back To The Top](#title)

---

<h2 id="author">👤 Author</h2>

🤓 **Password Generator ORG <passgenerator.org@gmail.com>**

- Github: [@password-generator](https://github.com/password-generator)

[Back To The Top](#title)

---

<h2 id="license">🔏 License</h2>

Copyright © 2020 [Password Generator ORG <passgenerator.org@gmail.com>](https://github.com/password-generator)

This project is licensed by [MIT License](https://api.github.com/licenses/mit).

[Back To The Top](#title)

---

_This README was generated with 💟 by [Readme-Template-Generator](https://github.com/Mikael-R/Readme-Template-Generator)_
