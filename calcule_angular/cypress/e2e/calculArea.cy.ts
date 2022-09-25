describe('calcul area of rectangle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('area').should('have.value','area')
    cy.get('#figure').select('rectangle').should('have.value','rectangle')
    cy.get('.result').contains('area')
  })
  it('area of rectangle longueur = 4 largeur = 5', () =>{
    cy.get('#largeur').type('5')
    cy.get('#longueur').type('4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5*4)
  })
  it('area of rectangle longueur = -4 largeur = 5', () =>{
    cy.get('#largeur').clear().type('5')
    cy.get('#longueur').clear().type('-4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5*(-4))
  })
  it('area of rectangle longueur=5 and largeur=4', () =>{
    cy.get('#longueur').clear().type('5')
    cy.get('#largeur').clear().type('4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5*4)
  })
})
describe('calcul area of triangle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('area').should('have.value','area')
    cy.get('#figure').select('triangle').should('have.value','triangle')
    cy.get('.result').contains('area')
  })
  it('area of triangle base = -5 height = 5 ', () =>{
    cy.get('#base').type('-5')
    cy.get('#height').type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', -5*5/2)
  })
  it('area of triangle base = 5 height = 5', () =>{
    cy.get('#base').clear().type('5')
    cy.get('#height').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5*5/2)
  })
})
describe('calcul area of circle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('area').should('have.value','area')
    cy.get('#figure').select('circle').should('have.value','circle')
    cy.get('.result').contains('area')
  })
  it('area of circle radius = -5', () =>{
    cy.get('#radius').type('-5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', Math.pow(-5,2)*Math.PI)
  })
  it('area of circle radius = 5', () =>{
    cy.get('#radius').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', Math.pow(5,2)*Math.PI)
  })
})
describe('calcul area of square', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('area').should('have.value','area')
    cy.get('#figure').select('square').should('have.value','square')
    cy.get('.result').contains('area')
  })
  it('area of square side = -5', () =>{
    cy.get('#side').type('-5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', Math.pow(-5,2))
  })
  it('area of square side = 5', () =>{
    cy.get('#side').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', Math.pow(5,2))
  })

})
describe('test of convertion', () => {
  it('convertion to Km²', () => {
    cy.visit('http://localhost:4200')
    cy.get('#need').select('area').should('have.value','area')
    cy.get('#figure').select('square').should('have.value','square')
    cy.get('.result').contains('area')
    cy.get('#side').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', Math.pow(5,2))
    cy.get('#convertion-unit').select('km²').should('have.value','km²')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', Math.pow(5,2)*Math.pow(10,-6))
  })
  it('convertion to m²', () => {
    cy.get('#convertion-unit').select('m²').should('have.value','m²')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', Math.pow(5,2)*Math.pow(10,0))
  })
  it('convertion to dm²', () => {
    cy.get('#convertion-unit').select('dm²').should('have.value','dm²')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', Math.pow(5,2)*Math.pow(10,2))
  })
  it('convertion to cm²', () => {
    cy.get('#convertion-unit').select('cm²').should('have.value','cm²')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', Math.pow(5,2)*Math.pow(10,4))
  })
})