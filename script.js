const shapeContainer = document.getElementById("shapeContainer");
const dot = document.getElementById("dot");
const verticalLine = document.getElementById("verticalLine");
const horizontalLine = document.getElementById("horizontalLine");
const resultText = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

let currentScore = 0;



// 초기화 및 랜덤 도형 생성
function initGame() {
  // 랜덤 도형 생성
  const dotX = Math.random() * 290; // 점의 X 좌표 (컨테이너 범위 내)
  const dotY = Math.random() * 290; // 점의 Y 좌표

  // 점의 위치 설정
  dot.style.left = `${dotX}px`;
  dot.style.top = `${dotY}px`;

  // 정답 선 초기화
  verticalLine.style.display = "none";
  horizontalLine.style.display = "none";
  resultText.innerText = "";
}

// 정답 확인 함수
function checkCenter(isCenterGuess) {
  const containerRect = shapeContainer.getBoundingClientRect();
  const dotRect = dot.getBoundingClientRect();

  // 컨테이너 중심 좌표
  const centerX = containerRect.width / 2;
  const centerY = containerRect.height / 2;

  // 점의 좌표
  const dotX = dotRect.left - containerRect.left + dotRect.width / 2;
  const dotY = dotRect.top - containerRect.top + dotRect.height / 2;

  // 점과 중심의 거리 계산
  const tolerance = 10; // 허용 오차
  const isCorrect = Math.abs(dotX - centerX) < tolerance && Math.abs(dotY - centerY) < tolerance;

  // 정답 표시
  verticalLine.style.left = `${centerX}px`;
  verticalLine.style.display = "block";

  horizontalLine.style.top = `${centerY}px`;
  horizontalLine.style.display = "block";

  if (isCorrect === isCenterGuess) {
    resultText.innerText = "정답입니다! 👏";
    resultText.style.color = "green";

    // 점수 업데이트
    currentScore += 10;
  } else {
    resultText.innerText = "틀렸습니다! 😢";
    resultText.style.color = "red";

    // 점수 감소
    currentScore -= 5;
  }


// 게임 초기화 및 점수 로드
loadScore();
initGame();
