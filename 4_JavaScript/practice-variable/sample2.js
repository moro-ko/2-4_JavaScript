// スコープ：有効範囲（定義した変数の有効範囲）グローバルスコープとローカルスコープが存在する
　// ローカルスコープ・・関数スコープ、ブロックスコープ

// varのスコープ：関数スコープ、グローバルスコープを宣言できる
  // var str = "webcamp" //グローバルスコープ

  // function foo() {
  //   console.log(str)
  //   var y = "hello" //関数スコープ
  // }

  // foo()
  // console.log(y)


// letのスコープ：ブロックスコープの宣言ができる
  // パターン１
  // function foo() {
  //   let x = "webcamp"
  //   {
  //     let y = "hello webcamp"
  //   }
  //   console.log(x)
  //   console.log(y)
  // }

  // foo()

  // パターン２
  // for (let i = 0; i < 10; i++) {
  //   console.log(i) 
  // }
  
  // console.log(i)


// constのスコープ：ブロックスコープの宣言ができる


// 巻き上げ
  var str = "webcamp"

  function foo() { 
    console.log(str)
    var str = "dmm webcamp"
    console.log(str)
  }

  foo()