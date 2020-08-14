import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(()=>{ component = new VoteComponent();});  // tear down before test each function generate a new component obj  afreEach aferAll beforeAll

  it('should increase total votes', () => {
    //let component = new VoteComponent();
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrease totl votes', () => {
    //let component = new VoteComponent();
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});