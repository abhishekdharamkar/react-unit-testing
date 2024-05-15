import sum from "../BasicsJsTest/sum";

test.skip("testing fo sum function",()=>{       // name,callback,setTimeout (optional) parameter 
    expect(sum(20,20)).toBe(40)
})

test.skip("testing fo sum function handling zero",()=>{       // name,callback,setTimeout (optional) parameter 
    expect(sum(20,0)).toBe(20)
})

test.skip("testing fo sum function handling minus",()=>{       // name,callback,setTimeout (optional) parameter 
    expect(sum(-20,-20)).toBe(-40)
})