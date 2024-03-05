
// Задание 1. Функция для проверки длины строки
function checkLength(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

checkLength('проверяемая строка', 20); // true
checkLength('проверяемая строка', 18); // true
checkLength(10); // false

// Задание 2. Функция для проверки, является ли строка палиндромом

function checkStringPalindrom(string) {
  let controlString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    controlString += string[i];
  }

  return string === controlString;
}

checkStringPalindrom ('tenet'); // true


