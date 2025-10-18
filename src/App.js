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
    } catch (error) {
      if (error === 1) {
        Console.print("숫자 입력 필드가 구분자로 시작하거나 끝날 수 없습니다.");
      }
      throw new Error("[ERROR]");
    }
  }
}

function calculator(str) {
  //공백 입력 시 0 출력
  if (!str) return 0;

  //구분자 배열
  let delimiters = [":", ";"];
  let numbersPart = str;
  //커스텀 구분자 형식 지정
  // ^문자 : 앞에 해당 문자가 와야함
  // [^문자] : 대괄호 안에 문자는 부정
  // 패턴+ : 해당 패턴이 1개 이상
  // ([^:,]+) : :와,를 제외한 문자가 1개 이상 연속된 덩어리
  // \\n(.*)$ : 문자열이 \n으로 끝나지 않음
  let customStr = str.match(/^\/\/([^,:]+)\\n(.*)$/);

  if (customStr) {
    const customDelimiters = customStr[1];
    numbersPart = customStr[2];

    delimiters = [...delimiters, customDelimiters];
  }
  if (
    delimiters.some((d) => numbersPart.startsWith(d)) ||
    delimiters.some((d) => numbersPart.endsWith(d))
  ) {
    throw new Error(1);
  }

  const regex = new RegExp(delimiters.join("|"));
  const numArray = numbersPart.split(regex);

  //문자열을 숫자로 변환
  const numbers = numArray.map((n) => {
    const num = Number(n);
    return num;
  });

  //reduce((누적값,현재값)=>{누적값 + 현재값})
  return numbers.reduce((sum, n) => sum + n);
}

export default App;
