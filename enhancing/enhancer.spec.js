const enhancer = require('./enhancer.js');
// test away!
test('run the test', () => {
    expect(true).toBe(true);
});

describe('repair()', () => {
    it('should accept an item and return a new item with durability 100', () =>{
    //   const item = {
    //       name: 'Longclaw',
    //       type: 'sword',
    //       durability: 57
    //   };
    //   const repair = enhancer.repair(item);
        expect(repair(32).durability).toBe(100);
    })
})

// a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
// - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
// - a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.