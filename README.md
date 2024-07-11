# Includes

- A Model View Controller (MVC) framework for building web applications.
- Mongoose ORM for MongoDB.

# Steps to Use

## 1. Fork with All Branches

## 2. Clone Repository

```bash
git clone <REPO_LINK>
```

## 3. Navigate to Project Directory

```bash
cd <REPO_NAME>
```

## 4. Pull Required Branch

```bash
git pull origin <REQUIRED_BRANCH_NAME>
```

## 5. Install pnpm if not installed

```bash
npm i -g pnpm
```

## 6. Install Dependencies

```bash
pnpm install
```

# How to run?

## Development

```bash
# Build
docker-compose -f docker-compose.dev.yml build

# Run
docker-compose -f docker-compose.dev.yml up

# Run in background (Another Terminal)
docker-compose -f docker-compose.dev.yml watch
```

# Production

- Build

```bash
docker-compose -f docker-compose.prod.yml build
```

- Give a tag name

```bash
docker tag express-mvc-starter:latest your-dockerhub-username/your-repo-name:tagname
```

- Push to Docker Hub

```bash
docker push your-dockerhub-username/your-repo-name:tagname
```

- Pull that image in the production server

```bash
docker pull your-dockerhub-username/your-app-image:tag-name
```

- Run

Replace `<PORT>` and `<POSTGRES_URL>` with your values

```bash
docker run -p <PORT>:<PORT> -e PORT=<PORT> -e DATABASE_URL=<POSTGRES_URL> priyanshptl18/express:latest
```