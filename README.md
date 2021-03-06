# Client Management System

A simple client management system software.

features:
- Client information tracking.
- Task tracking.
- Deala/Contracts value tracking.
- Performance tracking.
- Backend API's that can be integrated to any frontend service.

Technologies used:
- Developed using MERN stack.
- Packed with docker for easy development, deployment and CI/CD/CT setup .

Scope of project:
- Platform independent web application.
- Containerised applications - performance and maintainence free.
- Simple architecture.
- Secured environment.
- Faster development and delivery of application updates.
- Log management for faster debugging of issues.

Requirement (production):
- Ubuntu(preferred)/ windows
- Mogodb (local or atlas server).
- Docker and docker compose.

Requirement (development):
Apart from requirement mentioned in production, following need to be installed
- Node.js and npm
- Visual studio IDE(Preferred)/ your favourite editor
- nginx

Steps to run the project:
1. Install mogodb locally else obtain the mongodb connection URL from the mongo atlas server.
2. In case of atlas server connection, following variables need to be set in env file.<br />
    MONGO_URL=<MONGO_URL> <br />
    NODE_ENV=production/development/local <br />
    WHITELISTED_URL=http://localhost;http://localhost:3000;<other url that is allowed access the backend API> <br />
    BACKEND_URL=http://localhost:5300/api <br />
3. Env file name should be based on the environment.
  local.env -----> local mode.
  dev.env -------> development mode.
  prod.env ------> production mode.
4. Mongodb URL and backend URL should also be set in next.config.js of frontend project because this project uses next.js framework which doesnt read env files.
5. Finally shoot up the following commands in the terminal.
  
for running project in local mode,<br />
docker-compose -f docker-compose.yml -f docker-compose-local.yml build <br />
docker-compose -f docker-compose.yml -f docker-compose-local.yml up <br />

for running project in devolopment mode,<br />
docker-compose -f docker-compose.yml -f docker-compose-dev.yml build<br />
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up<br />

for running project in production mode,<br />
docker-compose -f docker-compose.yml -f docker-compose-prod.yml build <br />
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up <br />
