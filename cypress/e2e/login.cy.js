/// <reference types="cypress" />

describe('Login', () =>{
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/login');
    })

    it('Login realizado com sucesso', () =>{
        cy.get('#user').type('teste@teste.com');
        cy.get('#password').type('123456');

        cy.get('#btnLogin').click();

        cy.get('#swal2-title').should('have.text', "Login realizado");
    })

    it('Login com email vazio', () =>{
        cy.get('#password').type('123456');

        cy.get('#btnLogin').click();

        cy.contains('E-mail inválido.').should('be.visible');
    })

    it('Login com senha vazia', () =>{
        cy.get('#user').type('teste@teste.com');

        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', "Senha inválida.");
    })

    it('Login com email inválido', () =>{
        cy.get('#user').type('teste');
        cy.get('#password').type('123456');

        cy.get('#btnLogin').click();

        cy.contains('E-mail inválido.').should('be.visible');
    })

    it('Login com senha inválida', () =>{
        cy.get('#user').type('teste@teste.com');
        cy.get('#password').type('123');

        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', "Senha inválida.");
    })
})