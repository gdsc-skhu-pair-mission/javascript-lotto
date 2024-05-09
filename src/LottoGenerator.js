const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./constants/Constants');

const LottoMaker = {
  generate(quantity) {
    const lottos = [];
    while (lottos.length < quantity) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO.minimum,
        LOTTO.maximum,
        LOTTO.length,
      );
      lotto.sort((a, b) => a - b); // 각 로또 번호 세트를 오름차순으로 정렬
      lottos.push(lotto);
    }
    return lottos;
  },
};

module.exports = LottoMaker;
