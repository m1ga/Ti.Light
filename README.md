<h1>Ti.Light</h1>

The Ti.Light project is a sample on how to create a flashlight module.  This project was created for a TiConf US 2013 demonstration.

<h2>Before you start</h2>
* These are iOS and Android native modules designed to work with Titanium SDK 13.0.0.GA (Android)
* Before using this module you first need to install the package. If you need instructions on how to install a 3rd party module please read this installation guide.

<h2>Download the compiled release</h2>

Download the platform you wish to use:

* [iOS Dist](iOS/dist)
* [Android Dist](Android/dist)

<h2>Building from source?</h2>


Run `ti build -p android -b` or `ti build -p ios -b` in the Android or iOS folder.
For iOS you'll need to modify the titanium.xcconfig file with the path to your Titanium installation.

<h2>Setup</h2>

* Download the latest release from the releases folder ( or you can build it yourself )
* Install the ti.light module.
* You can now use the module via the commonJS require method, example shown below.

<h2>Example</h2>

```js
const torch = require('ti.light');
const win = Ti.UI.createWindow({});
const button = Ti.UI.createButton({
	title: 'Click to toggle',
});
win.add(button);

win.addEventListener("open", function() {
	// android only:
	Ti.Media.requestCameraPermissions(function(e) {
		torch.init();
	});
})

button.addEventListener('click', function(d) {
	torch.toggle();
})
win.open();
```

<h3>Twitter</h3>

Please consider following the [@benCoding Twitter](http://www.twitter.com/benCoding) for updates
and more about Titanium.

<h3>Blog</h3>

For module updates, Titanium tutorials and more please check out my blog at [benCoding.Com](http://benCoding.com).
