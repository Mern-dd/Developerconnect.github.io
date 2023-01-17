///<reference types="cypress"/>
describe('Search Test',()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    it('Searching "R" ',()=>{
        let user="r"
        cy.get('#searchdev').type(`${user}{enter}`)
        //cy.get('.listinguser').contains('Kutay')
        cy.get('.listinguser').contains('Divya Darshini')
        cy.get('.listinguser').contains('Rekha')
    })
    it('Searching "A"',()=>{
        let user="a"
        cy.get("#searchdev").type(`${user}`)
        cy.get(".userlist").should('have.length',4)
    })
    it('Searching "Divia"',()=>{
        let user='Divia'
        cy.get('#searchdev').type(`${user}`)
        cy.get('.listinguser').should('have.value', '');
        cy.get('.userlist').should('have.length',0)
    })
})
