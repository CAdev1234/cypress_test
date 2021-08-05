
function supplierUnchangedSinceSearch() {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get('#stibo_stackpanel_Supplier_Unchanged_Since_Search').should('include.text', 'Supplier Unchanged Since Search')
    cy.get('#stibo_stackpanel_Supplier_Unchanged_Since_Search').click({force: true})
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(16) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > div > i').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.stb-SearchDatePopup > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(5) > td:nth-child(3) > div').click({force: true})
    cy.wait(3000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(16) > div > div:nth-child(2) > div > div > div > button.button-secondary.ResetButton > div > span').click({force: true})
    
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(16) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > div > i').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.stb-SearchDatePopup > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(5) > td:nth-child(4) > div').click({force: true})
    
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(16) > div > div:nth-child(2) > div > div > div > button.button-secondary.SearchButton > div > span').click({force: true})
    cy.wait(5000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div').invoke('text').then(sometext => {
        cy.log(sometext)
    })
    cy.wait(2000)
    cy.get('#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label').click({force: true})
    cy.wait(5000)
    cy.get('#toolbar_button_Re-Assign_Supplier_Group > div').should('include.text', 'Re-Assign Supplier Group')
    cy.get('#toolbar_button_Re-Assign_Supplier_Group > div').click({force: true})
    //cy.get('#AlertPopup > div > div > div.portal-alert-popup-content > div > div > div').should('include.text', 'Supplier is Successfully initiated to Update Supplier grouping List')
    //cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})
    cy.get('#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label').click({force: true})
    cy.get('#toolbar_button_Undo_Re-assign > div').should('include.text', 'Undo Re-assign')
    cy.get('#toolbar_button_Undo_Re-assign > div').click({force: true})

    cy.wait(5000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.navigation-panel > div > i').click({force: true})
}

describe('Regression suite', () => {
    beforeEach(()=>{
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce("JSESSIONID", "portal_username", "id");
        Cypress.Cookies.debug(true)   
        cy.clearCookies()
        
        
    })
    afterEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce("JSESSIONID", "portal_username", "id");
        Cypress.Cookies.debug(true)  
        cy.clearCookies()
    })
    it('SupplierUnchangedSinceSearch', () => {
        cy.clearCookies()
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.config().baseUrl)
        cy.wait(5000)
        cy.get('body > div.container > div > table > tbody > tr:nth-child(6) > td:nth-child(1) > a').click()
        cy.wait(6000)
        cy.get('[id=username-input]').clear().type(Cypress.config().username)
        cy.get('[id=password-input]').clear().type(Cypress.config().password)
        cy.get('[id=login-button]').click()

        cy.wait(1000)
        supplierUnchangedSinceSearch()
    })
})