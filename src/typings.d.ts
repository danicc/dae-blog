declare module 'ptz-i18n' {
  export type LangMenuData = {
    langKey: string;
    selected: boolean;
    link: string;
  };
  /**
   * Get langs to create Menu
   * @param {[String]} langs lang keys ['en', 'fr', 'pt']
   * @param {String} currentLangKey current Lang Key
   * @param {func} getUrlForLang getUrlForLang curried, waiting for langKey
   * @returns {Array} langs menu data
   */
  export function getLangs(langs: string[], currentLangKey: string, getUrlForLang: getUrlForLang): LangMenuData[];

  /**
   * Get url to the language
   * @param {String} homeLink  link for the home page
   * @param {String} url  browser url
   * @param {String} langKey default browser language key
   * @returns {String} new url
   */
  export function getUrlForLang(homeLink: string, url: string, langKey?: string): string;

  /**
   * Get current language key from url.
   * @func
   * @param {[String]} langs allowed lang keys ['en', 'fr', 'pt']
   * @param {String} defaultLangKey default browser language key
   * @param {String} url browser url
   * @returns {String} current langKey
   */
  export function getCurrentLangKey(langs: string[], defaultLangKey: string, url: string): string;
}
