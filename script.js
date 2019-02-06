const formachka = document.querySelector('.form');
const submitText = document.querySelector('input[type=text]');
const submit = document.querySelector('input[type=submit]');
const output = document.querySelector('.output');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = submitText.value;
    output.appendChild(li);
    submitText.value = '';
});

// changhed form to formachka
