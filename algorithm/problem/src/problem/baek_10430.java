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
		 * �� ������ ������ �ǹ̴�?
		 * "��� ������ ������ �����ʴ� ��ȣ�� ���� ���
		 * �й��Ģ�� �̿��� ����ϸ� ���� �޶��� �� �ִ�"
		 * */
	}

}
