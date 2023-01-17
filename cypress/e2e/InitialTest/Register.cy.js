///<reference types='cypress'/>

describe('Register Test',()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    
    it('Navigating to Register and Back',()=>{
        cy.get('a > .MuiButtonBase-root').click()
        cy.wait(500)
        cy.contains('Personal Detail')
        cy.get('a > .MuiButtonBase-root').click()
        cy.contains('Register')
    })

    it('Register throw error',()=>{
        let userdetails={
            fname : 'Divia',
            lname : 'Venkat',
            email : 'dd@gmail.com',
            gender : 'Female',
            address : 'Sample Address line is entered'
        }
        cy.get('a > .MuiButtonBase-root').click()
        cy.wait(200)
        cy.get('#PDstyles [name="firstname"]').type(`${userdetails.fname}`)
        cy.get('#PDstyles [name="lastname"]').type(`${userdetails.lname}`)
        cy.get('#PDstyles [name="email"]').type(`${userdetails.email}`)
        cy.get("#PDstyles [name='address']").type(`${userdetails.address}`)
        cy.get(':nth-child(6) > .MuiButtonBase-root').click()
        cy.contains('Gender is required')

        
        

        

      

    })
})