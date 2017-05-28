import { renderComponent , expect } from '../test_helper';
import Input from '../../src/components/input';

describe('Input', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Input);
  });

  it('should contain the text Submit', () => {
    expect(component).to.contain('Submit');
  });
});
