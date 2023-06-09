### 목적

- learn typescript, react.js, next.js

  - understand reason why use typescript rather than javascript and feel benefits of typescipt
  - why managing states is so complex? Just because am i not familiar with it? how to do it easiliy?
  - what is benefits of using next.js? Is it really good enough?

- get used to build systems? package manager?

  - npm, npx?, yarn?
  - babel, webpack?

- write a simple website app with...
  - [todo-list 프로그램](https://docs.google.com/presentation/d/163ZmA14C4OGB85QnlXMOo9vO9KFN3YzXYbTYPW7wngs/edit#slide=id.p4)
    - 기능
      - [ ] todo-list 메인 화면
        - [x] 상단
        - [x] 할 일 목록 표시
          - [x] 정렬. 우선순위, 최신 작업 여부에 따라 상단에 배치
          - [x] 이동 버튼 아이콘으로 표시하기 (아이콘 적용했는데도 좀 안예쁨)
          - [ ] 내용이 많든 적든 카드 크기 고정하기?
        - [ ] 할 일 수정
        - [ ] 할 일 삭제
        - [x] 할 일 이동
        - [ ] **할 일 카드에 애니메이션 넣어보기!?**
      - [x] 할 일 등록 모달
        - [x] 할 일 생성
        - [x] 모달 validation
          - [x] 모든 필드 입력
          - [x] 입력 길이 제한 및 유효한 문자 검사
    - 비기능
      - [x] redux 설정 (redux-toolkit, typescript)
      - [x] form 훅을 사용하도록 개선 (react-hook-form)
      - [ ] 환경변수 (local, local-docker, aws 환경)
    - Backends
      - [ ] 단순 데이터 저장용 처리 서버 만들고, 서버로부터 데이터받는걸로 바꾸기
      - [ ] 도커파일 작성해보기
      - [ ] aws 배포하기
      - [ ] github action workflow 작성해서 CI/CD 하기
    - 구현한 화면
      ![스크린샷 2023-05-28 오후 8 39 01](https://github.com/roon-replica/next.js-website/assets/100839953/d089406c-ecf9-492c-8f8f-032c1def1c7e)
      ![스크린샷 2023-05-28 오후 6 50 05](https://github.com/roon-replica/next.js-website/assets/100839953/e3500c9b-3f48-4785-b8e1-9498d4470a09)

### 설정

- `npx create-next-app@latest --typescript`
- css

  - tailwind
    - `yarn add tailwindcss`
    - [tailwind css install](https://tailwindcss.com/docs/installation)
  - [daisy ui](https://daisyui.com/docs/install/)

- redux
  - `yarn add redux`
  - `yarn add @reduxjs/toolkit`

### references

- [react.js](https://react.dev/learn/describing-the-ui)
- [next.js](https://nextjs.org/docs/getting-started)
- [typescript에서 fetch 사용하기](https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257)
- [tailwind 검색해서 쓰셈](https://tailwindcss.com/docs/font-size)
- [daisy ui 검색해서 쓰셈](https://daisyui.com/components/radio/)
- [react-hook-form](https://react-hook-form.com/get-started#Quickstart)
- [react heroicons](https://github.com/tailwindlabs/heroicons)

---

### open api

- [경기데이터드림 버스 정류장 현황](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=3&rows=10&sortColumn=VIEW_CNT&sortDirection=DESC&infId=GDKWAGWYRKJYIRVX110226832213&infSeq=1&order=3&srvCd=A)
