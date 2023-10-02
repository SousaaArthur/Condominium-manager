const columnPanel = document.querySelector('.column-panel');
const btnPanelRegister = document.querySelector('.btn-panel-register');
const informationPanel = document.querySelector('.information-panel');
const btnReturn = document.querySelector('.btn-return');
const imageSvg = document.querySelector('.image-svg')

btnPanelRegister.addEventListener('click', () => {
    btnPanelRegister.classList.remove('off');
    btnPanelRegister.classList.add('on');
    columnPanel.style.marginLeft = '0rem';

    informationPanel.style.display = 'none'
    imageSvg.style.display = 'flex'
})

btnReturn.addEventListener('click', () => {
    btnReturn.classList.remove('off');
    btnReturn.classList.add('on');
    columnPanel.style.marginLeft = '35rem';

    informationPanel.style.display = 'flex'
    imageSvg.style.display = 'none'
});
