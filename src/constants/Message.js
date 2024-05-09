const INPUT_MESSAGE = Object.freeze({
  purchase_amount: '구입금액을 입력해 주세요.\n',
  winning_numbers: '\n당첨 번호를 입력해 주세요.\n',
  bonus_number: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  /*
   * 구입금액 입력 유효성 검사 메세지
   */
  non_numeric_money: '[ERROR] 구입금액은 숫자로만 입력해야 합니다.',
  empty_money: '[ERROR] 구입금액으로 공백을 입력하시면 안됩니다.',
  non_positive_money: '[ERROR] 구입금액은 0보다 커야합니다.',
  non_divisible_money: '[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.',

  /*
   * 당첨번호 입력 유효성 검사 메세지
   */
  out_of_length_lotto: '[ERROR] 로또 번호는 6개여야 합니다.',
  non_numeric_lotto: '[ERROR] 로또 번호는 숫자로만 입력해야합니다.',
  out_of_range_lotto: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  duplicate_lotto: '[ERROR] 로또 번호로 중복된 숫자를 입력하면 안됩니다.',
});

module.exports = {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
};
