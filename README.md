# webp-avif-browsers-support-detection

This is a utility to check if the browser does support for webp and avif next generation image types. It will add classes to the (ex. &lt;html class="webp no-avif"&gt;) tag. If the browser does support for that particular image type then it will add that image type as class name (ex.webp) or if doesn't support then it will add "no-" prefix to that image type as class (ex.no-webp).

Next generation image types are very good in compression. So, you should start using these.

## Usage

```sh
$ npm i webp-avif-browsers-support-detection --save
```

After installation you need to import this module to your js file.

```sh
import detect from 'webp-avif-browsers-support-detection';

detect();

```

Using these class names you can load background images conditionally. We will try to load .avif image first as this is the most advanced image type available so far (Highest compression). Webp will come next and if there is no support for those then we will load jpeg or png image.

```sh
.avif.webp .anyClassName, .avif.no-webp .anyClassName{
    background:url(imageName.avif);
}
.no-avif.webp .anyClassName{
    background:url(imageName.webp)
}
.no-avif.no-webp .anyClassName{
    background:url(imageName.jpg/.png)
}
```

Though the name of this project is quite hard coupled to webp and avif, you can extend the capability to check browser support for any new nextgen (or existing) image type you may come across like the code sample given below. You need to pass one object having key type and url, type is the image type and url is the base64 converted image. For the example, if you want to check the support for jpg image you need to pass {type:"jpg",url:"Must be base64 coded small image for jpeg image"}

```sh
import detect from 'webp-avif-browsers-support-detection';

detect({type:"jpeg", url:"image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="});

```
