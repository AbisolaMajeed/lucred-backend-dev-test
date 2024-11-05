
const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe('Products API', () => {
  it('GET /api/products returns all products', async () => {
    const response = await request.get('/api/products');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      { id: 1, name: 'Clothe', price: 8500, description: 'Tops, Jeans, Gowns, Shirts are all available' },
      { id: 2, name: 'Mobile phone', price: 5200 },
    ]));
  });

  it('POST /api/products creates a new product with valid data', async () => {
    const newProduct = { name: 'Laptop', price: 12000, description: 'Powerful and portable' };
    const response = await request.post('/api/products').send(newProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newProduct.name);
    expect(response.body.price).toBe(newProduct.price);
    expect(response.body.description).toBe(newProduct.description);
  });

  it('POST /api/products returns 400 for missing name', async () => {
    const newProduct = { price: 12000, description: 'Powerful and portable' };
    const response = await request.post('/api/products').send(newProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Name is required');
  });

  it('POST /api/products returns 400 for missing price', async () => {
    const newProduct = { name: 'Laptop', description: 'Powerful and portable' };
    const response = await request.post('/api/products').send(newProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Price is required');
  });

  it('POST /api/products returns 400 for invalid name type', async () => {
    const newProduct = { name: 123, price: 12000, description: 'Powerful and portable' };
    const response = await request.post('/api/products').send(newProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Name must be a string');
  });

  it('POST /api/products returns 400 for invalid price type', async () => {
    const newProduct = { name: 'Laptop', price: 'invalid price', description: 'Powerful and portable' };
    const response = await request.post('/api/products').send(newProduct);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Price must be a number');
  });
});