/// <reference types="cypress" />

describe('Cadastrar Dispositivos', () =>{

    it('Cadastrar dispositivos com sucesso', () =>{
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Motorola Infinite",
                "data": {
                    "year": 2024,
                    "price": 5000,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "5 TB"
                }
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('Motorola Infinite');
            
            Cypress.env('objetoID', response.body.id);
        })
    })

    it('Atualizar dispositivos com sucesso', () =>{
        const IDObject = Cypress.env('objetoID');
        cy.request({
            method: 'PUT',
            url: `https://api.restful-api.dev/objects/${IDObject}`,
            body: {
                "name": "Motorola Infinite 2",
                "data": {
                     "year": 2025,
                    "price": 8000,
                    "CPU model": "Intel Core i12",
                    "Hard disk size": "10 TB"
                }
            }
        }) 
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('Motorola Infinite 2')
        })
    })   

    it('Atualizar parcialmente dispositivos com sucesso', () =>{
        const IDObject = Cypress.env('objetoID');
        cy.request({
            method: 'PATCH',
            url: `https://api.restful-api.dev/objects/${IDObject}`,
            body: {
                "name": "Motorola Infinite Beyond",
            }
        }) 
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('Motorola Infinite Beyond')
        })
    }) 

    it('Deletar dispositivos com sucesso', () =>{
        const IDObject = Cypress.env('objetoID');
        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${IDObject}`,
        }) 
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    }) 
})