//================================ Scenario Positif Test Case ( Sukses Login ) ============================== //
describe('Sukses Log In', function(){
    it('Buka halaman url dashboard login', function(){
        cy.visit('https://www.linkedin.com/checkpoint/lg/login')
        cy.wait(200)
    })
    it('Input menggunakan username yang benar', function(){
        cy.get('input[type = "text"]').type("emailaccountkaliansendiriyaa@gmail.com")
    })
    it('Input menggunakan password yang benar', function(){
        cy.get('input[type = "password"]').type("password")
    })
    it('Clik Button Login', function(){
        cy.get('button[type = "submit"]').contains('Sign in').click()
    })
})


// ================================ Scenario Negatif Test Case ( Gagal Login ) ============================== //
describe('Gagal Log In', function(){
    it('Buka halaman url dashboard login', function(){
        cy.visit('https://www.linkedin.com/checkpoint/lg/login')
    })
    it('Input menggunakan username yang salah', () => { 
        const wrongUsername = 'niken'; 
        cy.get('input[type="text"]') 
           .focus() 
           .type(wrongUsername) 
           .should('have.value', wrongUsername)  
     })
     it('Input menggunakan password yang salah', () => { 
        const Wrongpassword = 'salah'; 
        cy.get('input[type="password"]') 
           .focus() .type(Wrongpassword) 
           .should('have.value', Wrongpassword)
     })
     it('Clik Button Login', function(){
        cy.get('button[type = "submit"]').contains('Sign in').click()
    })
})

