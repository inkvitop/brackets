module.exports = function check(str, bracketsConfig) {
  let string = str;
  let check = 0;

  for (let index = 0; check < 150; index++) {
    let pair;

    if (string.search(/[0-9]/) >= 0) {
      pair = bracketsConfig[index].join('')
    }else {
      pair = `\\`+bracketsConfig[index][0]+`\\`+bracketsConfig[index][1]
    }

    string = string.replace(new RegExp(pair,'g'),"");

    if (index === bracketsConfig.length - 1) {
      index = -1
    }
    if (string.length === 0) {
      check = 160
    }
    check++
  }
  
  if (string.length === 0) {
    return true
    
  }if (string.length >= 1) {
    return false
  }
}




// const strEx = '([{}])';
// const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];

// check(strEx, bracketsConfig)


// function check(str, bracketsConfig) {
//   let string = str;
//   let check = 0;
//   console.log(string.length)
//   console.log(bracketsConfig.length)
  

//   for (let index = 0; check < 150; index++) {
//     console.log(`INDEX ` + index)
//     let pair;

//     if (string.search(/[0-9]/) >= 0) {
//       console.log(string.search(/[0-9]/))
//       pair = bracketsConfig[index].join('')
//     }else {
//       pair = `\\`+bracketsConfig[index][0]+`\\`+bracketsConfig[index][1]
//     }

//     console.log(pair + ` пара`);
//     console.log(typeof(pair));

//     console.log(`STRING ДО ` + string)
//     console.log(`STRING ДО ` + string.length)

//     string = string.replace(new RegExp(pair,'g'),"");

//     console.log(`STRING  ПОСЛЕ ` + string.length)
    

//     if (index === bracketsConfig.length - 1) {
//       index = -1
//     }
//     if (string.length === 0) {
//       check = 160
//     }
//     check++
//     console.log(check + ` CHECK`)
//     console.log(`*****************************************`)
//   }
  
//   if (string.length === 0) {
//     console.log(string.length)
//     return console.log(true)
    
//   }if (string.length >= 1) {
//     console.log(string.length)
//     console.log(typeof(string.length))
//     return console.log(false)
//   }
// }


