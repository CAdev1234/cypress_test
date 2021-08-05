let count_unassinged = 0
// let sort_option = ['Begins with', 'Contains', 'Does not contain', 'Equals', 'Is one of', 'Wildcard']
let sort_option = ['Begins with', 'Contains']
let groupNameList = [
    'Mya Acevedo',
    'Maximillian Torres',
    'Myles Leach',
    'Daniella Zuniga',
    'Dax Buck',
    //'Charles Larsen',
    'Haiden Rose',
    'Keegan Potter',
    'Julissa Krause',
    'Erin Shelton',
    //'Cheyenne Hooper',
    'Kian Norman'
]
let assignValList = ['Unassigned', 'Church & Dwight', 'Ummah', 'ECOFRESH LTDA']


function AssignSupplierGroupingWorkflow() {
    cy.get('#stibo_anchor_Supplier_Group_Maintenance').should('contain.text', 'Supplier Group Maintenance')
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get('div > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div').should('contain.text', 'Assign Suppliers')
    cy.get('div > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div').click({force: true})
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(2) > div > div').should('contain.text', 'Un-Assigned Supplier List')
    
    cy.get('div > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div').invoke('text').then(sometext => cy.log(sometext))
    cy.get('div > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > div').invoke('text').then(sometext => {
        count_unassinged = sometext
        cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div').should('contain.text', 'Number of items: ' + count_unassinged)
        
        filterTest()
        

        cy.wait(5000)
        cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.navigation-panel > div > i').click({force: true})
    })
    
    
}

function filterTest() {
    cy.get('#TableHeader_Supplier_Name > div > span').should('include.text', 'Supplier Name').click({force: true})
    cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div.sort-and-filtering-dialog-sorting > div.sort-and-filtering-dialog-sorting__ascending > div').should('include.text', 'Ascending').click({force: true})
    cy.wait(3000)
    cy.get('#TableHeader_Supplier_Name > div > span').should('include.text', 'Supplier Name').click({force: true})
    cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div.sort-and-filtering-dialog-sorting > div.sort-and-filtering-dialog-sorting__descending > div').should('include.text', 'Descending').click({force: true})        //cy.get()
    cy.get(3000)
    for (let index = 0; index < sort_option.length; index++) {
        for (let indexi = 0; indexi < groupNameList.length; indexi++) {
            cy.get('#TableHeader_Supplier_Name > div > span').should('include.text', 'Supplier Name').click({force: true})
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div:nth-child(2) > div.sort-and-filtering-dialog-filtering-header.sort-and-filtering-dialog-filtering-header__display-flex > select').select(sort_option[index])
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div:nth-child(2) > div.sort-and-filtering-dialog-filtering-header.sort-and-filtering-dialog-filtering-header__display-flex > textarea').clear().type(groupNameList[indexi])
            cy.wait(3000)
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div.sort-and-filtering-dialog-bottom__buttons-wrapper > div > button:nth-child(1) > div > span.text').should('include.text', 'Apply filter').click({force: true})
            cy.wait(5000)

            cy.get('#toolbar_button_Clear_all_filters > div').should('include.text', 'Clear filter').click({force: true})
        }
                
    }

    cy.get('#TableHeader_Assign_Supplier_Group > div > span').should('include.text', 'Assign Supplier Group').click({force: true})
    cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div.sort-and-filtering-dialog-sorting > div.sort-and-filtering-dialog-sorting__ascending > div').should('include.text', 'Ascending')
    cy.wait(3000)
    cy.get('#TableHeader_Assign_Supplier_Group > div > span').should('include.text', 'Assign Supplier Group').click({force: true})
    cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div.sort-and-filtering-dialog-sorting > div.sort-and-filtering-dialog-sorting__descending > div').should('include.text', 'Descending').click({force: true})
    cy.wait(3000)
    for (let index = 0; index < sort_option.length; index++) {
        for (let indexi = 0; indexi < assignValList.length; indexi++) {
            cy.get('#TableHeader_Assign_Supplier_Group > div > span').should('include.text', 'Assign Supplier Group').click({force: true})
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div:nth-child(2) > div.sort-and-filtering-dialog-filtering-header.sort-and-filtering-dialog-filtering-header__display-flex > select').select(sort_option[index])
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div:nth-child(2) > div.sort-and-filtering-dialog-filtering-header.sort-and-filtering-dialog-filtering-header__display-flex > textarea').clear().type(assignValList[indexi])
            cy.wait(5000)
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div:nth-child(2) > div.sort-and-filtering-dialog-bottom__filtering-count').invoke('text').then(sometext => {
                cy.log(sometext)
            })
            cy.get('#ContextMenuPopup > div > div > div.sort-and-filtering-dialog > div.sort-and-filtering-dialog-bottom__buttons-wrapper > div > button:nth-child(1) > div > span.text').should('include.text', 'Apply filter').click({force: true})
            cy.wait(7000)
        }
    }
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
    it('AssignSupplierGroupingWorkflow', () => {
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
        
        AssignSupplierGroupingWorkflow()
    })
})