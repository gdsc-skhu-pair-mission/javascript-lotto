const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/Message');

class OutPutView {
  static async showLottoCount(lottoCount) {
    return Console.Print(OUTPUT_MESSAGE.purchase_count(lottoCount));
  }

  static async showLottoNumbers(lottos) {
    return Console.Print(`${lottos}\n`);
  }

  static async getBonusNumber() {
    return Console.readLineAsync();
  }
}

module.exports = OutPutView;
