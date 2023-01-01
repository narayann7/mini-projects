What is Chrome extension 🤔? : [here](https://developer.chrome.com/docs/extensions/)

What is Flutter 🤔? : [here](https://flutter.dev/)

So First, create ⚡ a project in flutter

`flutter create app_name`

if flutter web is not enabled, then enable it by

`flutter config --enable-web`

to run the flutter app on the web 🌍, use

`flutter run -d Chrome`

![zz](https://cdn.hashnode.com/res/hashnode/image/upload/v1672505269806/da220385-39fc-4f18-8ebf-1976b4b16995.png)

Now we know that the config for running an app on the web is correct

Let's make some changes 🧑‍💻 in `index.html`

So, we can use the app as a Chrome extension.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672505556727/0e9c8b3e-aca2-4d46-a46c-ddef28b6cb0d.png )

In `index.html` remove this from the head tag

```xml
  <script>
    // The value below is injected by flutter build, do not touch.
    var serviceWorkerVersion = null;
  </script>
  <!-- This script adds the flutter initialization JS code -->
  <script src="flutter.js" defer></script>
```

and this from the body tag

```xml
  <script>
    window.addEventListener('load', function(ev) {
      // Download main.dart.js
      _flutter.loader.loadEntrypoint({
        serviceWorker: {
          serviceWorkerVersion: serviceWorkerVersion,
        }
      }).then(function(engineInitializer) {
        return engineInitializer.initializeEngine();
      }).then(function(appRunner) {
        return appRunner.runApp();
      });
    });
  </script>
```

and add this script inside the body

```xml
  <script src="main.dart.js" type="application/javascript"></script>
```

and also add `style="height: 600px; width: 650px"` inside HTML tag

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672506062921/116ffe7d-3c85-4a3a-baf2-5bc46c3a5151.png )

it will set the extension view's height and width to 600 pixels and 650

then open `manifest.json` and replace all content with

more about `manifest.json` : [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

```json
{
  "name": "name of extension",
  "description": "description for extension",
  "version": "1.0.0",
  "content_security_policy": {
    "extension_pages": "script-src 'self' ; object-src 'self'"
  },
  "action": {
    "default_popup": "index.html",
    "default_icon": "icons/Icon-192.png"
  },
  "manifest_version": 3
}
```

and run `flutter build web --web-renderer html --csp` this command will generate the web build as flutter web will dynamically generate code in the build output and this gives us CSP errors in the browser we have to use `--csp` flag.

To learn more about the above command: [doc](https://docs.flutter.dev/development/platform-integration/web/renderers)

after this, the web build will be generated at `build/web`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672508428039/09ce3298-70d5-46b3-b20e-090ece81a5de.png )

to run 🏃‍♂️ the Chrome extension, open chrome and navigate to `chrome://extensions/` and enable developer mode and click on load unpacked

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672509090887/ac5c5dec-05e7-4e4c-812e-4d459661801f.png )

open the web build from the path `app_name/build/web`

then open a new tab and click on the extension icon

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672509954367/c6ffe73c-813d-478e-ab1e-fd390b154699.png )

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672557063610/b550f0b0-3088-41eb-bfeb-c141f2872517.png )

yahoo…🥳

We made a basic counter extension in Flutter

Let's build 🔨 something useful 👩‍💻

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672545546697/4e420f46-d80b-4a8e-ba2a-dac865fb2dcc.png )

let's build a simple base64 encoded and decoded 🔐

