import { renderHook } from '@testing-library/react-hooks';
import useVideoFetch from '../hooks/useVideoFetch';

describe('Test the video fetch function', () => {
  it('Should return a object', () => {
    const { result } = renderHook(() => useVideoFetch('8fETbjg9V-M'));
    expect(result.current.response).toMatchObject({
      channelTitle: 'Bleacher Report',
      description: `The Toronto Raptors and Boston Celtics are officially headed to a Game 7 following a wild 2OT finish. \n\nAfter the game, both teams had some final words for each other before getting separated. \n\nSubscribe: https://www.youtube.com/user/BleacherReport?sub_confirmation=1\r\nFollow on IG: http://www.instagram.com/f/bleacherreport\r\nFollow us on Twitter: http://www.twitter.com/bleacherreport\r\nLike us on Facebook: http://www.facebook.com/bleacherreport`,
      publishedAt: 'Wed Sep 09 2020',
      tags: [
        'bleacher report',
        'br',
        'nba',
        'boston celtics',
        'toronto raptors',
        'celtics raptors game 6',
        'raptors game 6 2OT',
        'marcus smart',
        'marcus smart trash talk',
        'kyle lowry',
        'pascal siakam',
        'og anunoby',
        'jayson tatum',
        'jaylen brown',
        'fred vanvleet',
        'norman powell',
        'raptors celtics 2020 nba playoffs',
        '2020 nba playoffs',
        'nba bubble',
      ],
      thumbnail: 'https://i.ytimg.com/vi/8fETbjg9V-M/hqdefault.jpg',
      title: 'Raptors-Celtics Exchange Some Words After 2OT Game 6',
      url: 'https://www.youtube.com/embed/8fETbjg9V-M',
      videoId: '8fETbjg9V-M',
    });
  });
});
