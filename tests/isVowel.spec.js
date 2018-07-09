describe('isVowel()', function() {
    it('debería devolver true para letra a',()=>{
        assert.equal( isVowel('a'), true);
    });
    
    it('debería devolver false para letra b',()=>{
        assert.equal( isVowel('b'), false);
    });
});