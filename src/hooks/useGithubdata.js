import { graphql, useStaticQuery } from "gatsby"

// export const useGithubdata = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allGithubData {
//         nodes {
//           data {
//             user {
//               name
//               avatarUrl
//               bio
//               pinnedItems {
//                 nodes {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   const userdata = data.allGithubData.nodes[0].data.user
//   return userdata
// }

export const useGithubdata = () => {
  const result = useStaticQuery(graphql`
    {
      allGithubData {
        nodes {
          data {
            user {
              pinnedItems {
                nodes {
                  id
                  name
                  url
                  languages {
                    nodes {
                      name
                    }
                  }
                  homepageUrl
                  description
                  createdAt(formatString: "mm:ddd:yy")
                }
              }
            }
          }
        }
      }
    }
  `)
  const data = result.allGithubData.nodes[0].data.user.pinnedItems.nodes
  return data
}
