function extractRegion(locale){
  return locale.substring(3,5);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

// We could also approach this in a similar way to the previous problem, by splitting the array twice 
// (at . then at _ ) and selecting the piece of the array with the desired substring:

function extractRegion(locale) {
  return locale.split('.')[0]
                .split('_')[1];
}
