window.onload = function () {
    let seletor = document.querySelector('#seletor');
    seletor.addEventListener('change', function () {
        let selectedItem = seletor.selectedOptions[0];
        document.body.style.backgroundColor = selectedItem.value;
      // salvando preferencias
        localStorage.setItem('backgroundColor', selectedItem.value);
        let savedbackGroundColor = localStorage.getItem('backgroundColor');
        document.body.style.backgroundColor = savedbackGroundColor;
    })
}
