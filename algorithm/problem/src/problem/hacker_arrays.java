package problem;

import java.util.*;

public class hacker_arrays {

	public static void main(String[] args) {
		int arrLen;
		
		Scanner scan = new Scanner(System.in);
		arrLen = scan.nextInt();
		
		int arr[] = new int[arrLen];
		for(int i=0; i<arr.length; i++) {
			arr[i] = scan.nextInt();
		}
		
		for(int i=arr.length-1; i>=0; i--) {
			System.out.print(arr[i] + " ");
		}
	}

}
