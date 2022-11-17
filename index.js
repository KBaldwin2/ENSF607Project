//This is a general js file that should be included in all html files for functions used across all pages

console.log('index');

//TODO: Figure out how to get the hard coded IP out of this
function load_page(htmlFile) {
    window.location.href = "http://127.0.0.1:5500/ENSF607Project/"+htmlFile;
}