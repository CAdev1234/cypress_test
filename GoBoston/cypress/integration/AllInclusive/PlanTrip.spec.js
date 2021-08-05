describe("AllInclusive test", () => {
    it("Plan your trip", () => {
        cy.visit('')
        cy.get("#block-secondarylinks > div > div > div > div > div > ul > li:nth-child(5) > a").click({force: true})
        cy.wait(3000)
        cy.get("#block-node-banner > div > div > div > div > div.content > div.content__wrapper > div > h1").contains("Download your free Boston guidebook")
        cy.wait(3000)
    })
    it("Get guidebook", () => {
        cy.get("#edit-first-name").type("FirstName")
        cy.get("#edit-last-name").type("LastName")
        cy.get("#edit-email").type("test@test.com")
        cy.get("#edit-travel-date").click({force: true})
        cy.get("#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").click({force: true})
        cy.get("#edit-subscription").click({force: true})
        cy.wait(3000)
    })
})