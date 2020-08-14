import {compute} from './compute';
describe('compute', () =>{
    it('should return 0 if input negative', () =>{
        const result = compute(-1);
        expect(result).toBe(0);
    });
    
    it('should return 2 if input possitive', () =>{
        const result = compute(1);
        expect(result).toBe(2);
    });
}) // suite
