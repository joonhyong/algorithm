import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main{

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String line = br.readLine();
		Stack<Character> stack = new Stack<>();
		int answer = 0;
		for (int i = 0; i < line.length(); i++) {
			char ch = line.charAt(i);
			if (ch == '(') {
				stack.push(ch);
			} 
			else if (ch == ')') {
				if (line.charAt(i-1)=='(' ) {
					stack.pop();
					answer += stack.size();
				} 
				else if (line.charAt(i-1)==')') {
					stack.pop();
					answer += 1;
				} 
				else continue;
			}
		}
		System.out.println(answer);
	}

}
