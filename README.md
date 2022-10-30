# 디비디랩 사전과제

## 프론트엔드 개발자 정덕우

<br>

### 설치 및 실행

<br>

> git clone

```bash
> git clone https://github.com/jungdeokwoo/dbdlab-assignment.git

> cd dbdlab-assignment
```

> 관련패키지 설치

```bash
> npm install
```

> .env 생성

```bash
> 루트폴더에 .env 파일 생성 후에
NEXT_PUBLIC_API_URL='https://s3.us-west-2.amazonaws.com/secure.notion-static.com'

NEXT_PUBLIC_TOTAL_API_URL='84168dd6-1a38-4965-90a9-0f08f82280ed/getCovid19InfStateJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221030T140109Z&X-Amz-Expires=86400&X-Amz-Signature=f1e8935a3352662ee2ebb24d343f6a7278331b13d947bf05d43f977aa3272b31&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D"getCovid19InfStateJson.json"&x-id=GetObject'

NEXT_PUBLIC_AGEGEN_API_URL='9f70142f-4f22-4bf9-84d4-62ba9edfcdda/getCovid19GenAgeCaseInfJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221029T164008Z&X-Amz-Expires=86400&X-Amz-Signature=5d625ca3dac6a8a8adc0d678900bdae5ebef00c3b2c5c549a5f5abf634f77291&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D"getCovid19GenAgeCaseInfJson.json"&x-id=GetObject'

이 경로를 넣어주고 npm run dev 로 실행합니다.
```

<br>

<hr>

### 기능목록

<hr>
<br>

1. 사이드바 메뉴 클릭

- 선택된 Menu Item Color 변경

선택된 메뉴아이템 마다 각각의 경로로 라우팅 시키고 해당경로명을 메뉴이름과 비교하여 선택된 메뉴의
색상이 변경되도록 하였습니다.

- 해당하는 페이지로 push 후 메인섹션은 빈페이지로 라우팅(path는 임의설정)

Link태그를 이용하여 각각 해당하는 페이지로 push하고 메인섹션은 빈페이지로 라우팅 하였습니다.

<br>

2. 차트구현

- Stacked Bar Chart와 Pie Chart 구현하였습니다.
- Line Chart 관련은 구현하지 못하였습니다.

3. DATA를 활용한 구현

- Axios를 이용하여 데이터를 가져와 정적페이지를 만들고 받아온 데이터를 활용하여 각각의 차트를 구현하였습니다.

<br>

4. 그외

prettier, eslint 및 관련 플러그인 설치, 최대한 라이브러리를 활용하지 않고 구현하려 하였지만, Line Chart 및 레이아웃을 좀 더 변경하기 쉽도록 수치들을 변수화 시켜서 사용하지 못한점이 아쉬웠습니다.

### commit 컨벤션

<hr>

[feat] : 새로운 기능 추가

[fix] : 버그 수정

[docs] : 문서 관련

[style] : 스타일 변경

[refactor] : 코드 리팩토링
