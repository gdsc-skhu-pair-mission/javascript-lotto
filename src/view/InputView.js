const { Console } = require('@woowacourse/mission-utils');

class InputView {
  static async getInputMoney() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static async getWinningNumbers() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  static async getBonusNumber() {
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }
}

module.exports = InputView;
