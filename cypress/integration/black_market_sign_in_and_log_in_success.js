/// <reference types="cypress" />

const totoNb = Math.floor(Math.random() * 100000000)

describe('scénario de test d\'inscription réussie', () => {

    it('Remplir le formulaire et verifier le compte', () => {
        cy.clearCookies()
        cy.visit('/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#firstName').type(`TOTO${totoNb}`)
        cy.get('#lastName').type('JUST')
        cy.get('#signup-email').type(`toto${totoNb}@yopmail.com`)
        cy.get('#signup-password').type('AZERTYazerty1234')
        cy.get('[data-test="signup-component"] form').submit()
        cy.clearCookies()
        cy.visit('/dashboard/profile')
        cy.get('[data-qa="accept-cta"]').click()
        cy.url().should(
            'be.not.equal',
            'https://preprod.backmarket.fr/register?next=%2Fdashboard%2Fprofile'
            )
        cy.contains(`toto${totoNb}@yopmail.com`).should('to.exist')
        cy.get('[aria-label="Sous-menu utilisateur"]').click()
        cy.contains('Déconnexion').click()
    })

    it('Se connecte à son compte', () => { 
        cy.clearCookies()
        cy.visit('/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#signin-email').type(`toto${totoNb}@yopmail.com`)
        cy.get('#signin-password').type('AZERTYazerty1234')
        cy.get('[data-qa="signin-submit-button"]').click()
        cy.clearCookies()
        cy.visit('/dashboard/profile')
        cy.get('[data-qa="accept-cta"]').click()
        cy.contains(`toto${totoNb}@yopmail.com`).should('to.exist')
    
    })
    
})