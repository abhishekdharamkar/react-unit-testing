import sum from "../BasicsJsTest/sum";

test("testing fo sum function",()=>{ 
    expect(sum(20,20)).toBe(40)
})

test("testing fo sum function handling zero",()=>{ 
    expect(sum(20,0)).toBe(20)      
})

test("testing fo sum function handling minus",()=>{  
    expect(sum(-20,-20)).toBe(-40) 
})