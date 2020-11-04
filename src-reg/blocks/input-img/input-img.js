const fileInput = document.querySelector('#file-input');

function showFile(e) {
    console.log(e.target.files);
    let files = e.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        // Проверяем, что это картинка
        if (!f.type.match('image.*')) continue;
        let fr = new FileReader();
        fr.onload = (function(theFile) {
            return function(e) {
            let div = document.createElement('div');
            div.classList.add('photo-box');
            div.style.backgroundImage = `url('${e.target.result}'`;
            document.querySelector('.photos-download').insertBefore(div, null);
        };
      })(f);
 
      fr.readAsDataURL(f);
    }
    }

fileInput.addEventListener('change', showFile, false);