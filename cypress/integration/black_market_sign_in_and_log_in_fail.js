/// <reference types="cypress" />

const baseUrl = "https://preprod.backmarket.fr"

describe('scénario de test d\'inscription échouée', () => {

    it('Remplir mal le formulaire et tente de visiter la page profile', () => {
        cy.visit('/register') 
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('#firstName').type('TOTO');
        cy.get('#lastName').type('JUST');
        cy.get('#signup-email').type('TOTOyopmail');
        cy.get('#signup-password').type('AZERTY');
        cy.get('._1FlppYfmmZAXDcViZEJC9j form').submit();        
        cy.contains('Cet email semble être invalide').should('to.exist')
        cy.visit('/dashboard/profile');
        cy.url().should(
            'be.equal',
            baseUrl + '/register?next=%2Fdashboard%2Fprofile'
            );

    });

    it('Test de connexion échouée', () => { 
        cy.visit('/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#signin-email').type(`toto@yopmail.com`)
        cy.get('#signin-password').type('0000')
        cy.get('[data-qa="signin-submit-button"]').click()
        cy.contains('Informations d\'identification erronées').should('to.exist')
    
    })
    
})
