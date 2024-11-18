// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hours, minutes] = time.split(':').map(Number);
  //special cases for midnight and midday
  if (minutes === 0) {
    if (hours === 0) return 'midnight';
    if (hours === 12) return 'midday';
  }

  //hour words lookup
  const hourWords = {
    0: 'midnight', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
    5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'noon'
  };


  //convert number to words with hyphenation for numbers > 20
  function numberToWords(n) {
    const words = {
      1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
      6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
      11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
      15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
      19: 'nineteen', 20: 'twenty'
    };
    if (n <= 20) return words[n];
    return `twenty-${words[n - 20]}`;
  }

  function getHourWord(hour) {
    if (hour === 0) return 'midnight';
    if (hour === 12 ) return 'noon';
    return hourWords[hour % 12 || 12];
  }

  const currentHourWord = getHourWord(hours);
  const nextHourWord = getHourWord((hours + 1) % 24);

  if(minutes === 0) {
    return `${currentHourWord} o'clock`;
  }
  if(minutes === 15) {
    return `quarter past ${currentHourWord}`;
  } 
  if(minutes === 30) {
    return `half past ${currentHourWord}`;
  }
  if(minutes === 45) {
    return `quarter to ${nextHourWord}`;
  }
  if(minutes < 30) {
    return `${numberToWords(minutes)} past ${currentHourWord}`;
  }
  return `${numberToWords(60-minutes)} to ${nextHourWord}`;
}

module.exports = { convertTimeToWords };