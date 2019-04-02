# unix 명령어 익히기


----
## 실습예제
**echo**

    echo "hello"  #매개변수를 표준출력

----

**cat**

    cat hello.txt  #매개변수를 표준출력

----

**touch**

    touch test.txt  #매개변수를 0 바이트 파일로 생성 

----

**redirection**

*1. > 와 >>*

    echo "haha hello" > test.txt  #표준출력을 파일에 저장
    echo "change" > test.txt  #표준출력을 파일에 저장(덮어쓰기)
    echo "add new line" >> test.txt  #표준출력을 파일에 저장(마지막 라인에 추가)

*2. < 와 <<*
  
    cat < hello.txt  #매개변수를 표준출력
    cat << EOF  #EOF를 입력할 때까지 입력가능(장점:echo의 번거로움을 줄일 수 있음)
    >hohoho
    >hahaha
    >EOF
    cat << EOF > test.txt  #표준출력을 파일에 저장

----

**grep 과 | (pipe)**

*grep : 필터의 역할. 표준입력 값중 매개변수와 일치하는 값만 표준출력*

*| (pipe) : 앞(cat)명령어의 표준출력을 파이프 뒤 명령어의 매개변수로 전달*

    grep test < test.txt  #파일 내에서 매개변수와 일치하는 값을 표준출력
    cat test.txt | grep test  #cat 명령의 표준출력을 grep 매개변수와 일치하는 값을 표준출력
