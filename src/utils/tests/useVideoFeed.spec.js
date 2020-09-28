import { renderHook } from '@testing-library/react-hooks';
import useVideoFeed from '../hooks/useVideoFeed';

describe('Test the video feed function', () => {
  it('Should return an array of objects', () => {
    const { result } = renderHook(() =>
      useVideoFeed({ relatedId: 'videID', searchQuery: 'My query' })
    );
    expect(result.current.videos.length).toBe(10);
  });
});
