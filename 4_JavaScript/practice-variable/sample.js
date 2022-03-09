// 再宣言：一度宣言した変数名で再度変数宣言を行うこと
// 再宣言はvarのみで実行可能

// varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)


// 再代入：変数に値を代入した後に別の値を代入すること
// 再代入はvar,letで実行可能

// varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// constによる再代入
const nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)