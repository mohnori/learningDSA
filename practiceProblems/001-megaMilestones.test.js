const { test, expect } = require("@jest/globals")
const getMegaNum = require("./001-megaMilestones")

test('MEGA number for [1..99.9] retuen 0 ', () =>{
    expect(getMegaNum(15)).toBe('not a mega')
})