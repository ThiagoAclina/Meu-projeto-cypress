/// <reference types="cypress" />


//Gerador de dados aleatorios
var Chance = require('chance')
var chance = new Chance()

//exemplo chance.name(), chance.cpf(), chance.adress()

describe('Cadastro', () => {
    it('Qaundo eu informar os dados e finalizar, então o cadasttro deve ser efetuado', () => {

        cy.visit('http://form-agilizei.netlify.app')
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[value=m]').check()

        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#years').select('2006', {force: true})
        cy.get('select#months').select('Janeiro', {force: true})
        cy.get('select#days').select('8', {force: true})

        cy.get('input#firstpassword').type('Aluno@2021')
        cy.get('#secondpassword').type('Aluno@2021')

        cy.get('#submitbtn').click()

        cy.url().should('contain', 'listagem')
        
        
    });
});