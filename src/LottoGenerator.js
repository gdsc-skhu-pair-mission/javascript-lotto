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
      lotto.sort((a, b) => a - b);
      lottos.push(lotto);
    }
    return lottos;
  },
};

module.exports = LottoMaker;
