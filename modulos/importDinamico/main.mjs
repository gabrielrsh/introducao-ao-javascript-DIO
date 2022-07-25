const btn = document.getElementById('change-color');
const body = document.getElementsByTagName('body')[0];

const listener = function () {
	btn.addEventListener('click', async () => {
		const { changeColor } = await import('./mudaCorFundo.mjs');

		changeColor(body);
	});
};

listener();