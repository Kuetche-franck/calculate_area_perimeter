describe('calcul perimeter of rectangle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('perimeter').should('have.value','perimeter')
    cy.get('.result').contains('perimeter')
  })
  it('perimeter of rectangle longueur = 4 largeur = 5', () =>{
    cy.get('#figure').select('rectangle').should('have.value','rectangle')
    cy.get('#largeur').type('5')
    cy.get('#longueur').type('4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 18)
  })
  it('perimeter of rectangle longueur = -4 largeur = 5', () =>{
    cy.get('#figure').select('rectangle').should('have.value','rectangle')
    cy.get('#largeur').clear().type('5')
    cy.get('#longueur').clear().type('-4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 2)
  })
  it('perimeter of rectangle longueur=5 and largeur=4', () =>{
    cy.get('#figure').select('rectangle').should('have.value','rectangle')
    cy.get('#longueur').clear().type('5')
    cy.get('#largeur').clear().type('4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 18)
  })
})
describe('calcul perimeter of triangle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('perimeter').should('have.value','perimeter')
    cy.get('#figure').select('triangle').should('have.value','triangle')
    cy.get('.result').contains('perimeter')
  })
  it('perimeter of triangle side1 = -5 side2 = 5 side3 = -4', () =>{
    cy.get('#side1').type('-5')
    cy.get('#side2').type('5')
    cy.get('#side3').type('-4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', -4+5-5)
  })
  it('perimeter of triangle side1 = 5 side2 = 5 side3 = 4', () =>{
    cy.get('#side1').clear().type('5')
    cy.get('#side2').clear().type('5')
    cy.get('#side3').clear().type('4')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5+5+4)
  })
})
describe('calcul perimeter of circle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('perimeter').should('have.value','perimeter')
    cy.get('#figure').select('circle').should('have.value','circle')
    cy.get('.result').contains('perimeter')
  })
  it('perimeter of circle radius = -5', () =>{
    cy.get('#radius').type('-5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 2*(-5)*Math.PI)
  })
  it('perimeter of circle radius = 5', () =>{
    cy.get('#radius').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 2*(5)*Math.PI)
  })
})
describe('calcul perimeter of square', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#need').select('perimeter').should('have.value','perimeter')
    cy.get('#figure').select('square').should('have.value','square')
    cy.get('.result').contains('perimeter')
  })
  it('perimeter of square side = -5', () =>{
    cy.get('#side').type('-5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', (-5)*4)
  })
  it('perimeter of square side = 5', () =>{
    cy.get('#side').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5*4)
  })
})
describe('test of convertion', () => {
  it('convertion to Km', () => {
    cy.visit('http://localhost:4200')
    cy.get('#need').select('perimeter').should('have.value','perimeter')
    cy.get('#figure').select('square').should('have.value','square')
    cy.get('.result').contains('perimeter')
    cy.get('#side').clear().type('5')
    cy.contains("calcul of").click()
    cy.get('#result').should('have.value', 5*4)
    cy.get('#convertion-unit').select('km').should('have.value','km')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', 5*4*Math.pow(10,-3))
  })
  it('convertion to m', () => {
    cy.get('#convertion-unit').select('m').should('have.value','m')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', 5*4*Math.pow(10,0))
  })
  it('convertion to dm', () => {
    cy.get('#convertion-unit').select('dm').should('have.value','dm')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', 5*4*Math.pow(10,1))
  })
  it('convertion to cm', () => {
    cy.get('#convertion-unit').select('cm').should('have.value','cm')
    cy.contains("convert to").click()
    cy.get('#convertion').should('have.value', 5*4*Math.pow(10,2))
  })
})