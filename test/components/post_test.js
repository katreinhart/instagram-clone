import { renderComponent , expect } from '../test_helper';
import Post from '../../src/components/post';

describe('Post', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Post);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('should have class of post', () => {
    expect(component).to.have.class('post');
  });

});
