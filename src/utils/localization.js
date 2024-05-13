export default function getLanguage(navigator) {
  const browserLanguage = (navigator.language || navigator.userLanguage)?.split('-')[0];
  return browserLanguage || 'en';
}
