describe('date-utils.js', function(){
  describe('isValid', function(){
 
    it('年月日指定（時分秒省略）', function(){
      expect(Date.isValid(2014, 1, 1)).to.eql(true);
    });
 
    it('年月日時指定（分秒省略）', function(){
      expect(Date.isValid(2014, 1, 1, 1)).to.eql(true);
    });
 
    it('年月日時分指定（秒省略）', function(){
      expect(Date.isValid(2014, 1, 1, 1, 2)).to.eql(true);
    });
 
    it('年月日時分秒指定（ミリ秒省略）', function(){
      expect(Date.isValid(2014, 1, 1, 1, 2, 3)).to.eql(true);
    });
 
    it('年月日時分秒ミリ秒指定', function(){
      expect(Date.isValid(2014, 1, 1, 1, 2, 3, 456)).to.eql(true);
    });
 
    it('ミリ秒指定が4桁の場合NG', function(){
      expect(Date.isValid(2014, 1, 1, 1, 2, 3, 4567)).to.eql(false);
    });
  });
});