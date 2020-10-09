const inputs = document.querySelectorAll('.code-input__number');

inputs.forEach(elem => {
    elem.addEventListener('keyup', (event) => {
        const target = event.target;
        const value = target.value;
        const valLen = value.length;

        const curTabIndex = parseInt(target.getAttribute('tabindex'));
        const nextTabIndex = curTabIndex + 1;
        const prevTabIndex = curTabIndex - 1;

        if (nextTabIndex <= inputs.length) {
            inputs[nextTabIndex-1].focus();
        }
    
        if (valLen > 1) {
            target.value = value.substr(0, 1);
    
            // Перемещаем фокус на нужный таб
            if (nextTabIndex <= inputs.length) {
                inputs[nextTabIndex-1].focus();
            }
        // Подумать по логике работы
        // Проблемы, когда убирается 1 число в центре
        } else if (valLen === 0 && prevTabIndex !== 0) {
            inputs[prevTabIndex-1].focus();
        }
    });
});