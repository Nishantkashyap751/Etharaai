# AI Coding Agent Instructions for Team Task Manager

## Purpose
This repository is a full-stack team task management application. For API-related work, focus on the backend service under `backend/` and preserve the existing Express route, controller, and middleware structure.

## Project layout
- `backend/` – Node.js API service
  - `server.js` – Express app entrypoint
  - `routes/` – API route definitions
  - `controllers/` – request handlers and business logic
  - `middleware/` – authentication and authorization
  - `models/` – Mongoose schemas for `User`, `Project`, and `Task`
  - `config/` – database connection
  - `utils/` – helper functions
- `frontend/` – React app that consumes the API
- `docker-compose.yml` – container orchestration
- `README.md` + `backend/README.md` – setup and deployment docs

## Backend API details
- Routes are mounted in `backend/server.js` as:
  - `/api/users`
  - `/api/projects`
  - `/api/tasks`
- Authentication is JWT-based via `backend/middleware/auth.js`.
- Validation uses `express-validator` in route definitions.
- The API exposes a health check at `GET /api/health`.
- For API changes, update backend controllers and routes first, then ensure frontend calls still match if the change impacts client behavior.

## Common API endpoints
- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/users/me`
- `GET /api/users/all`
- `PUT /api/users/update`
- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `POST /api/projects/:id/members`
- `DELETE /api/projects/:id/members`
- `GET /api/tasks/dashboard/stats`
- `POST /api/tasks`
- `GET /api/tasks/project/:projectId`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `POST /api/tasks/:id/comments`
- `DELETE /api/tasks/:id`

## Build and run commands
- Root monorepo:
  - `npm run install-all`
  - `npm run start-backend`
  - `npm run start-frontend`
- Backend only:
  - `cd backend && npm install`
  - `cd backend && npm run dev`
  - `cd backend && npm start`
- Frontend only:
  - `cd frontend && npm install`
  - `cd frontend && npm start`

## Environment variables
- Backend: `PORT`, `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV`, `FRONTEND_URL`
- Frontend: `REACT_APP_API_URL`

## Agent behavior guidance
- Prioritize backend API consistency and route stability for `api` requests.
- Do not add new API routes unless the feature clearly requires them.
- Use existing models and controllers wherever possible.
- If you modify the API shape, also update its documentation in `README.md` or `backend/README.md`.
- For tasks around authorization or role-based access, inspect `backend/middleware/auth.js` and controller access logic.

## Useful references
- [Root README](./README.md)
- [Backend README](./backend/README.md)
