let search_name = 'INTERPAC SA'
let sort_option = ['Begins with', 'Contains']
let assignValList = ['Unassigned', 'Church & Dwight', 'Ummah', 'ECOFRESH LTDA']
function reassingSupplierGroupingWorkflow() {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()

    // search item and assign to group
    cy.get("#stibo_stackpanel_Supplier_Name_Search").click()
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div table tbody tr:nth-child(1) td table tbody tr:nth-child(2) td .stb-SearchBox").clear().type(search_name)
    cy.wait(2000)
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div div button.button-secondary.SearchButton").click()
    cy.wait(2000)
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label").click()
    cy.wait(1000)
    cy.get("#toolbar_button_Re-Assign_Supplier_Group > div").click({force: true})
    cy.wait(2000)
    cy.get('#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody > tr.even > td.readonly-cell.sheet-coll > div > div > span.DomainNodeCell.extra-local').should('contain.text', search_name)

    cy.get("#stibo_stackpanel_Re-assign_Supplier_Grouping_Workflow").should('include.text', 'Re-assign Supplier Grouping Workflow')
    cy.get("#stibo_stackpanel_Re-assign_Supplier_Grouping_Workflow").click()
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(14) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div').should('include.text', 'Re-assign Supplier Group')
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(14) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div').click({force: true})
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(14) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > div').invoke('text').then(sometext => {
        cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div').should('contain.text', 'Number of items: ' + sometext)
        
    })

    filterTest()
    cy.get('#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label').click({force: true})
    cy.get('#toolbar_button_ReAssign_Supplier_Grouping > div').should('contain.text', 'ReAssign Supplier Grouping')
    cy.get('#toolbar_button_ReAssign_Supplier_Grouping').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-content > div > div > div').should('include.text', 'Selected supplier cannot be assigned to the same supplier group!')
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})
    cy.get('#toolbar_button_Undo_Re-assign > div').should('include.text', 'Undo Re-assign')
    cy.get('#toolbar_button_Undo_Re-assign > div').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-content > div > div > div').should('include.text', 'Re-assign cancelled Successfully')
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})

    // Assign again
    
    let reassign_success_alert_text = 'Supplier is Successfully initiated to Update Supplier grouping List'
    let unassign_success_alert_text = 'Re-assign cancelled Successfully'
    //cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    //cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1)").click()
    
    cy.wait(5000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.navigation-panel > div > i').click({force: true})
    
}

function filterTest() {
    cy.get('#TableHeader_SMD_Supplier_Name > div > span').should('include.text', 'SMD Supplier Name').click({force: true})
    cy.wait(7000)
    cy.log('SMD Supplier Name Sort working')
    cy.get('#TableHeader_Supplier_Group_Assigned > div > span').should('include.text', 'Supplier Group Assigned')
    cy.wait(7000)
    cy.log('Supplier Group Assigned Sort working')
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
    it('Supplier Group Assignment', () => {
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
        reassingSupplierGroupingWorkflow()
    })
})