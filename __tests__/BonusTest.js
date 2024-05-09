/* eslint-disable no-new */
const Bonus = require('../src/Bonus');
const { ERROR_MESSAGE } = require('../src/constants/Message');

// eslint-disable-next-line max-lines-per-function
describe('보너스 클래스 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외 발생', () => {
    expect(() => {
      new Bonus('굿');
    }).toThrow(ERROR_MESSAGE.non_numeric_bonus);
  });

  test('보너스 번호 테스트', () => {
    const bonus = new Bonus('5');
    const bonusNumber = bonus.getBonusNumber();
    expect(bonusNumber).toBe(5);
  });

  test('보너스 번호가 1부터 45의 숫자가 아닌경우 예외 발생', () => {
    expect(() => {
      new Bonus('46');
    }).toThrow(ERROR_MESSAGE.out_of_range_bonus);
  });
});
