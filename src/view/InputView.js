import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  getInputMoney = async () => {
    return Console.readLineAsync("구입금액을 입력해 주세요.\n");
  };

  getWinningNumbers = async () => {
    return Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  };

  getBonusNumber = async () => {
    return Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  };
}
