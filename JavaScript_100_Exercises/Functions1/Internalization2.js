// Building on your solutions from the previous exercises, write a function localGreet that takes a locale 
// as input, and returns a greeting. The locale allows us to greet people from different countries differently 
// also when they share the language, for example:

function localGreet(locale) {
  function extractRegion(locale){
    return locale.substring(3,5);
  }
  function extractLanguage(locale){
    return locale.substring(0,2);
  }
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  
  
  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
  function greet(language){
    switch (language){
      case 'en': 
      console.log('Hi!')
      break;
      case 'fr':
      console.log('Salut!')
      break;
      case 'pt':
      console.log('Olá!')
      break;
      case 'de':
        console.log('Hallo!')
        break;
      case 'sv':
        console.log('Hej!')
        break;
      case 'af':
        console.log ('Haai!')
        break;
      default:
        console.log('Sorry, I don\'t understand')
        break;
    }
  }
  
}
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA..UTF-8'); // 'Salut!'UTF-8'); // 'Salut!'
localGreet('fr_MA')