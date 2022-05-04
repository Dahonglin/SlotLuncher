window.addEventListener("load", () => {
  // 로딩 완료
  console.log("로딩 완료");

  new Vue({
    el: "#app",
    data() {
      return {
        title: "Slot Luncher",
        sub: "오늘 점심 뭐 먹지?",
        nav: "🍔🥙🍛🥐🍝🍕🍣☕",
        menu: [
          "라면",
          "피자",
          "치킨",
          "마라탕",
          "칼국수",
          "순대국",
          "돈까스",
          "곰탕",
          "짜장면",
          "덮밥",
          "떡만두국",
          "샌드위치"
        ],
        inputMenu: "",
        picked: "",
        // 임의 이전 랜덤값
        prePicked: 999,
        // 모달창 열기/닫기
        resultPopup: 0
      };
    }, //data
    methods: {
      // 메뉴 추가
      addNewMenu() {
        // 메뉴 배열에 추가함
        if (this.inputMenu != '') {
          // 중복 체크 부분

          //중복 유무
          let chk = true;
          //메뉴 데이터를 확인 반복문
          for (let i = 0; i < this.menu.length; i++) {
            //중복유무 초기화
            chk = true;
            // 중복된 데이터가 있는지 확인
            if (this.menu[i] === this.inputMenu) {
              console.log('중복됨');
              //중복 경고창 알림
              window.alert('이미 등록 된 메뉴입니다!');
              chk = false;
              // 인풋 태그 초기화
              this.inputMenu = "";
              return false;
            }
          }
          if (chk)
            this.menu.push(this.inputMenu);
        } else {
          return false;
        }
        // 인풋 태그 초기화
        this.inputMenu = "";
      },
      slotMenu() {
        this.resultPopup = 1;
        // 랜덤 추첨
        let random = Math.floor(Math.random() * this.menu.length);
        // 이전 값과 같으면 다를 때까지 계속 랜덤 수 생성
        while (random === this.prePicked) {
          random = Math.floor(Math.random() * this.menu.length);
        }
        // 이전 숫자에 현재 랜덤 수 더해줌
        this.prePicked = random;
        // 추첨 완료
        this.picked = this.menu[random];
      },
      closeWindow(val) {
        this.resultPopup = val;
      },
      // 메뉴 삭제
      deleteMenu(val) {
        if (val > -1) {
          this.menu.splice(val, 1);
        }
      }
    }
  }); //뷰
}); //윈도우 로드