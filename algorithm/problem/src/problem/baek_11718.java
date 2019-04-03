package problem;

import java.util.*;

public class baek_11718 {

	public static void main(String[] args) {
		String str = "";
		String strResult = "";
		
		Scanner scan = new Scanner(System.in);
		while(scan.hasNextLine()) {
			str = scan.nextLine();
			
			if(str.length() <= 100 && !str.startsWith(" ") && !str.endsWith(" ")) {
				strResult += str + "\n";
			}else {
				break;
			}
		}
		
		System.out.println(strResult);
		
/*		
		//+글자수제한 추가해야됨

		int i;
		String strList = "";
		String inputStr = "";
		String arr[];
		Scanner scan = new Scanner(System.in);
		for(i=0 ;i<100; i++) {
			inputStr = scan.nextLine();
			
			if(inputStr.length() > 0) {
				strList += inputStr + "\n";
			}
			else {
				break;
			}
		}
		
		System.out.println("============i : "+i);
		if(i == 0) {
			arr = new String[1];
			arr[0] = strList;
		}else {
			arr = new String[i];
			arr = strList.split("\n");
		}
		
		for(int j=0; j<arr.length; j++) {
			System.out.println(arr[j]);
		}*/
	}

}
