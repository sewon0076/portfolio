
let cate = ['chicken','western food','western food','western food' , 'korean','korean','korean','korean', 'japanese','japanese','japanese','chinese','chinese','asian','fast food', 'dessert'];
let food = ['치킨', '파스타','리조또','뇨끼' ,'김치볶음밥','순대국','감자탕','닭갈비','스시','우동','돈카츠','마라탕','짜장면','쌀국수','햄버거','요거트볼']
let detail = [
    '치킨은 진리. 겉바속촉의 끝판왕 치킨은 어떠세요?',
    '상큼한 토마토부터 고소한 크림, 매콤한 로제까지 즐길 수 있는 파스타 어떠세요?',
    '면이 부담스럽다면, 부드러운 소스와의 조화가 좋은 리조또 어떠세요?',
    '쫄깃한 식감과 이탈리아를 느낄 수 있는 뇨끼 어떠세요?',
    '한국인이라면 싫어할 수 없는 김치볶음밥! 아는 맛이 무서운 김치볶음밥 어떠세요?',
    '술을 안먹어도 해장이 되는 시원한 순대국 한 그릇 어떠세요?',
    '뼈 발라먹는 재미에, 얼큰한 국물까지 감자탕 어떠세요?',
    '매콤한 양념에 부드러운 살코기, 여러가지 사리들이 만들어내는 하모니, 닭갈비 어떠세요?',
    '너무 무겁지 않고 간단히 먹고 싶다면, 장인의 손길을 느낄 수 있는 초밥 어떠세요?',
    '따뜻한 국물에 탱탱한 면발, 속을 따뜩하게 해줄 우동 한 그릇 어떠세요?',
    '바삭바삭한 튀김 옷 안, 육즙 가득한 돼지고기, 돈카츠 어떠세요?',
    '내가 원하는 재료들을 선택할 수 있고, 입안이 얼얼해지는 매운맛 가득, 오늘의 스트레스를 날려 줄 마라탕 어떠세요?',
    '어머님의 짜장면이 싫다고 하셨지만, 내 동년배들은 다 좋아하는 짜장면 한 그릇 어떠세요?',
    '시원한 국물에 부담없는 쌀면으로 든든하게, 쌀국수 한 그릇 어떠세요?',
    '육즙 가득 패티에, 아삭한 채소들을 한입에 먹을 수 있는 햄버거 어떠세요?',
    '상큼하고 맛있지만 건강한 디저트를 찾고 있다면 요거트볼 어떠세요? '
]
// for(let i = 0; i < food.length; i++){
    
// }
const randomValue = food[Math.floor(Math.random() * food.length)];
// console.log(randomValue);
let food_text = document.getElementsByClassName('food');
let cate_text = document.getElementsByClassName('cate');
let detail_text = document.getElementsByClassName('detail');
food_text[0].innerText = `${randomValue}`;
let cate_num = food.indexOf(randomValue);//randomValue의 값이 배열에서 몇번째인지 구하기
cate_text[0].innerText=`${cate[cate_num]}`;
detail_text[0].innerText = `${detail[cate_num]}`;

let replay = document.getElementById('replay')
replay.addEventListener('click',()=>{
    window.location.reload();
})