What is base64: [here](https://en.wikipedia.org/wiki/Base64) | how base64 works? : [here](https://www.youtube.com/watch?v=aUdKd0IFl34)

here is the full code in `main.dart` the UI part is simple if you are familiar to flutter

```dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.grey,
        ),
        home: const Base64());
  }
}

class Base64 extends StatefulWidget {
  const Base64({Key? key}) : super(key: key);
  @override
  _Base64State createState() => _Base64State();
}
class _Base64State extends State<Base64> {
  TextEditingController textController = TextEditingController();
  bool isEncode = true;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
      },
      child: Scaffold(
        body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(
              height: 10,
            ),
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: Text("Base64"),
            ),
            Container(
              height: 25,
              width: MediaQuery.of(context).size.width * 0.38,
              decoration: BoxDecoration(
                  color: Colors.grey[600],
                  borderRadius: BorderRadius.circular(15)),
              child: Row(
                children: [
                  GestureDetector(
                    onTap: () {
                      if (isEncode == false) {
                        setState(() {
                          isEncode = !isEncode;
                          textController.clear();
                        });
                      }
                    },
                    child: Container(
                      height: 25,
                      width: MediaQuery.of(context).size.width * (0.38 / 2),
                      decoration: BoxDecoration(
                          color: isEncode == true
                              ? Colors.black
                              : Colors.grey[600],
                          borderRadius: BorderRadius.circular(15)),
                      child: const Center(
                          child: Text(
                        "encode",
                        style: TextStyle(
                            color: Color.fromARGB(255, 225, 225, 225)),
                      )),
                    ),
                  ),
                  GestureDetector(
                    onTap: () {
                      if (isEncode == true) {
                        setState(() {
                          isEncode = !isEncode;
                          textController.clear();
                        });
                      }
                    },
                    child: Container(
                      height: 25,
                      width: MediaQuery.of(context).size.width * (0.38 / 2),
                      decoration: BoxDecoration(
                          color: isEncode == true
                              ? Colors.grey[600]
                              : Colors.black,
                          borderRadius: BorderRadius.circular(15)),
                      child: const Center(
                          child: Text(
                        style: TextStyle(
                            color: Color.fromARGB(255, 225, 225, 225)),
                        "decode",
                      )),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 13),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 5),
                decoration: BoxDecoration(
                  border:
                      Border.all(color: Colors.black, style:  BorderStyle.solid),
                  borderRadius: BorderRadius.circular(30),
                ),
                child: ListTile(
                  trailing: GestureDetector(
                    onTap: () {
                      onTap(textController.text);
                    },
                    child: Container(
                      height: 40,
                      width: 80,
                      decoration: BoxDecoration(
                          color: Colors.black,
                          borderRadius: BorderRadius.circular(30)),
                      child: Center(
                          child: Text(
                        isEncode == true ? "Encode" : "Decode",
                        style: const TextStyle(color: Colors.white),
                      )),
                    ),
                  ),
                  title: TextField(
                    controller: textController,
                    onChanged: (e) {},
                    decoration: const InputDecoration(
                        hintText: "Enter or Paste here ",
                        alignLabelWithHint: true,
                        border: InputBorder.none,
                        hintStyle: TextStyle()),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
  base64Encoder(String str) {
    const base64 = Base64Codec();
    List<int> bytes = utf8.encode(str.toString());
    return base64.encode(bytes);
  }
 base64Decoder(String str) {
    const base64 = Base64Codec();
    Uint8List decode = base64.decode(str.toString());
    return utf8.decode(decode);
  }

  onTap(String str) async {
    FocusScope.of(context).unfocus();
    String text = "";
    if (isEncode == true) {
      setState(() {
        text = base64Encoder(textController.text);
      });
    } else {
      setState(() {
        text = base64Decoder(textController.text);
      });
    }
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
      content: Text("text copied to clipboard"),
      duration: Duration(seconds: 1),
    ));
  }
}
```

for encoding and decoding, we will use inbuilt API for conversion from

`import 'dart:convert';`

```dart
  base64Encoder(String str) {
    const base64 = Base64Codec();
    List<int> bytes = utf8.encode(str.toString());
    return base64.encode(bytes);
  }
 base64Decoder(String str) {
    const base64 = Base64Codec();
    Uint8List decode = base64.decode(str.toString());
    return utf8.decode(decode);
  }
```

and the `onTap` function, first convert the string using the above function from `textController` and then copy the text into the clipboard `Clipboard.setData(ClipboardData(text: text));`

from `import 'package:flutter/services.dart';`

```dart
  onTap(String str) async {
    String text = "";
    if (isEncode == true) {
      setState(() {
        text = base64Encoder(textController.text);
      });
    } else {
      setState(() {
        text = base64Decoder(textController.text);
      });
    }
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
      content: Text("text copied to clipboard"),
      duration: Duration(seconds: 1),
    ));
  }
```

quick tips 💡 :

* whenever we want to add a new change in the extension
    
    use `flutter build web --web-renderer html --csp`
    
    to create a new build which has new changes and after that,
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672551949928/9dee6fc0-5432-4400-9e16-ba622e15eaac.png )
    
* The extension by default does not save any state, so we can use local storage like [hive](https://docs.hivedb.dev/) DB it's a NoSQL DB for flutter which actually stores data in `Indexed DB` in browser
    

Source code: [here](https://github.com/narayann7/mini-projects/tree/main/base64_encryption) | My GitHub: [here](https://github.com/narayann7)

Hope 🤞 you have found this article interesting.

Keep learning! 👩‍💻 | More about me: [here](http://narayann.me)
