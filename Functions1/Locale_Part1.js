// Write a function that extracts the language code from a locale. A locale is a combination of a language code,
// a region, and usually also a character set, e.g en_US.UTF-8.

function extractLanguage(locale){
  return locale.substring(0,2);
}
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

// This problem can also be solved like so, where the original string is split into an array containing, in the
// first example ['en', 'US>UTF-8'] and then returning position 0 of that array where the 'en' lives.

function extractLanguage(locale) {
  return locale.split('_')[0];
}

