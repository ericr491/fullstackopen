Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3001/api/login', {
    username, password
  }).then((response) => {
    console.log(response)
    localStorage.setItem('user', JSON.stringify(response.body))
  }).then(() => {
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('createBlog', ({ title, author, url }) => {
  cy.request({
    url: 'http://localhost:3001/api/blogs',
    method: 'POST',
    body: { author, url, title },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('user')).token}`
    },
  })

  cy.visit('http://localhost:3000')
})
