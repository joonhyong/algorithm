import java.util.Arrays;
import java.util.Scanner;

public class Main {
	static int tc = 0;
	static int[] before;
	static int[] after;
	static int[] answer;
	
	static void combi(int depth, int start) {
		if (depth==7) {
			int sum = 0;
			for (int i=0; i<7; i++) {
				sum += after[i];
			}
			if(sum == 100) {
				for(int i=0; i<7; i++) {
					answer[i] = after[i];
				}
			}
			return;
		}	
		
		for (int i=start; i<9; i++) {
			after[depth] = before[i];
			combi(depth+1, i+1);
		}
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		before = new int[9];
		after = new int[7];
		answer = new int[7];
		
		for (int i = 0; i < 9; i++) {
			before[i] = sc.nextInt();
		}
		Arrays.sort(before);
		
		
		combi(0,0);
		
		for (int j : answer) {
			System.out.println(j);
		}
		
		
	}

}
