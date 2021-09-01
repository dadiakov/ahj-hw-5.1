/* eslint-disable linebreak-style *//* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this *//* eslint-disable no-use-before-define */

import ClickButton from '../ClickButton';

test('test adding tooltip', () => {
  document.body.innerHTML = '<div class=\'container\'><button class=\'button\'>Нажми меня</button></div>';
  const button = new ClickButton('.container');
  button.createTooltip();
  const div = document.querySelector('.tooltip');
  expect(div.className).toEqual('tooltip');
});
