export const MONEY = Object.freeze({
  unit: 1000,
  zero: 0,
  blank: '',
});

export const LOTTO = Object.freeze({
  length: 6,
  minimum: 1,
  maximum: 45,
});

export const LOTTO_RESULT = Object.freeze({
  FIFTH: {
    match: 3,
    bonus: false,
    prize: 5000,
  },
  FOURTH: {
    match: 4,
    bonus: false,
    prize: 50000,
  },
  THIRD: {
    match: 5,
    bonus: false,
    prize: 1500000,
  },
  SECOND: {
    match: 5,
    bonus: true,
    prize: 30000000,
  },
  FIRST: {
    match: 6,
    bonus: false,
    prize: 2000000000,
  },
});
