/* eslint-disable linebreak-style *//* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this *//* eslint-disable no-console */

export default class ClickButton {
  constructor(buttonContainer) {
    if (typeof buttonContainer === 'string') {
      buttonContainer = document.querySelector(buttonContainer);
    }
    this.buttonContainer = buttonContainer;
    this.button = this.buttonContainer.querySelector('.button');
    this.button.addEventListener('click', () => this.createTooltip());
  }

  createTooltip() {
    if (document.querySelector('.tooltip')) this.removeTooltip();
    const coords = this.button.getBoundingClientRect();
    let toolTip = '<div class=\'tooltip\'><h3 class=\'tooltip-header\'>Куплю гараж</h3><div class=\'tooltip-content\'>Опять ты купился на это...</div></div>';
    this.buttonContainer.insertAdjacentHTML('beforeend', toolTip);
    toolTip = this.buttonContainer.querySelector('.tooltip');
    toolTip.style.top = `-${toolTip.offsetHeight + 5}px`;
    toolTip.style.left = `-${(toolTip.offsetWidth - coords.width) / 2}px`;
    setTimeout(() => { this.removeTooltip(); }, 2000);
  }

  removeTooltip() {
    if (document.querySelector('.tooltip')) document.querySelector('.tooltip').remove();
  }
}
