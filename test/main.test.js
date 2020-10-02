const { assert, expect } = require('chai')
const {
  somme,
  odd,
  half,
  fact,
  F,
  length,
  filter,
  map,
} = require('../src/main')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function factorial(num) {
  if (num === 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

describe('somme', () => {
  it('should return 0 when empty', () => {
    assert.equal(somme([]), 0)
  })
  const six = [0, 1, 2, 3]
  it(`should return 6 for [${six}]`, () => {
    assert.equal(somme(six), 6)
  })
  const ones = Array(51).fill(1)
  it(`should return 51 for [${ones}]`, () => {
    assert.equal(somme(ones), 51)
  })
  const rand = Array(12)
    .fill(1)
    .map(_ => getRandomInt(100))
  const sum = rand.reduce((acc, val) => acc + val, 0)
  it(`should return ${sum} for [${rand}]`, () => {
    assert.equal(somme(rand), sum)
  })
})

describe('odd', () => {
  it('should return [] when empty', () => {
    expect(odd([])).to.eql([])
  })
  const six = [0, 1, 2, 3]
  it(`should return [0, 2] for [${six}]`, () => {
    expect(odd(ones)).to.eql([0, 2])
  })
  const ones = Array(51).fill(1)
  it(`should return [] for [${ones}]`, () => {
    expect(odd(ones)).to.eql([])
  })
  const rand = Array(12)
    .fill(1)
    .map(_ => getRandomInt(100))
  const sum = rand.reduce((acc, val) => acc + val, 0)
  it(`should return [${rand.filter(e => e % 2 === 0)}] for [${rand}]`, () => {
    expect(odd(ones)).to.eql(rand.filter(e => e % 2 === 0))
  })
})

describe('half', () => {
  it('should return [] when empty', () => {
    expect(half([])).to.eql([])
  })
  const six = [0, 1, 2, 3]
  it(`should return [0, 2] for [${six}]`, () => {
    expect(half(ones)).to.eql([1, 3])
  })
  const ones = Array(51).fill(1)
  it(`should return [] for [${ones}]`, () => {
    expect(half(ones)).to.eql([])
  })
  const rand = Array(12)
    .fill(1)
    .map(_ => getRandomInt(100))
  const sum = rand.reduce((acc, val) => acc + val, 0)
  it(`should return [${rand.filter(e => e % 2 === 0)}] for [${rand}]`, () => {
    expect(half(ones)).to.eql(rand.filter((e, i) => i % 2 !== 0))
  })
})

describe('fact', () => {
  it('should compute fact', () => {
    assert.equal(fact(0), factorial(0))
    assert.equal(fact(1), factorial(1))
    assert.equal(fact(5), factorial(5))
    assert.equal(fact(6), factorial(6))
    assert.equal(fact(7), factorial(7))
    assert.equal(fact(10), factorial(10))
  })
})

describe('Fibonnaci', () => {
  it('should compute Fibonnaci', () => {
    assert.equal(F(0), 0)
    assert.equal(F(1), 1)
    assert.equal(F(5), 5)
    assert.equal(F(9), 34)
    assert.equal(F(13), 233)
    assert.equal(F(16), 987)
  })
})

describe('length', () => {
  it('should return 0 when empty', () => {
    assert.equal(length([]), 0)
  })
  const six = [0, 1, 2, 3]
  it(`should return 4 for [${six}]`, () => {
    assert.equal(length(six), 4)
  })
  const ones = Array(51).fill(1)
  it(`should return 51 for [${ones}]`, () => {
    assert.equal(length(ones), 51)
  })
  const rand = Array(12)
    .fill(1)
    .map(_ => getRandomInt(100))
  const sum = rand.reduce((acc, val) => acc + val, 0)
  it(`should return 12 for [${rand}]`, () => {
    assert.equal(length(rand), sum)
  })
})

const filterFun = a => a % 2 === 0

describe('filter', () => {
  it('should return [] when empty', () => {
    expect(filter([], filterFun)).to.eql([])
  })
  const six = [0, 1, 2, 3]
  it(`should return [0, 2] for [${six}]`, () => {
    expect(filter(ones, filterFun)).to.eql([0, 2])
  })
  const ones = Array(51).fill(1)
  it(`should return [] for [${ones}]`, () => {
    expect(filter(ones, filterFun)).to.eql([])
  })
  const rand = Array(12)
    .fill(1)
    .map(_ => getRandomInt(100))
  const sum = rand.reduce((acc, val) => acc + val, 0)
  it(`should return [${rand.filter(e => e % 2 === 0)}] for [${rand}]`, () => {
    expect(filter(ones, filterFun)).to.eql(rand.filter(e => e % 2 === 0))
  })
})

const mapFun = a => a * 2 + 5
describe('map', () => {
  it('should return [] when empty', () => {
    expect(map([], mapFun)).to.eql([])
  })
  const six = [0, 1, 2, 3]
  it(`should return [0, 2] for [${six}]`, () => {
    expect(map(ones, mapFun)).to.eql(six.map(mapFun))
  })
  const ones = Array(51).fill(1)
  it(`should return [] for [${ones}]`, () => {
    expect(map(ones, mapFun)).to.eql(ones.map(mapFun))
  })
  const rand = Array(12)
    .fill(1)
    .map(_ => getRandomInt(100))
  const sum = rand.reduce((acc, val) => acc + val, 0)
  it(`should return [${rand.map(mapFun)}] for [${rand}]`, () => {
    expect(map(ones, mapFun)).to.eql(rand.map(mapFun))
  })
})
