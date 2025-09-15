import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		
		Queue<Integer> people = new ArrayDeque<>();
		Queue<Integer> answer = new ArrayDeque<>();
		
		for(int i=0; i<N; i++) {
			people.offer(i+1);
		}
		
		while(!(people.size()==0)) {
			for(int i=0; i<K-1; i++) {
				int person = people.poll();
				people.offer(person);
			}
			int person = people.poll();
			answer.offer(person);
		}
		
		StringBuilder sb = new StringBuilder("<");
		for (int i = 0; i < N; i++) {
			if(answer.size()==1) {
				sb.append(answer.poll()+">");
				break;
			}
			sb.append(answer.poll()+", ");
		}
		System.out.println(sb);
	}
}
