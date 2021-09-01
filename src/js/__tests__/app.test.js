import ClickButton from "../ClickButton";

test('test adding tooltip', () => {
  document.body.innerHTML = `<div class='container'><button class='button'>Нажми меня</button></div>`;
  let button = new ClickButton('.container');
  button.createTooltip();
  let div = document.querySelector('.tooltip')
  expect(div.className).toEqual('tooltip');
});