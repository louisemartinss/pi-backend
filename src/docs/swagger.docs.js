/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Cadastra um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201: { description: Usuário criado }
 *
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Realiza login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, senha]
 *             properties:
 *               email: { type: string }
 *               senha: { type: string }
 *     responses:
 *       200: { description: Login realizado }
 *
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Lista usuários
 *     responses:
 *       200: { description: Lista de usuários }
 *   post:
 *     tags: [Users]
 *     summary: Cria usuário
 *     responses:
 *       201: { description: Usuário criado }
 *
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Busca usuário por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Usuário encontrado }
 *   put:
 *     tags: [Users]
 *     summary: Atualiza usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Usuário atualizado }
 *   delete:
 *     tags: [Users]
 *     summary: Exclui usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Usuário excluído }
 *
 * /api/medications:
 *   get:
 *     tags: [Medications]
 *     summary: Lista medicamentos (paciente vê só os seus)
 *     responses:
 *       200: { description: Lista de medicamentos }
 *   post:
 *     tags: [Medications]
 *     summary: Cria medicamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paciente: { type: string, description: "ID do paciente (obrigatório para médico ou admin)" }
 *               nome: { type: string }
 *     responses:
 *       201: { description: Medicamento criado }
 *
 * /api/medications/{id}:
 *   put:
 *     tags: [Medications]
 *     summary: Atualiza medicamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { type: object }
 *     responses:
 *       200: { description: Medicamento atualizado }
 *   delete:
 *     tags: [Medications]
 *     summary: Exclui medicamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Medicamento excluído }
 *
 * components:
 *   schemas:
 *     UserInput:
 *       type: object
 *       required: [nome, email, senha, tipo]
 *       properties:
 *         nome: { type: string }
 *         email: { type: string }
 *         senha: { type: string }
 *         tipo:
 *           type: string
 *           enum: [paciente, medico, administrador]
 */