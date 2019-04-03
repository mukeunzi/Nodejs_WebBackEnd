package problem;

import java.util.*;

public class baek_10430 {

	public static void main(String[] args) {
		int a, b, c;
		
		Scanner scan = new Scanner(System.in);
		a = scan.nextInt();
		b = scan.nextInt();
		c = scan.nextInt();

		System.out.println((a + b) % c);
		System.out.println((a % c + b % c) % c );
		System.out.println((a * b) % c);
		System.out.println((a % c * b % c) % c);
		
		/* 
		 * 이 문제가 가지는 의미는?
		 * "계산 순서에 영향을 주지않는 괄호가 있을 경우
		 * 분배법칙을 이용해 계산하면 값이 달라질 수 있다"
		 * */
	}

}
