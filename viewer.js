/**
 * 参考官方github项目实现
 * https://github.com/Autodesk-Forge/viewer-javascript-offline.sample
 */

var myViewerDiv = document.getElementById('MyViewerDiv');
var viewer = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv);
var svfURI = decodeURI(document.location.hash.substring(1));
var options = {
    'env' : 'Local',
    'document' : svfURI
};
Autodesk.Viewing.Initializer(options, function() {
    viewer.start(options.document, options);
});