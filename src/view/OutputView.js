/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message.js';

class OutPutView {
  static showLottoCount(lottoCount) {
    return Console.print(OUTPUT_MESSAGE.purchase_count(lottoCount));
  }

  static showLottoNumbers(lotto) {
    Console.print(lotto);
  }

  static async getBonusNumber() {
    return Console.readLineAsync();
  }
}

export default OutPutView;
