const server = require('./server');
const request = require('supertest');

//change these for each test
let newUsername = "Liamtest"
let newPassword = "password"


describe ('POST /api/register', () => {
    it('returns 200 OK',  () => {
        return request(server).post('/api/auth/register')
        .set('username', newUsername)
        .set('password', newPassword)
        .expect(200)
    })
    it('returns 500', () => {
        return request(server).post('/api/auth/register')
        .set('username', newUsername)
        .set('password', newPassword)
        .expect(500)
    })
})

describe ('POST /api/Login', () => {
    it('returns 200 OK',  () => {
        return request(server).post('/api/auth/Login')
        .set('username', newUsername)
        .set('password', newPassword)
        .expect(200)
    })
    it('returns 400', () => {
        return request(server).post('/api/auth/Login')
        .set('username', "register" + newUsername)
        .set('password', newPassword)
        .expect(401)
    })
})