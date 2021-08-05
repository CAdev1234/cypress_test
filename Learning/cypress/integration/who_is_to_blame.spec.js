describe("Finding The Truth", () => {
    it("Access Site", () => {
        cy.visit('https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135')
        cy.wait(8000)
        cy.get('h1').should('contain.text', 'FINDING THE TRUTH')
        cy.get("a.button.button--nav").should('contain.text', 'START').click({force: true})
        cy.wait(3000)
        
    })
    it("Who is to blame?", () => {
        // cy.get('h2').should('contain.text', 'FINDING THE TRUTH')
        cy.get("a.link.card.imageCard").eq(1).click({force: true})
        cy.wait(3000)
        cy.get("a.button.button--nav").should('include.text', 'JUDGE THIS').click({force: true})
        cy.wait(3000)
        cy.get('span.icon.icon--secondary > i').eq(0).click({force: true})
        cy.log('Guilty is selected')
        cy.get('a.save_button').should('include.text', 'VOTE').click({force: true})
        cy.get('.modal__container').should('include.text', 'GUILTY!')
        cy.get('.modal__container').should('include.text', 'You think Kevin is guilty.')
        cy.get('.modal__container').should('include.text', 'Move on to find out more about the evidence. Will you be able to use it to prove his guilt?')
        cy.get('.button.button--nav').eq(2).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })
    it("Exploer the evidence", () => {
        cy.get('h2.page__title').should('have.text', 'EXPLORE THE EVIDENCE')
        // cy.get('strong').eq(0).should('include.text', "You saw how much evidence there is against Kevin. Let's take a closer look at this.")
        cy.log('Check hamburg menu')
        cy.get('a.menuButton').click({force: true})
        cy.wait(5000)
        cy.get('li.menu__item').eq(0).should('have.class', 'visited')
        cy.get('li.menu__item').eq(0).should('include.text', 'FINDING THE TRUTH')
        cy.get('body').click({force: true})
        cy.get('a.button.e-button--link.e-button--medium.e-icon--after.button--nav').should('include.text', 'CONTINUE').click({force: true})
        
    })

    it("YOU DECIDE", () => {
        // cy.get('h2.page__title').should('include.text', 'YOU DECIDE')
        // cy.get('p').eq(0).invoke(some_text => {cy.log(some_text)})
        // cy.get('p').eq(1).invoke(some_text => {cy.log(some_text)})
        // cy.get('p').eq(2).invoke(some_text => {cy.log(some_text)})
        cy.wait(3000)
        cy.get('a.button.e-button--link.e-button--medium.e-icon--after.button--nav').should('include.text', 'CONTINUE').click({force: true})
        cy.wait(5000)
    })

    it("THE FINGERPRINT", () => {
        cy.get("h2.page__title").should('include.text', "THE FINGERPRINT")
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(0).should('include.text', 'Flip').click({force: true})
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(1).should('include.text', 'Flip').click({force: true})
        cy.get('i.ti-answer').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.wait(2000)
        cy.get('.modal__title').eq(1).should('include.text', 'Our expert disagrees...')
        cy.get('.modal__container .button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })

    it("THE DNA", () => {
        cy.get("h2.page__title").should('include.text', "THE DNA")
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(0).should('include.text', 'Flip').click({force: true})
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(1).should('include.text', 'Flip').click({force: true})
        cy.get('i.ti-answer').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.wait(2000)
        cy.get('.modal__title').eq(1).should('include.text', 'Our expert does not agree')
        cy.get('.modal__container .button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })

    it("THE HAIR SAMPLE", () => {
        cy.get("h2.page__title").should('include.text', "THE HAIR SAMPLE")
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(0).should('include.text', 'Flip').click({force: true})
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(1).should('include.text', 'Flip').click({force: true})
        cy.get('i.ti-answer').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.wait(2000)
        cy.get('.modal__title').eq(1).should('include.text', 'Our expert agrees, however...')
        cy.get('.modal__container .button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })

    it("THE FOOTPRINT", () => {
        cy.get("h2.page__title").should('include.text', "THE FOOTPRINT")
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(0).should('include.text', 'Flip').click({force: true})
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(1).should('include.text', 'Flip').click({force: true})
        cy.get('i.ti-answer').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.wait(2000)
        cy.get('.modal__title').eq(1).should('include.text', 'Our expert agrees...')
        cy.get('.modal__container .button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })

    it("THE CONFESSION", () => {
        cy.get("h2.page__title").should('include.text', "THE CONFESSION")
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(0).should('include.text', 'Flip').click({force: true})
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(1).should('include.text', 'Flip').click({force: true})
        cy.get('i.ti-answer').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.wait(2000)
        cy.get('.modal__title').eq(1).should('include.text', 'Our expert does not agree')
        cy.get('.modal__container .button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })

    it("THE EYEWITNESS", () => {
        cy.get("h2.page__title").should('include.text', "THE EYEWITNESS")
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(0).should('include.text', 'Flip').click({force: true})
        cy.get('a.button.button--primary.e-button--medium.e-icon--after').eq(1).should('include.text', 'Flip').click({force: true})
        cy.get('i.ti-answer').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.wait(2000)
        cy.get('.modal__title').eq(1).should('include.text', 'Our expert agrees...')
        cy.get('.modal__container .button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })

    it("Guilty or Not Guilty Again", () => {
        cy.get('div.htmlText').eq(0).should('include.text', 'Have you changed your mind about whether Kevin is guilty or not?')
        cy.log('Guilty Selected')
        cy.get('i.ti.ti-answer.ti-radio').eq(0).click({force: true})
        cy.get('i.ti.ti-link-external').click({force: true})
        cy.get('.modal__container h2').should('include.text', 'GUILTY!')
        cy.get('.modal__container p').eq(2).should('include.text', 'You think Kevin is guilty.')
        cy.get('.modal__container a.button.button--nav').eq(1).should('include.text', 'CONTINUE').click({force: true})
        cy.wait(3000)
    })
    
    it("Click Final Verdict", () => {
        cy.get('a.button.button--nav').should('include.text', 'FINAL VERDICT').click({force: true})
        cy.wait(3000)
    })

    it('FINAL VERDICT', () => {
        cy.get("h2.page__title").should('include.text', "FINAL VERDICT")
        // cy.get("a.button.button--nav").eq(0).should('include.text', 'WHAT THE RESEARCH SAYS').click({force: true})
        cy.wait(3000)
    })

    // it('WHAT THE RESEARCH SAYS', () => {
    //     cy.get("h2.page__title").should('include.text', "WHAT THE RESEARCH SAYS")
    //     cy.get("i.ti.ti-arrow-left").click({force: true})
    //     cy.wait(3000)
    // })

    it('FINAL VERDICT', () => {
        cy.get("h2.page__title").should('include.text', "FINAL VERDICT")
        cy.get("a.button.button--nav").eq(1).should('include.text', 'CHOOSE NEW CASE').click({force: true})
        cy.wait(3000)
    })
})