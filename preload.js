function establecerVersion(idSelector, version) {
	let elemento = document.getElementById(idSelector);

	if (elemento) {
		elemento.innerText = version;
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const components = ['Node', 'Chrome', 'Electron'];

	for (const componente of components) {
		establecerVersion(`version${componente}`, process.versions[componente.toLowerCase()]);
	}
});
