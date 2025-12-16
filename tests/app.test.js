const request = require('supertest');
const app = require('../src/index');

describe('To-DoStud Application', () => {
  test('GET / retourne un message de bienvenue', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Bienvenue');
  });

  test('GET /health retourne healthy', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /todos retourne une liste de tâches', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('POST /todos crée une nouvelle tâche', async () => {
    const newTask = { task: 'Apprendre GitHub Actions' };
    const response = await request(app)
      .post('/todos')
      .send(newTask);
    
    expect(response.statusCode).toBe(201);
    expect(response.body.task).toBe(newTask.task);
    expect(response.body.completed).toBe(false);
  });
});