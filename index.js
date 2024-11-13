// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  first_part = time.split(":")[0]
  second_part = time.split(":")[1]
  dict = {"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen", "20": "twenty", "21": "twenty-one", "22": "twenty-two", "23": "twenty-three", "24": "twenty-four", "25": "twenty-five", "26": "twenty-six", "27": "twenty-seven", "28": "twenty-eight", "29": "twenty-nine”, "30": "thirty"}
  if (time === "0:00") { 
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  } else if (parseInt(second_part) < 30) {
    converted_second_part = dict[second_part];
    converted_first_part = dict[first_part];
    combined_res = converted_second_part + 'pass' + converted_first_part;
  } else if (parseInt(second_part) > 30) {
    second_part_int = parseInt(second_part)
    deducted_second_part = 60 - second_part_int;
    char_second_part = dict[deducted_second_part];
    converted_second_part = dict[second_part];
    converted_first_part = parseInt(first_part) + 1;
    char_first_part = dict[converted_first_part]; #three

    combined_res = char_second_part + 'to' + char_first_part;

  return 'half past eight';
}

module.exports = { convertTimeToWords };