const { test, expect } = require("@jest/globals")
const {howMuchMega} = require("./001-megaMilestones")


test('final test',()=>{
    expect(howMuchMega(54)).toBe("not a mega milestone")
    expect(howMuchMega(143)).toBe('MEGA milestone')
    expect(howMuchMega(1000)).toBe('MEGA MEGA milestone')
    expect(howMuchMega(9999.9)).toBe('MEGA MEGA milestone')
    expect(howMuchMega(10000)).toBe('MEGA MEGA MEGA milestone')
    expect(howMuchMega(-9999.9)).toBe('MEGA MEGA milestone')
    expect(howMuchMega(0)).toBe('not a mega milestone')
})