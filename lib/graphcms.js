async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_PROJECT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_PROD_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const json = await res.json()
  
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json.data
  }

  export async function getAllPosts() {
    const data = await fetchAPI(
        `
        {
          posts(orderBy: date_DESC, first: 20) {
            title
            slug
            excerpt
            date
            coverImage {
              url(transformation: {
                image: {
                  resize: {
                    fit:crop,
                    width:2000,
                    height:1000
                  }
                }
              })
            }
          }
        }
      `
      )
      return data.posts
  }

  export async function getPost(slug) {
    const data = await fetchAPI(
      `
      query PostBySlug($slug: String!) {
        post(where: {slug: $slug}) {
          title
          slug
          content {
            html
          }
          date
          ogImage: coverImage {
            url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
          }
          coverImage {
            url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
          }
        }
      }
    `,
      {
        variables: {
          slug,
        },
      }
    )
    return data
  }

  export async function getAllProjects() {
    const data = await fetchAPI(
      `
      query AllProjects {
        projects {
          title
          excerpt
          url
          download
          coverImage {
            url(transformation: {
              image: {
                resize: {
                  fit:crop,
                  width:2000,
                  height:1000
                }
              }
            })
          }
        }
      }
      `
    )
    return data.projects
  }

  export async function createMessage(name, email, subject, message) {
    const date = new Date()

    const data = await fetchAPI(
      `mutation createMessage($name: String!, $email: String!, $subject: String!, $message: String!, $date: DateTime!) {
        createMessage(
          data: {name: $name, email: $email, subject: $subject, message: $message, date: $date}
        ) {
          id
        }
      }`,
      {
        variables: {
          name: name,
          email: email,
          subject: subject,
          message: message,
          date: date.toISOString()
        }
      }
    )

    return data
  }