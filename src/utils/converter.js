// 단위 변환기 입니다.

export default class Converter {
  numberConverter(number) {
    const 기준 = 3;
    number = String(number);
    number = "1231231230";

    const length = number.length;

    /**
     * 길이
     * 0~3 기본 0 ~ 100
     * 4~6 K 1000 ~ 100000   뒤에서 3자리 잘라
     * 7~9 M 1000000 ~ 100000000 뒤에서 6자리
     * 10~12 B                     뒤에서 9자리
     * 13~15 T                       뒤에서 12자리
     */

    // if (15 < length) console.log(15);
    // else if (12 < length) console.log(12);
    // else if (9 < length) console.log(9);
    // else if (6 < length) return number;
    // else if (3 < length) return number;
  }
}
