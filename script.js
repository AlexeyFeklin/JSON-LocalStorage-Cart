let form = document.querySelector('.formCallBack');

form.addEventListener('submit', e =>{
    e.preventDefault();
    window.localStorage.setItem('name', document.querySelector('.nameInput').value);
    window.localStorage.setItem('phone', document.querySelector('.phoneInput').value);
    window.localStorage.setItem('mail', document.querySelector('.mailInput').value);

    let output = document.createElement('span');
    output.textContent = 'localStorage' + '\nname: ' + window.localStorage.getItem('name') + '\nphone: ' + window.localStorage.getItem('phone') + '\nmail: ' + window.localStorage.getItem('mail');
    document.querySelector('.wrapper').appendChild(output);

    let data  = {
        'name' : String(document.querySelector('.nameInput').value),
        'phone' : String(document.querySelector('.phoneInput').value),
        'mail' : String(document.querySelector('.mailInput').value),
    };

    console.log(data);
    
    let JSONdata = JSON.stringify(data);
    console.log(JSONdata);
});

