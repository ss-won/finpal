# Finpal 홈페이지 구현
- 2019.07-08 인턴 및 현장실습으로 진행한 홈페이지 1차 배포본에 대한 코드입니다.
- html, css, js(jQuery) 프론트단쪽은 정적웹사이트 스크립트를 회사측에서 구매한 것을 토대로 재배열 및 customize하여 구현한 것입니다.
- 현재 다른 분에게 인수인계되어 [웹사이트](http://schoolinvr.com)가 변경되었습니다.

## EXAMPLES
> config.js 정보가 없어서 현재 DEMO 버전은 실행이 안됩니다. ㅠㅠ
AWS RDS로 연결 후 다시 업로드 하겠습니다.

해당 프로젝트 demo를 보시려면, 아래와 같이 진행하신 후
http://localhost:3000 로 접속하세요.

```bash
# 해당 레포지토리 다운로드
git clone https://github.com/ss-won/finpal
# 디렉토리 이동
cd finpal
# npm 모듈 install
npm i
# run
npm run start
```

## OUTPUTS
### 성과
- Node.js(Express) + Mysql을 이용한 세션저장/로그인인증/게시판기능 구현
- 화면 렌더링시 필요한 User 유효성 여부 검사 메소드 구현
- AWS Elastic Beanstalk으로 배포 RDS(mysql) 구성
- 홈페이지 기획부터 참여하여 실제 개발기간은 2주일, 1인으로 개발 실습 진행하였음

### 구현 화면
> 아래 이미지는 Demo version의 화면으로, 게시물을 회사와 무관합니다.

![](https://media.vlpt.us/images/ss-won/post/fbbe35da-35fe-4bf7-b161-81ca78a19de4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.29.30.png)
![](https://media.vlpt.us/images/ss-won/post/0f4accb4-cd20-4804-9597-3eac8f23deba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.29.44.png)
![](https://media.vlpt.us/images/ss-won/post/0e08adcf-0236-4e62-ab02-4a30b4a9aa20/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.30.08.png)
![](https://media.vlpt.us/images/ss-won/post/c1665242-a81a-4c4f-b2f7-29f2bd6eaafe/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.30.13.png)
![](https://media.vlpt.us/images/ss-won/post/dc007dd8-2171-4856-841a-2c97b632428e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.30.34.png)
![](https://media.vlpt.us/images/ss-won/post/423181be-3ad3-4b79-9e44-c8c2bfdc0cea/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-09-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.30.46.png)
