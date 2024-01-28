// var QRCode = require('qrcode')
// var canvas = document.getElementById('canvas')

// QRCode.toCanvas(canvas, 'sample text', function (error) {
//   if (error) console.error(error)
//   console.log('success!');
// })


var QRCode = require('qrcode')



hello=async()=>{

   hello = await  QRCode.toString('Krishna Lamsal!',{type:'terminal'});
  console.log(hello);


};

hello();


