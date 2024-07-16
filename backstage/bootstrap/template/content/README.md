# ${{ values.name | safe }}

![Backstage Logo](https://via.placeholder.com/150)

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/mit)
[![Codecov](https://img.shields.io/codecov/c/github/backstage/backstage)](https://codecov.io/gh/backstage/backstage)
[![](https://img.shields.io/github/v/release/backstage/backstage)](https://github.com/backstage/backstage/releases)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/7678/badge)](https://bestpractices.coreinfrastructure.org/projects/7678)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/backstage/backstage/badge)](https://securityscorecards.dev/viewer/?uri=github.com/backstage/backstage)

This guide walks through how to get started creating your very own service customisable app. 

## 🚀 Features

- **Backstage**: Internal Developer Platform.

## 🧰 Prerequisites

- NVM

## 🛠 Installation

```bash
# Install dependencies
make install

# Start the development server
make FILE_PATH="src/index.ts" run 

# Navigate to the source project directory
cd src
```

## 📚 Usage

### App Commands

```bash
make install                            # Install dependencies
make FILE_PATH={} run                   # Start the application
make build                              # Build the application
```

## 🤝 Contributing

We welcome contributions to Backstage Getting Started! Please see Backstage's [CONTRIBUTING.md](https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

## 📜 License

Backstage Getting Started is open-source software licensed under the [MIT license](http://www.apache.org/licenses/mit).

## 🙏 Acknowledgements

- [Backstage](https://backstage.io//) for the amazing framework
- All our contributors and supporters!

---

Made with ❤️ by the Backstage Getting Started team. Happy coding!
