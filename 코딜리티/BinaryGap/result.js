function solution(N) {
  const binary = N.toString(2) // 이진수로 변환
  const formatedBinary = binary.slice(binary.indexOf('1') + 1, binary.lastIndexOf('1')) // 앞의 1 뒤의 1을 떼어냄
  const gapArray = formatedBinary.split('1').map(zeros => zeros.length) // 1로 구분하여 0의 길이를 배열로 맵핑함
  const maxZero = gapArray.length ? Math.max(...gapArray) : 0 // gapArray 가 있을 때만 최대 값을 구해냄

  return maxZero
}
