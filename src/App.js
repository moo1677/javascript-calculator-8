// 에러로 처리할 항목
// 1. numbersPart가 구분자로 시작하거나 끝날 때
// 2. 숫자가 양수가 아닐 경우
// 3. 커스텀 구분자와 기본 구분자가 아닌 다른 문자가 사용 되었을 때
// 4. // 와 \n 사이에 ":" 또는 "," 또는 숫자 또는 공백이 왔을 때
// 5. 커스텀 구분자 기본 형식이 틀렸을 때

// 생각해야할 것들
// 1. 커스텀 구분자가 한 자리의 문자가 아닐 수도 있다
// 2. 커스텀 구분자가 문자열일 경우 문자열 전체를 구분자 하나로 생각할 때
// 3. 커스텀 구분자가 문자열일 경우 각각의 문자를 구분자들로 지정할 때 -> 중복처리
// 4. 숫자는 한자리의 숫자가 아닐 수 있다. 즉 여러 자리의 숫자도 생각해야 함
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      const result = calculator(str);
      Console.print(`결과 : ${result}`);
    } catch {
      throw new Error("[ERROR]");
    }
  }
}

function calculator(str) {}

export default App;
