const fileInput = document.querySelector('#file-input');
const fileInputContainer = document.querySelector('.input-img');

// Настройка drag drop
var dropZone = $('.input-img');
dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
    return false;
});

dropZone.on('dragover dragenter', function() {
    dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
    dropZone.removeClass('dragover');
});

dropZone.on('dragleave', function(e) {
    let dx = e.pageX - dropZone.offset().left;
    let dy = e.pageY - dropZone.offset().top;
    if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
         dropZone.removeClass('dragover');
    };
});

dropZone.on('drop', function(e) {
    dropZone.removeClass('dragover');
    let files = e.originalEvent.dataTransfer.files;
    showFile(files);
});

$('#file-input').change(function() {
    let files = this.files;
    showFile(files);
});

function showFile(files) {
    let i = 0;
    for (let f; f = files[i]; i++) {
        // Проверяем, что это картинка
        if (!f.type.match('image.*')) continue;
        let fr = new FileReader();
        fr.onload = (function(theFile) {
            return function(e) {
            let div = document.createElement('div');
            div.classList.add('photo-box');
            div.style.backgroundImage = `url('${e.target.result}'`;
            document.querySelector('.photos-download').prepend(div);
        };
      })(f);
 
      fr.readAsDataURL(f);
    }
    
    // Добавили недостающие элементы (загрузка фото еще)
    if (files.length < 4) {
        let n = files.length;
        while (n < 4) {
            let div = document.createElement('div');
            div.classList.add('input-img');
            div.classList.add('input-img__empty');
            div.innerHTML = '<input type="file" id="file-input" name="file"> <label for="file-input"></label>';
            document.querySelector('.photos-download').insertBefore(div, null);
            n++;
        }
    }
    fileInputContainer.classList.add('hide');
    nextBtn.classList.remove('hide');

}

fileInput.addEventListener('change', showFile, false);

const nextBtn = document.querySelector('.next-btn.img');

// Скрываем кнопку в начале
nextBtn.classList.add('hide');

nextBtn.addEventListener('click', () => {
    // Удаляем все незаполненные слоты
    const photosDownload = document.querySelector('.photos-download');
    const photoText = document.querySelector('.photo-input__descr');
    const emptyPhotos = document.querySelectorAll('.input-img__empty');
    emptyPhotos.forEach(elem => {
        elem.classList.add('hide');
    });
    photosDownload.classList.add('vertical');
    photoText.classList.add('hide');
    nextBtn.classList.add('hide');
});