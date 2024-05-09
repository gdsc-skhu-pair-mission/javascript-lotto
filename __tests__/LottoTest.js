/* eslint-disable no-new */
const Lotto = require('../src/Lotto');
const { ERROR_MESSAGE } = require('../src/constants/Message');

// eslint-disable-next-line max-lines-per-function
describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.out_of_length_lotto);
  });

  test('로또 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 3, 2, '굿', 4, 5]);
    }).toThrow(ERROR_MESSAGE.non_numeric_lotto);
  });

  // // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호가 1이상 45이하가 아닌경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 47, -1, 100, 120, 70]);
    }).toThrow(ERROR_MESSAGE.out_of_range_lotto);
  });

  test('로또 당첨 번호는 중복일 수 없습니다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 4, 5]);
    }).toThrow(ERROR_MESSAGE.duplicate_lotto);
  });

  // test(',테스트', () => {
  //   expect(() => {
  //     new Lotto([, 1, 2, 3, 4, 5]);
  //   }).toThrow('[ERROR]');
  // });

  // 아래에 추가 테스트 작성 가능
});
