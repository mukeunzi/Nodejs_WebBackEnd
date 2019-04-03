package step1;

public class ex_nand {

	public boolean nand(boolean paramA, boolean paramB) {
	    boolean answer = true;
	    
		if(paramA && paramB) {
			answer = false;
		}else {
			answer = true;
		}
		
	    return answer;
	}
	
	public static void main(String[] args) {
		ex_nand en = new ex_nand();
		System.out.println(en.nand(true, true)); 
	}

}
