window.addEventListener("load", () => {
  // 뷰 개발자도구 사용
  Vue.config.devtools = true;
  // 로딩 완료
  console.log("로딩 완료");
  new Vue({
    el: "#app",
    data() {
      return {
        title: "Slot Luncher",
        sub: "오늘 점심 뭐 먹지❓",
        nav: "🍔🥙🍛🥐🍝🍕🍣🍱",
        close: "🚀 다시 고를래!",
        // 기본 데이터 세팅
        menu: [],
        inputMenu: "",
        picked: "",
        // 임의 이전 랜덤값
        prePicked: 999,
        // 모달창 열기/닫기
        resultPopup: 0,
        //다시 고를래 카운트
        rePicked: 0
      };
    }, //data
    methods: {
      // 메뉴 추가
      addNewMenu() {
        // 메뉴 배열에 추가함
        let iptMenu = this.inputMenu;
        if (iptMenu != '') {
          // 중복 체크 부분

          //중복 유무
          let chk = true;
          //메뉴 데이터를 확인 반복문
          for (let i = 0; i < this.menu.length; i++) {
            //중복유무 초기화
            chk = true;
            // 중복된 데이터가 있는지 확인
            if (this.menu[i] === iptMenu) {
              console.log('중복됨');
              //중복 경고창 알림
              window.alert('이미 등록 된 메뉴입니다!');
              chk = false;
              // 인풋 태그 초기화
              this.inputMenu = "";
              return false;
            }
          }
          // 중복이 없으면
          if (chk) {
            this.menu.push(iptMenu);
            localStorage.setItem('menu', JSON.stringify(this.menu));
          }
        }
        // 빈칸 입력 시 반응 없음
        else {
          this.inputMenu = "";
          return false;
        }
        // 인풋 태그 초기화
        this.inputMenu = "";
      },
      // 추첨
      slotMenu() {
        if (this.menu.length > 1) {
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
        } 

        else {
          //메뉴가 없거나 2개 미만인 경우
          window.alert('발사가 중지 되었습니다! \n메뉴를 추가 하시거나, 첫 리스트로 초기화 해주세요.');
          this.inputMenu = "";
        }
      },
      //창닫기
      closeWindow(val) {
        this.resultPopup = val;
        this.rePicked++;
        //계속 다시 고를래 누를 시
        if (this.rePicked > 5 && this.rePicked < 10) {
          this.close = "이젠 골라줘...😅";
        } else if (this.rePicked > 10 && this.rePicked < 13) {
          this.close = "골라라 쫌!😈";
          // 13번 이상 다시 시작 시 멘트 초기화
        } else if (this.rePicked >= 13) {
          this.close = "🚀 다시 고를래!";
          this.rePicked = 0;
        }
      },
      // 메뉴 삭제
      deleteMenu(val) {
        if (val > -1) {
          this.menu.splice(val, 1);
          localStorage.setItem('menu', JSON.stringify(this.menu));
        }
      },
      // 메뉴판 초기화
      resetMenu() {
        localStorage.clear();
        window.location.reload();
      }
    }, //methods
    mounted() {
    } //mounted
  }); //뷰
}); //윈도우 로드