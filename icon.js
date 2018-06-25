var favIcon = "/iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACpSURBVBjTY/iPBhhwCfx9jiSwbe3/5+HaFd/+//gHFljBzjC3l4GBYe1Vi5DnIIEwBgbfOKBAXTIDQzdIoIKBIacDKLACKNAEEvjRUfH8U45hx9+HaUXvQAK7cuI2f9rcve/vtuSc00CBtewMIh027AzsyUUMDCIXGP5XA41IYwCBDkOgQQz/b4eodUMEiuYmz/sEctiTd7eTDQ3d6x4iO/3bt78EPAcHAFhysSS1xMkBAAAAAElFTkSuQmCC";
var docHead = document.getElementsByTagName('head')[0];       
var newLink = document.createElement('link');
newLink.rel = 'shortcut icon';
newLink.href = 'data:image/png;base64,'+favIcon;
docHead.appendChild(newLink);
