/// <reference types="cypress" />

describe('Buscar dispositivos', () =>{

    it('Buscar dispositivos', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        })
    })

    it('Buscar dispositivos por ID', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects?id=3&id=5&id=10'
        }).then((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body).to.have.lengthOf(3);
            expect(response.body).to.be.an('array');
        })
    })

    it('Buscar dispositivos especifico', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7'
        })
        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('Apple MacBook Pro 16');
        })
    })

    it('Buscar dispositivos inexistente', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/2491847298473',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal('Oject with id=2491847298473 was not found.');
        })
    })
})