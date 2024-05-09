/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Message.js';

class InputView {
  static async getInputMoney() {
    return Console.readLineAsync(INPUT_MESSAGE.purchase_amount);
  }

  static async getWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.winning_numbers);
  }

  static async getBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.bonus_number);
  }
}

export default InputView;
