# expressjs-tutorial

Simple app created using Express.js, implementation of the [tutorial](https://www.youtube.com/watch?v=wh92CVwZs9Y&list=PLjHmWifVUNMKyW8SZUSQCoaYOROcWAKkt&ab_channel=overment)

## Installation

Developed using:
- node.js v18.16.1
- postgresql [v15](https://www.postgresql.org/ftp/source/v15.0/)

Use npm to install dependencies:

```bash
  npm install
```

## Usage

Create `.env` file i.e. using:

```bash
  cp .env.sample .env
```

after setting up environment variables, start server:

```bash
  node server.js
```
or using `nodemon`:

```bash
  nodemon server.js
```

use `--inspect` flag to enable debugger:

```bash
  nodemon --inspect server.js
```
and open [localhost:8080](http://localhost:8080)