const f = require("../02_multiplos.js")

describe ("Funcion isMultiplo", () => {

    it('should be true that 20 is multiple of 2', () => {
         expect(f.isMultiplo(20, 2)).toBeTruthy()
    });


    it('should be error if"pepe" multiple of 2', () => {
        expect( () => f.isMultiplo(20,'pepe') ).toThrow()
    });
})


it('should be true that 21 is multiple of 2', () => {
    expect(f.isMultiplo(21, 2)).toBeFalsy()
});


it('should be true that -21 is multiple of 2', () => {
    expect(f.isMultiplo(-21, 2)).toBeFalsy()
});

it('should be true that -20 is multiple of 2', () => {
    expect(f.isMultiplo(-20, 2)).toBeTruthy()
});


it (should be rerturn an array...""), () =>{
    const aDatos = [1,2,3,4,5,6,7,8,9]

const n 3
expect(f.extraerMultiplos)(ndatos)
}