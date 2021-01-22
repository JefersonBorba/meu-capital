context("Login Page", () => {
    it("login successful", () => {
        cy.viewport(1440, 900)
        cy.visit("http://localhost:3000/login")
        cy.contains("E-mail")
        cy.contains("Senha")
        cy.contains("Entrar")
        cy.contains("Cadastrar!")
        cy.get('#email').type("superuser@gmail.com")
        cy.get('#password').type("123456")
        cy.get('button').click();
    })
})