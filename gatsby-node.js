const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allEnglishPost: allMarkdownRemark(filter: { frontmatter: { lang: { eq: "en" } } }) {
        totalCount
      }
      allSpanishPost: allMarkdownRemark(filter: { frontmatter: { lang: { eq: "es" } } }) {
        totalCount
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const postsPerPage = 4; //config.POST_PER_PAGE;

    //Create enlgish blog pages
    const englishPostsTotalCount = result.data.allEnglishPost.totalCount;
    const englishNumPages = Math.ceil(englishPostsTotalCount / postsPerPage);
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

    // Craete spanish blog pages
    const spanishPostsTotalCount = result.data.allSpanishPost.totalCount;
    const spanishNumPages = Math.ceil(spanishPostsTotalCount / postsPerPage);
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
  });
};
