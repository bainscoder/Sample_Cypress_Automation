/// <reference types="cypress" />


describe('Performing user journey', function(){

    it('Navigate to trinnylondon website and ', ()=>{
        cy.visit('https://trinnylondon.com/uk/')
        cy.get('.SignUsers_signInLink_3hKiP',{timeout: 2000}).should('contain', 'sign in')
    })
    it('Navigate to Makeup page and add BFF cream to basket', () => {

        cy.get('body').click()
        cy.get('.Header_menuItemLink_sEARB.Header_linkMenuItem_3vEzy').eq(2).should('contain', 'Makeup').click().wait(3000) // to verify Makeup text and click
        cy.scrollTo('center')                                                                                               // to Scroll 'sidebar' to its center
        cy.get('.ProductTiles_titleLink_1L9GU', {timeout: 2000}).eq(1).should('contain', 'BFF Cream SPF 30').click()        // to verify BFF Cream SPF 30
        cy.get('.text.ProductInfo_title_2jMrL').should('contain', 'BFF Cream SPF 30')                                       // to verify BFF Cream SPF 30 article
        cy.get('.Swatch_imageCircle_2s3RT').eq(0).click()                                                                   // to click Add to Bag button

    })
    it('Navigate to Bag page and raise quantity to 2 then checkout', () => {

        cy.get('.button.primaryButton', {timeout: 2000}).eq(0).click()                                                      // to click Add to basket button
        cy.get('.icon.BagIcon_cartIcon_1HEKX').click()                                                                      // to click Bag icon
        cy.get('.Header_gotoCartLink_3II1G').should('contain', 'View Bag').click()                                          // to verify View Bag button
        cy.get('.Select_select_1isny',{timeout: 2000}).select('2')                                                          // to click quantity field
        cy.get('.Bag_checkoutButton_RZ5iB.button.primaryButton').should('contain', 'Checkout').click()                      // to click Checkout button

    })

})