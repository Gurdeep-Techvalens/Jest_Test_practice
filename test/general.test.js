function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  }
  class A{

  }
  const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };

describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
      const drink = jest.fn(()=>'abab');
      drinkAll(drink, 'lemon');
      drinkAll(drink, 'lemon');
      jest.isMockFunction(drinkAll)
      expect(drink).toHaveBeenCalled();
      expect(drink).toHaveReturnedTimes(2)
      expect(drink).toHaveReturnedWith('abab')
      expect(drink).not.toHaveLength(4)
      expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
      expect(new A()).toBeInstanceOf(A)
      expect(can1).toHaveProperty('ounces', 12);
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'octopus');
      expect(drink).not.toHaveBeenCalled();
    });
  });

describe('Object comparison', () => {
    test('have all the same properties', () => {
      expect(can1).toEqual(can2);
    });
    test('are not the exact same can', () => {
      expect(can1).not.toBe(can2);
    });
    test('match reqex', () => {
      expect(can1.flavor).toMatch(/grapefruit/);
    });
});

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],])('add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  })
})

const video = {
  play() {
    return true;
  },
};
describe("Spyon function",()=>{
  test('plays video', () => {
    const spy = jest.spyOn(video, 'play');
    const isPlaying = video.play();

    expect(spy).toHaveBeenCalled();
    expect(isPlaying).toBe(true);
    console.log(jest.now()) //current time
  });
})

