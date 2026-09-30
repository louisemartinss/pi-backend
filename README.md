# Recordar — Backend

Backend acadêmico da plataforma **Recordar**, uma plataforma de cuidado compartilhado para apoiar a memória na rotina de saúde de pessoas idosas.

## Tecnologias
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcryptjs
- CORS
- Swagger

## Instalação

```bash
npm install
```

Copie `.env.example` para `.env` e preencha `MONGODB_URI` e `JWT_SECRET`.

Depois:

```bash
npm run dev
```

API: `http://localhost:3000`
Swagger: `http://localhost:3000/api-docs`

## Perfis
- paciente
- medico
- administrador

## Rotas principais
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `GET /api/medications`
- `POST /api/medications`
- `PUT /api/medications/:id`
- `DELETE /api/medications/:id`
- `GET /api/appointments`
- `POST /api/appointments`
- `PUT /api/appointments/:id`
- `DELETE /api/appointments/:id`
- `GET /api/instructions`
- `POST /api/instructions`
- `PUT /api/instructions/:id`
- `DELETE /api/instructions/:id`
- `GET /api/reports`
- `POST /api/reports`
- `PUT /api/reports/:id`
- `DELETE /api/reports/:id`
- `GET /api/questions`
- `POST /api/questions`
- `PUT /api/questions/:id`
- `DELETE /api/questions/:id`
- `GET /api/history`

O backend é uma base acadêmica: antes de uso real com dados de saúde, é necessário implementar controles adicionais de segurança, privacidade e conformidade.
