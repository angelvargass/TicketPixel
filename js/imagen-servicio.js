
let imagenUrl = '';
$(function() {


    $.cloudinary.config({ cloud_name: '<YOUR-CLOUD>', api_key: '<YOUR-KEY>'});

    
    let uploadButton = $('#btnSeleccionarImagen');

   
    uploadButton.on('click', function(e){
        
        cloudinary.openUploadWidget({ cloud_name: '<YOUR-CLOUD>', upload_preset: '<YOUR-UPLOAD>', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
           
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = '<YOUR-URL>' + id;
            document.querySelector('#imagePreview').src = imagenUrl;
          console.log(imagenUrl);
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}