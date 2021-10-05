export const shareKakao = () => {
  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나에게 딱!맞는 웹툰은?',
      description: '테스트를 통해 내가 원하는 웹툰을 찾을 수 있어요',
      imageUrl:
        './images/thumbnail.png',
      link: {
        mobileWebUrl: 'https://webtoon-test.netlify.app',
        webUrl: 'https://webtoon-test.netlify.app',
      },
    },
    buttons: [
      {
        title: '테스트하러 가기',
        link: {
          mobileWebUrl: 'https://webtoon-test.netlify.app',
          webUrl: 'https://webtoon-test.netlify.app',
        },
      },
    ],
  })
};