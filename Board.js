/**
 * このチュートリアルでは
 * X = -1
 * O = +1
 * 座標は左上が(0,0)、右下が(2,2)
 * としてマルバツゲームを実装します
 *
 * TODO と書かれている項目を実装してください
 */

class Board {
  //#dataに盤面の状態を保存します
  #data;

  //#nextに次の番がどちらであるかを保存します
  #next;

  //#turnに現在のターン数を保存します
  #turn;

  constructor() {
    //3*3の盤面を定義し、空のマスは0とします
    this.#data = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    //先攻はXなので#nextに入れておきます
    this.#next = -1; //X
    //ターン数を初期化しておきます
    this.#turn = 0;
  }

  get next() {
    //次の番はどちらであるかを返します
    return this.#next;
  }

  get turn() {
    //現在のターン数を返します
    return this.#turn;
  }

  canPut(x, y) {
    //TODO この座標(x,y)に新しく置けるかどうか確認します (xとyの方向に注意)
    //置ける場合はtrue、置けない場合はfalseを返しましょう
    //Hint: 条件はその座標が盤の範囲内か、そのマスに既に置かれていないかです
  }

  put(x, y) {
    const xo = this.#next; //今回置く番を取得します
    //TODO 念のためcanPutを使用してこの座標に置けるか確認しましょう (置けない場合の処理も考えてみましょう)

    //TODO #dataの座標(x,y)に xo を置きましょう (xとyの方向に注意)

    //TODO #turnを増やしましょう

    //TODO #nextを次の番に変更しましょう

    return true;
  }

  checkWin() {
    //TODO 勝利条件を満たしている場合はtrue、そうでない場合はfalseを返すメソッドを作りましょう
    //Hint: 3つ揃う可能性があるのは縦3パターン,横3パターン,斜め2パターンです
    //Hint: 各列の3つが等しいか比較するのもいいですが、足してみると…？
  }

  isEnd() {
    //TODO 終了条件を満たしている場合はtrue、そうでない場合はfalseを返すメソッドを作りましょう
    //Hint: 終了条件はどちらかが勝利した場合と？？
  }

  toArray() {
    //盤面を二次元配列として返します
    return this.#data;
  }
}

//結果表示を見やすくする関数
const displayResult = (array) => {
  const map = array.map((row) => {
    const str = row.map((val) => {
      if (val === -1) {
        return "X";
      } else if (val === +1) {
        return "O";
      } else {
        return " ";
      }
    });
    return `|${str}|`;
  });
  return map.join("\n");
};

//実際に使用してみましょう
const board = new Board();
console.log(`ターン数: ${board.turn}\n${displayResult(board.toArray())}\n`); //盤面の表示
const play = (x, y) => {
  if (board.isEnd()) {
    console.log("既に終了しています");
    return;
  }
  const res = board.put(x, y);
  if (!res) {
    console.log(`座標(${x},${y})には置けません`);
    return;
  }
  console.log(`ターン数: ${board.turn}\n${displayResult(board.toArray())}\n`); //盤面の表示
};

//xとyにそれぞれ好きな数字(0~2)を入れてみましょう
play(0, 0);

//xとyにそれぞれ好きな数字(0~2)を入れてみましょう
play(2, 2);

//以下好きなように書いて動作を確認してみてください
