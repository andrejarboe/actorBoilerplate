import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>"Actors's Name" latest Blog Post</h1>
    {data.allMarkdownRemark.edges.map(post => {
      if (post.node.frontmatter.layout === 'blog') {

        console.log(post);
        return (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <p>{post.node.frontmatter.date}</p>
            <Link to={post.node.frontmatter.date}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        )
      }
      else{
        return <h3>No blog Post</h3>
      }
    })}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            layout
            path
            date
          }
        }
      }
    }
  }
`

export default BlogPage
