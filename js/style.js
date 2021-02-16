
let quick = document.getElementById('toggleswitchquick');
let cheap = document.getElementById('toggleswitchcheap');
let good = document.getElementById('toggleswitchgood');
let toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('change', (e) => {
		doTheTrick(e.target)
	});
});

function doTheTrick(theClickedOne) {
	// if all of them are checked
	if(good.checked && cheap.checked && quick.checked) {
		// check to see which one was clicked and toggle another one
		if(good === theClickedOne) {
			quick.checked = false;
		}
		
		if(cheap === theClickedOne) {
			good.checked = false;
		}
		
		if(quick === theClickedOne) {
			cheap.checked = false;
		}
	}
}