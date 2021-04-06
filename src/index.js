const detect = function (im = []) {
  var images = [
    {
      type: "webp",
      url:
        "data:image/webp;base64,UklGRhwAAABXRUJQVlA4TBAAAAAvAAAAEAfQpv5HmQMR0f8A",
    },
    {
      type: "avif",
      url:
        "data:image/avif;base64,AAAAHGZ0eXBtaWYxAAAAAG1pZjFhdmlmbWlhZgAAAPFtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAABEAAAQABAAAAAAEVAAEAAAAeAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUltYWdlAAAAAHBpcHJwAAAAUWlwY28AAAAUaXNwZQAAAAAAAAABAAAAAQAAABBwYXNwAAAAAQAAAAEAAAAVYXYxQ4EgAAAKBzgABpAQ0AIAAAAQcGl4aQAAAAADCAgIAAAAF2lwbWEAAAAAAAAAAQABBAECg4QAAAAmbWRhdAoHOAAGkBDQAjITFkAAAEgAAAB5TNw9UxdXU6F6oA == ",
    },
  ].concat(im);
  var supportDetails = {};
  var $html = document.getElementsByTagName("html")[0];
  var defineImage = function (obj) {
    let img = new Image();
    img.src = obj.url;
    img.onerror = function (err) {
      var classes = new Set(
        !!$html.getAttribute("class")
          ? $html.getAttribute("class").split(" ")
          : []
      );
      supportDetails[obj.type.toLowerCase()] = false;
      classes.add("no-" + obj.type.toLowerCase());
      $html.setAttribute("class", [...classes].join(" "));
      console.log(
        obj.type.toUpperCase() + " not supported in this browser",
        err
      );
    };
    img.onload = function (inst) {
      var classes = new Set(
        !!$html.getAttribute("class")
          ? $html.getAttribute("class").split(" ")
          : []
      );
      supportDetails[obj.type.toLowerCase()] = true;
      classes.add(obj.type.toLowerCase());
      $html.setAttribute("class", [...classes].join(" "));
      console.log(obj.type.toUpperCase() + " supported in this browser");
    };
  };
  images.map((elm, i) => {
    defineImage(elm);
  });
  return supportDetails;
};
export default detect;
