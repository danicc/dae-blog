export default {
  pathPrefix: '/dae-blog', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Daniel Esquinazi Blog', // Navigation and Site Title
  siteTitleAlt: 'Personal blog', // Alternative Site title for SEO
  siteUrl: 'https://danicc.github.io/dae-blog', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/dae-blog/assets/bg.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/dae-blog/assets/bg.jpg', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Articles about React, Javascript and frontend technologies', // Your site description
  author: 'Daniel Esquinazi', // Author for schemaORGJSONLD
  siteLogo: '/dae-blog/assets/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@dani_esquinazi', // Twitter Username - Optional
  ogSiteName: 'daniel', // Facebook Site Name - Optional
  ogLanguage: 'es', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-XXXXXXX',
  POST_PER_PAGE: 4,
};
