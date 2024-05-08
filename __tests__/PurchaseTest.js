import Purchase from '../src/Purchase.js';

describe('로또 구입금액 테스트', () => {
  test('입력금액을 통해 구매수량 구하기', () => {
    const purchase = new Purchase(10000);
    const amount = purchase.getQuantity();
    expect(amount).toBe(10);
  });

  test('숫자가 아닌 문자를 입력했을 때 에러발생', () => {
    const invailedInput = '지섭햄 최고';
    const vailedate = new Purchase(invailedInput);
    expect(() => {
      vailedate.checkNunNumber(invailedInput);
    }).toThrow('[ERROR] 숫자가 아닌 값을 입력하실 수 없습니다.');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  //   test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
  //     expect(() => {
  //       new Lotto([1, 2, 3, 4, 5, 5]);
  //     }).toThrow('[ERROR]');
  //   });

  // 아래에 추가 테스트 작성 가능
});
