# SlotLuncher - 점심 메뉴 추첨기
### _**🎰 Lunch menu slot selector**_  
당신이 작성한 점심 메뉴 리스트 중 최고의 선택을 추천해줍니다!  

<img alt="Vue.JS" src ="https://img.shields.io/badge/vue.Js-4FC08D.svg?&style=for-the-badge&logo=Vue.js&logoColor=white"/>  <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/Bootstrap-7952B3.svg?&style=for-the-badge&logo=Bootstrap&logoColor=white"/>   

---


### ❓ 프로젝트 개발 이유
> 한때, 나에게 붙여진 별명이 있다.  
> **'점정녀'.**  
> 항상 점심 메뉴를 정해주니까 붙여준 별명이란다.  
> '언니, 오늘 우리 뭐 먹어요?', '다홍 씨, 우리 오늘 뭐 먹어?', '우리 오늘 먹기로 한 거 있었나?'  
> 이리저리 미루고 너도나도 총대 메기 싫어하는 요즘 우리.  
> 아무도 하려고 들지 않자, 결국 성격 급한 나의 역할이 되어 버렸다.  
> 그러던 어느날, 점정녀가 퇴사해버린 후...  
> 기획, 결정, 실행을 도맡아 해주던 그녀가 사라지니 요즘 점심 메뉴 정하느라 너무 오래 걸린단다.  
> 그런 그들에게 내가 늦은 퇴사 선물을 하나 해주기로 했다.  
> 슬롯-런처 탄생의 순간이었다.  


### 📋 사용 환경  
**[Slot luncher](https://dahonglin.github.io/SlotLuncher/)**  
URL 접속 시 사용 가능하며, PC & 모바일 상관 없이 이용 가능.


### 🕹 사용 방법
![image](https://user-images.githubusercontent.com/97204095/167329897-a0c97fb9-2f0b-4980-997c-a373904981fd.png)  
  
  
+ 첫 리스트로 초기화
  - 클릭 시 맨 처음 세팅 되는 음식 메뉴로 초기화 됨.
  - 초기 메뉴 리스트 : 라면, 피자, 치킨, 마라탕, 칼국수, 순대국, 돈까스, 곰탕, 짜장면, 덮밥, 떡만두국, 샌드위치, 떡볶이
+ 음식 메뉴
  - 클릭 시 해당 메뉴가 삭제 됨.
  - 리스트에 등록 되어 있는 메뉴로 추첨 기능이 작동함.
+ 메뉴 추가하기
  - 입력란에 추가하고자 하는 메뉴 입력 후 ↵, 혹은 옆의 '추가'버튼 클릭 시 메뉴가 추가 된다.
+ 추첨 하기
  - 버튼 클릭 시 추첨창이 나타나며 결과를 출력한다.

![image](https://user-images.githubusercontent.com/97204095/167331286-4a877072-bdfa-4401-874b-8c5ad4e2fb89.png)
+ 추첨 결과
  - 추첨 결과 출력
  - 다시 고를래 클릭 시 모달창이 닫힌다.  

---


### 🛠 저장 데이터  
<pre><code>// 기존 로컬 데이터 불러오기
const savedData = localStorage.getItem('menu');

// 로컬 데이터가 있을 경우 불러옴
if (savedData !== null) {
// 기존 로컬 데이터 저장
const parsedMenu = JSON.parse(savedData);
// menu에 기존 데이터 저장함
this.menu = parsedMenu;
}
//로컬 데이터가 아무것도 없을 경우 기존에 있던 초기화 배열 데이터로 세팅함.</code></pre>
> 메뉴 데이터는 Local storage에 저장 되어 새로고침, 재방문 시에도 데이터를 그대로 이용할 수 있다.  
<pre><code>// 메뉴판 초기화
resetMenu() {
localStorage.clear();
window.location.reload();
}
</pre></code>
> 첫 리스트로 초기화 클릭 시 Local storage가 초기화 되며, 창을 새로고침한 후 기존 초기화 데이터를 불러온다.
