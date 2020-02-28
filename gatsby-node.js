const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allEnglishPost: allMarkdownRemark(filter: { frontmatter: { lang: { eq: "en" } } }) {
        totalCount
        edges {
          node {
            frontmatter {
              id
              title
              lang
            }
          }
        }
      }
      allSpanishPost: allMarkdownRemark(filter: { frontmatter: { lang: { eq: "es" } } }) {
        totalCount
        edges {
          node {
            frontmatter {
              id
              title
              lang
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const postsPerPage = 4; //config.POST_PER_PAGE;

    //Create enlgish blog pages
    const allEnglishPost = result.data.allEnglishPost;
    const englishNumPages = Math.ceil(allEnglishPost.totalCount / postsPerPage);
    Array.from({ length: englishNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve('./src/templates/Blog.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages: englishNumPages,
          currentPage: i + 1,
          lang: 'en',
        },
      });
    });
    // create english blog-posts
    const englishPosts = allEnglishPost.edges;
    englishPosts.forEach(({ node }, index) => {
      const next = index === 0 ? null : englishPosts[index - 1].node;
      const prev = index === englishPosts.length - 1 ? null : englishPosts[index + 1].node;
      createPage({
        path: `/blog/post/${node.frontmatter.id}`,
        component: path.resolve('./src/templates/Post.tsx'),
        context: {
          id: node.frontmatter.id,
          lang: node.frontmatter.lang,
          prev,
          next,
        },
      });
    });

    // Craete spanish blog pages
    const allSpanishPost = result.data.allSpanishPost;
    const spanishNumPages = Math.ceil(allSpanishPost.totalCount / postsPerPage);
    Array.from({ length: spanishNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `es/blog` : `es/blog/${i + 1}`,
        component: path.resolve('./src/templates/Blog.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages: spanishNumPages,
          currentPage: i + 1,
          lang: 'es',
        },
      });
    });

    // create spanish blog-posts
    const spanishPosts = allSpanishPost.edges;
    spanishPosts.forEach(({ node }, index) => {
      const next = index === 0 ? null : spanishPosts[index - 1].node;
      const prev = index === spanishPosts.length - 1 ? null : spanishPosts[index + 1].node;
      createPage({
        path: `/es/blog/post/${node.frontmatter.id}`,
        component: path.resolve('./src/templates/Post.tsx'),
        context: {
          id: node.frontmatter.id,
          lang: node.frontmatter.lang,
          prev,
          next,
        },
      });
    });
  });
};
