import Purchase from "../src/Purchase.js";

describe("로또 구입금액 테스트", () => {
  test("입력금액을 통해 구매수량 구하기", () => {
    const purchase = new Purchase("10000");
    const amount = purchase.getQuantity();
    expect(amount).toBe(10);
  });

  test("0이하의 숫자를 입력할 경우 에러 발생", () => {
    expect(() => {
      new Purchase("-1");
    }).toThrow("[ERROR] 숫자가 0보다 작으면 안됩니다.");
  });

  test("숫자가 아닌 경우 에러 발생", () => {
    expect(() => {
      new Purchase("굿");
    }).toThrow("[ERROR]");
  });

  test("공백을 입력한 경우 에러 발생", () => {
    expect(() => {
      new Purchase(" ");
    }).toThrow("[ERROR]");
  });

  test("1000으로 나누어 떨어지지 않으면 에러 발생", () => {
    expect(() => {
      new Purchase("30");
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  //   test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
  //     expect(() => {
  //       new Lotto([1, 2, 3, 4, 5, 5]);
  //     }).toThrow('[ERROR]');
  //   });

  // 아래에 추가 테스트 작성 가능
});
