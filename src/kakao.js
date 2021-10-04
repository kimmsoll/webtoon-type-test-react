<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
import Kakao from '@/common/plugins/kakao.min';

if(!Kakao.isInitialized()){
    Kakao.init(process.env.REACT_APP_KAKAO_API);
}

Kakao.Link.createDefaultButton({
    container: '#kakao',
    objectType: 'feed',
    content: {
      title: '내 취향에 딱!맞는 웹툰은?',
      description: '웹툰 취향 테스트',
      imageUrl:
        './images/thumbnail.png',
      link: {
        mobileWebUrl: 'https://webtoon-test.netlify.app',
        androidExecutionParams: 'test',
      },
    },
    buttons:[
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://webtoon-test.netlify.app',
        },
      },
    ]
  });