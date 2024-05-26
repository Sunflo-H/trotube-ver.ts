# Project : Youtube ver.trot

# Stack

- HTML
- CSS
- React
- TypeScript
- Youtube Api

# Libray

- Tailwind CSS
- React Query
- React Router
- Axios
- Timeago.js

# 목표

할머니께서 아침잠이 없으셔서 일찍 일어나셨을 때 적적하게 보내지 마시고 트로트 및 유튜브 영상 보시라고 만들게 되었습니다.

1. Youtube Api를 사용해서 영상 가져오기, 재생하기
2. 미스터 트롯에 대한 영상들로 홈화면을 가득 채우기
3. 보기 쉽고, 이해하기 쉽고, 터치하기 쉬운 큼직한 UI
4. 반응형 웹

# 기능

1. 동영상 재생
2. 연관 동영상 리스트
3. 동영상 검색

# 스크린샷

## Full

### Home

![image](https://github.com/Sunflo-H/trotube/assets/70611956/52cf4692-c1e5-406a-8c3b-13b4339577ed)

### Video Detail

![image](https://user-images.githubusercontent.com/70611956/219988244-f737c311-75d2-4eb3-acf6-9aa5ae5a598d.png)

### Search

![image](https://user-images.githubusercontent.com/70611956/219988276-cb20feea-c646-4bc7-9589-e5da14035e84.png)

## Video List

![image](https://user-images.githubusercontent.com/70611956/219988035-f4719560-cc5a-4974-902f-7695ec7e873f.png)

## Video

![image](https://user-images.githubusercontent.com/70611956/219988059-8e99bd20-c9e9-4667-885a-cc98322aca82.png)

## Related Video

![image](https://user-images.githubusercontent.com/70611956/219988197-63d4f69f-fe11-4274-b44a-d413a272c2a5.png)

# 어려웠던점

### 1. 디자인

아무래도 각 UI들이 가지는 의미를 할머니께서 알 수 있도록 해야 했기 때문에
미스터트롯의 Top 7 가수와 라운드별 노래들을 최대한 직관적으로 보이는 디자인을 만들어야 했습니다.
그리고 주로 모바일로 이용할 것이기 때문에 반응형이라는 조건도 만족해야 했습니다.
핀터레스트의 여러 디자인을 참고하며 홈 화면의 디자인을 여러번 시도해보고 지금의 디자인으로 자리잡았습니다.

### 2. 타입스크립트 적용

타입스크립트를 사용하면서 어렵지만 최대한 정확하게 타입을 입력하려고 노력했습니다.  
그 중 이벤트 핸들러의 타입이 가장 어려웠던 것 같습니다.  
처음에는 이게 무슨 타입인가 했지만 마우스를 올리면 타입에 대한 정보가 나오는 것을 알게 되었고,  
그 정보를 토대로 react-query 의 타입과, fetch한 여러 타입들을 제대로 다룰 수 있었습니다.
