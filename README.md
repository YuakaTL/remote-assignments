# AppWorks Campus Program remote-assignments 
## Description
AppWorks Campus Program remote-assignments

### Monorepo Structure
This repository uses a monorepo structure, which means that multiple projects or applications are managed within a single repository. This approach allows for better collaboration and easier code sharing between teams, making it ideal for large organizations or complex software projects.

### Yarn 3.0
To manage dependencies in this repository, we use Yarn 3.0. Yarn is a popular package manager for JavaScript projects, and version 3.0 introduces several new features that make it even more powerful and efficient.

By using Yarn 3.0 and a monorepo structure, we're able to streamline our development process and make it easier for developers to work together on complex projects.

## Environment requirements
Before you can use this application, make sure that you have the following requirements installed:
- Yarn 3.x

## How to use
To install the dependencies for all projects in this repository, run the following command in the root directory:
### Installing Dependencies
```bash=
yarn install
```
This command will install all dependencies for all projects in the repository.

Or  you can use the following command to use previously cached dependencies:
```bash=
yarn install --immutable
```
This command will use the dependencies from the `.yarn/cache` directory that you have uploaded instead of downloading them from the network.

### Working with Workspaces
This repository uses Yarn workspaces to manage dependencies and share code between projects. To run a command in a specific workspace, use the following command:
```bash=
yarn workspace <workspace-name> <command>
```
For example, to run the start command in the "client" workspace, use the following command:
```bash=
yarn workspace client start
```

> Ps. In addition to the monorepo structure and Yarn 3, this project also uses the concurrently package, which allows you to run multiple commands concurrently in the same terminal window.
```bash=
yarn start:dev
```
This command uses concurrently to run the start command in the `client` and `server` directories at the same time. This allows you to develop the front-end and back-end of your application simultaneously, without having to switch between different terminal windows.

Please note that this command assumes that you have already installed the necessary dependencies for both the front-end and back-end applications. If you have not done so yet, you may need to run `yarn install` in both directories first.

