const isValid = (s) => {
    let stack = [];
    const map = new Map([
      ['(', ')'],
      ['{', '}'],
      ['[', ']'],
    ]);
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
        stack.push(s[i]);
      } else {
        const last = stack.pop();
        if (s[i] !== map.get(last)) {
          return false;
        }
      }
    }
  // hello world
    return stack.length === 0;
  };

console.log(isValid("(()){}"))