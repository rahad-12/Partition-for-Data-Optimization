# Partition for Data Optimization

#### A few days ago, I faced sluggish search performance when querying a key in a table housing millions of indexed records, despite having optimized the indexing. However, employing range partitioning—a type of horizontal partitioning—proved to be the solution. By partitioning the data into distinct segments, the search process became more efficient and manageable.

## Requirements

- Docker ([Documentation](https://www.docker.com/get-started/))
- Docker Compose
- Postgresql ([Download](https://www.postgresql.org/))
- Node.js ([Download](https://nodejs.org/en))
- NPM (Will be download with Node.js)

#### There is one part of this project.

- Backend - Nodejs + Postgresql ( http://localhost:3000 )

## Installation

- Copy .env.example to .env

```
 cp .env.example .env
```

### Run Docker

```
npm run dev:docker
```

If you need to Re-Run docker, you should remove the container which was created before

```
npm run dev:docker:down
```
