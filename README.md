# 🔅VELOG 클론 코딩🔅

## 프로젝트 소개 
#### 클론 코딩 주제 : 벨로그
#### 작업 기간 : 2022.12.23 ~ 2022.12.29
## 작업 노션 
https://crystalline-jasper-952.notion.site/3-Velog-949b7206d3ea4a64a92860e6865354df
## 배포 주소🔥
https://clone-velog.vercel.app/
## Members 🤹
😁 이승재(FE / REACT) <br/>
😁 장세화(FE / REACT) <br/>
😁 최지현(FE / REACT) <br/>
😁 권태형(BE / NODE.JS) <br/>
😁 이지용(BE / NODE.JS) <br/>
😁 최지호(BE / NODE.JS) <br/>

## 주요 기능 
- 회원가입
- 로그인
- 게시글 CRUD
- 댓글 CRUD
- 게시글 최신 정렬
- 마이페이지

## 기술 스택
- REACT
- REDUX TOOLKIT
- AXIOS
- STYLED COMPONENTS
- REACT ROUTER
- VERCEL

## 트러블 슈팅 
### ✔️ 렌더링 관련 트러블 슈팅  
- 게시글을 들어가서 상세 정보를 GET 해오는 과정에서 useSelector로 가져온 상세 정보가 undefined로 찍히며 화면이 나가는 문제 발생
- useEffect로 params를 dispatch에 실어 보내는 사이에 렌더링이 먼저 일어나며 생긴 문제로 판단
- 시도 1 : useEffect의 의존성 배열에 useSelector로 가져온 값을 넣음 -> 무한 렌더링 발생
- 시도 2 : 상세 정보가 렌더링될 때 dispatch를 보내는 것이 아닌, 앞서 게시글을 누를 때 dispatch를 보내도록 로직을 짬 -> 실패
- 시도 3 : 상세 정보에 옵셔널 체이닝 적용 -> 화면이 나가는 것만 막음
- 시도 4 : 서버와 통신하는 시간 때문인 것 같아 axios thunk함수에서 fulfillWithValue 리턴값으로 response가 아닌 payload를 리턴해 extraReducer에서 필터를 돌려 봤지만 실패 -> 서버와 통신이 실패했냐 안 했냐를 기다려야 한다는 점에서 같은 결과였음
- 해결 : 옵셔널 체이닝을 주고 isLoding을 useSelector로 가져와 useEffect의 의존성 배열에 추가해주니 서버와 통신이 끝나고 로딩이 끝나는 순간 리렌더링이 일어나며 해결
### ✔️ 디테일 페이지 관련 트러블 슈팅 
- 로그인한 userId를 localstorage에서 getItem 으로 꺼내서 활용 콘솔에 동일한 userId가 찍혀도 삼항연산자가 작동하지 않아서 로그인 할때 state에 저장한 userId를 활용했더니 해결
- localStorage userId는 문자열이고 state는 Number로 타입이 달랐던 문제
