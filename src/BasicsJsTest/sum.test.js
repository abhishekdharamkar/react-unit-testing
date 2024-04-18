import sum from "./sum";

test("testing fo sum function",()=>{       // name,callback,setTimeout (optional) parameter 
    expect(sum(20,20)).toBe(40)
})

test("testing fo sum function handling zero",()=>{       // name,callback,setTimeout (optional) parameter 
    expect(sum(20,0)).toBe(20)
})

test("testing fo sum function handling minus",()=>{       // name,callback,setTimeout (optional) parameter 
    expect(sum(-20,-20)).toBe(-40)
})