# webp-avif-browsers-support-detection

This is a utility to check if the browser does support for webp and avif next generation image types.

Next generation image types are very good in compression. So, you should start working with those

## Usage

```sh
$ npm i webp-avif-browsers-support-detection --save
```

After installation you need to import this module to your js file.

```sh
import detect from 'webp-avif-browsers-support-detection';

detect();

```

Though the name of this project is quite hard coupled to webp and avif, you can extend the capability to check browser support for any new nextgen (or existing) image type you may come across like the code sample given below. You need to pass one object having key {type:"jpeg",url:"Must be base64 coded small image for jpeg image"}

```sh
import detect from 'webp-avif-browsers-support-detection';

detect({type:"jpeg", url:"image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="});

```
