/**
 *  Hello World #20
 *  by @georgemandis
 */

module.exports = () => {
  const _={H:{e:{l:{l:{o:{", ":{W:{o:{r:{l:{d:{}}}}}}}}}}}};

  const fn = hw => {
    let l;
    for (let i in hw) l = i + fn(hw[i]);    
    return l ? l : "";
  }
  
  return fn(_);
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
