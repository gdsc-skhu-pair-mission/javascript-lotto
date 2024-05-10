/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message.js';

class OutPutView {
  static showLottoCount(lottoCount) {
    Console.print(OUTPUT_MESSAGE.purchase_count(lottoCount));
  }

  static showLottoNumbers(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  }

  static showStatistics(statistics) {
    Console.print(OUTPUT_MESSAGE.winning_statistics(statistics));
  }

  static showProfit(profit) {
    Console.print(OUTPUT_MESSAGE.total_profit(profit));
  }
}

export default OutPutView;
