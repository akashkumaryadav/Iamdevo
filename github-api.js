// github-api.js

exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
        name
        avatarUrl
        bio
        createdAt
        followers {
          totalCount
        }
        pinnedItems(first: 10) {
          nodes {
            ... on Repository {
              id
              name
              url
              createdAt
              description
              homepageUrl
              languages(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
  }
`
