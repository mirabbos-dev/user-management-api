# User Management API

REST API for registering, authenticating and managing users. Built as a technical assignment.

**Stack:** Node.js · Express · PostgreSQL · Sequelize · JWT · bcrypt

Frontend: [user-management-web](https://github.com/mirabbos-dev/user-management-web)

## Features
- Registration with hashed passwords (bcrypt)
- JWT login (1-hour tokens), blocked users cannot log in
- Protected routes via auth middleware
- Bulk block, unblock and delete by user IDs
- Users sorted by last login

## API
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | /users/register | – | Create a user |
| POST | /users/login | – | Get a JWT |
| GET | /users | ✓ | List users |
| POST | /users/block | ✓ | Block users |
| POST | /users/unblock | ✓ | Unblock users |
| DELETE | /users/delete | ✓ | Delete users |

## Run locally
```bash
npm install
cp .env.example .env   # fill in DATABASE_URL and JWT_SECRET
npm start
```
