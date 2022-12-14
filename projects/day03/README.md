# Day03 - Playing with CSS Variables and JS

## ๐ฝ TIL
### 1. CSS Variable
``` CSS
:root {
  --blur: 30px;
}

img {
  filter: blur(var(--blur));
}
```
``` JavaScript

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing);
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```
``` HTML
<input id="blur" type="range" name="blur" min="0" max="30" value="30" data-sizing="px">
```

### 2. JS Variable์ HTML์ ์ถ๋ ฅํ๋ ๋ฒ
- CSS Variable์ ๊ณต๋ถํ๋๊น JS Variable๋ ์ ๋ฌํ  ์ ์์ง ์์๊น ์๊ฐํ๋ค. 
- ํ์ง๋ง JS๋ ์ ํ ์ด๋ ต๊ฒ ์๊ฐํ  ๊ฒ ์๋๋ค. 
- `document.getElementByID("score").innerHTML = score;`์ ๋ฐฉ์์ผ๋ก ์์ฃผ ์ฝ๊ฒ ์ถ๋ ฅ์ด ๊ฐ๋ฅํ๋ค. 
- `innerHTML`์์๋ ์ ํด์ง ๋ฌธ์์ด๋ง ์ถ๋ ฅํด์ผ ํ๋ค๋ ๊ณ ์ ๊ด๋์ ๊นจ์.

### 3. ์ฐํด๋ฆญ ๋ฐฉ์ง, ๋๋๊ทธ ๋ฐฉ์ง
```JavaScript
document.oncontextmenu = () => {
	alert('์ฐํด๋ฆญ์ ์ฌ์ฉํ  ์ ์์ต๋๋ค');
	return false;
};

document.ondragstart = () => {
	alert('๋๋๊ทธ๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค');
	return false;
};
```

## ๐ฝ Idea
- โ ๊ธฐ๋ณธ CSS ์ปค์คํ
- โ input range ๋์์ ํ๋ & ๋ธ๋ฌ๋ก ๋ฐ๊พธ๊ธฐ 
- โ ๊ฒ์ ์์(์ค๋ช) ํ์ด์ง ๋ง๋ค๊ธฐ
- โ ์ฐํด๋ฆญ & ๋๋๊ทธ ๊ธฐ๋ฅ ์ ํํ์ฌ ์ด๋ฏธ์ง ๋ณด์ง ๋ชปํ๊ฒ ํ๊ธฐ
- โ ํ๋ & ๋ธ๋ฌ๋ฅผ ์ค์ธ ๋ค ๋ฌธ์ ๋ฅผ ๋ง์ถ ๋ ๋ค์ ์ฌ๋ฆฌ๋ ๋ฒ๊ทธ ์์ ํ๊ธฐ
- JSON์ ํตํด ๋ฌธ์  ๊ฒฝ๋ก์ ๋ต ๋ฐ์์ค๊ธฐ
  - ๋ฌธ์ +์ ๋ต์ง ๋ง๋ค๊ธฐ
  - Pass ๋ฒํผ ๊ตฌํํ๊ธฐ
- 60์ด ์๊ฐ์ ํ ์ถ๊ฐํ๊ธฐ
  - ์๊ฐ ๋๋๋ฉด ์ด๋ํ  ๊ฒฐ๊ณผ ํ์ด์ง ๋ง๋ค๊ธฐ
- Zoom 1x->2x๋ ๊ธ๊ฒฉํ๋ฐ 9x->10x์ ๋ณํ๋ ๋ฏธ๋ฏธํ ๋ฌธ์ . (bar step)

## ๐ฝ Reference
- `./favicon.ico` : https://www.edweek.org/quizzes
- `./assets/images/pikachu.png` : https://blog.naver.com/retspe/220789825284