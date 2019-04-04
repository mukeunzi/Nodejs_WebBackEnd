# Git / GitHub 익히기
git과 github는 java, javascript 만큼 다르다. git은 DVCS(분산 버전 관리 시스템)이고, github는 git 호스팅 사이트이다.(개발자의 sns같은..)

----

## git을 왜 사용할까???

프로젝트의 규모가 커질수록 관리의 효율성이 높아지기 때문

- 충돌해결
- 롤백(커밋항목 되돌리기)
- 이력관리(범인찾기..)
- 복잡도를 줄이기 위해

----

## git의 작동원리와 명령어

** 1. 새로운 저장소 만들기**

    git init

git으로 관리하고싶은 파일 안에서 명령어를 시작하면 .git 파일이 생성된다.(껍데기만 생성)

----

**2. 저장소 받아오기**

    git clone add origin [원격 저장소 경로]

----

**3. 추가와 확정**

    git add [파일명]
    git add .(모든 파일)
    git commit -m "commit message"

- commit은 게임의 세이브포인트와 같음
- 스테이지의 내용들을 가지고 커밋객체를 만드는 행위
- 한 번 commit 하면 안전하게 저장됨 (어디에? 로컬에 .git)
- 내 컴퓨터가 살아있는 한 안전함

----

**4. 변경 내용 올리기**

    git push origin master

----

**5. git의 저장소**

**working tree**

작업 디렉토리와 같은 의미로

**stage**

commit 을 준비하는 곳
git add 명렁어를 실행하면 스테이지에 변경항목이 올라감

**로컬 저장소 (=.git)**

git commit 명령어를 실행하면 로컬저장소에 commit 객체가 저장됨 

**6. 그 외 명령어**

**git status**

working tree, stage, 로컬 저장소(=head)가 같을 때 git status가 깨끗함
working tree 에 변경사항이 없다 ? git status 깨끗함

**head**

head는 마지막 커밋을 가르킴 (현재 커밋)

**그 외**

- commit 을 새로 생성하면 그 커밋의 부모는 head가 된다
- commit 이 있으면 언제나 돌아갈 수 있음
- reset 은 branch, HEAD 를 같이 옮기는 것
- rebase 는 나를 들어서 조상에게 올린다(내용은 동일하지만 다른 커밋 생성)
- git fetch 는 원격에서 로컬로 가져오는 것
- git pull 은 스테이지, working tree, 로컬 저장소가 모두 같아진다
- git pull = git fetch + merge
- **branch 는 참조변수다!!!**
- **commit 은 무조건 살릴 수 있다!!!**
