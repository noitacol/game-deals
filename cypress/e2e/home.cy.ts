describe('Ana Sayfa', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('tüm bölümleri gösteriyor', () => {
    cy.get('h2').contains('Trend Oyunlar')
    cy.get('h2').contains('Yaklaşan İndirimler')
    cy.get('h2').contains('En Popüler Oyunlar')
    cy.get('h2').contains('Oyun Kategorileri')
  })

  it('oyun kartları doğru şekilde yükleniyor', () => {
    cy.get('[data-testid="game-card"]').should('have.length.at.least', 1)
  })
}) 