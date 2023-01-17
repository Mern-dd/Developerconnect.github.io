

/// <reference types="cypress"/>

describe('Adding new user test',()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })


    it('Succesfully added new user',() => {
        cy.get('.MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('#name').type('Divia')
        cy.get('#email').type('dd123@gmail.com')
        cy.get('#content').type('Hi I am a web developer from CIT. I work on MERN')
        cy.get('form > .MuiButtonBase-root').click()
        cy.contains('Added new developer Successfully')
    })
    it('Developer already exist',()=>{
        cy.get('.MuiCardContent-root > .MuiButtonBase-root').click()
        cy.get('#name').type('Divia')
        cy.get('#email').type('divyadarshini1811@gmail.com')
        cy.get('#content').type('Hi I am a web developer from CIT. I work on MERN')
        cy.get('form > .MuiButtonBase-root').click()
        cy.contains('Developer already exists')
        cy.get('#email').should('have.value','')
    })

})