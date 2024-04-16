import { sum } from "../sum";

test("retuning multiple of  number", () =>{
    const result = sum(9,8);
    expect(result).toBe(72);
})