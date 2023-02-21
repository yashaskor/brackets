module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let brackets = {};
  let result = true;
  bracketsConfig.forEach((item) => {
      openBrackets.push(item[0]);
      closeBrackets.push(item[1]);
      brackets[item[0]] = item[1];
  });
  for (let i = 0; i < str.length; i++) {
      if (openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {
          if (stack[stack.length - 1] === str[i]) {
              stack.pop();
          } else {
              stack.push(str[i]);
          }
      } else if (openBrackets.includes(str[i])) {
          stack.push(str[i]);
      } else if (closeBrackets.includes(str[i])) {
          if (stack.length === 0) {
              result = false;
              break;
          }
          if (brackets[stack[stack.length - 1]] === str[i]) {
              stack.pop();
          } else {
              result = false;
              break;
          }
      }
  }
  if (stack.length > 0) {
      result = false;
  }
  console.log(result);
  return result;
}
