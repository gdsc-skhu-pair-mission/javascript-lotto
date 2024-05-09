import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/Message.js';

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

export default OutPutView;
