const torch = require('ti.light');
const win = Ti.UI.createWindow({});
const button = Ti.UI.createButton({
	title: 'Click to toggle',
});
win.add(button);

win.addEventListener("open", function() {
	Ti.Media.requestCameraPermissions(function(e) {
		torch.init();
	});
})

button.addEventListener('click', function(d) {
	torch.toggle();
})
win.open();
