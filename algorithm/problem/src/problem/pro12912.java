package problem;

public class pro12912 {
	
	public long solution(int a, int b) {
		int big, small;
		long answer = 0;  //주어진 변수
		
		if(a > b) {
			small = b;
			big = a;
		}else if(a < b) {
			small = a;
			big = b;
		}else {
			small = a;
			big = b;
		}
		
		for(int i=small; i<=big; i++) {
			answer += i;
		}
		
		return answer;
	}

	public static void main(String[] args) {
		pro12912 pro = new pro12912();
		System.out.println(pro.solution(3, 5));
	}

}
