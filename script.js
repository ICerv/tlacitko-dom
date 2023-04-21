console.log('funguju!');
//ZADANI
/*
Pomocí vlastních DOM elementů přidáme na stránku několik tlačítek.

Založte si nový projekt příkazem

npm init kodim-app cviceni-tlacitko html-css-js
Otevřete si ve VS Code vytvořenou složku cviceni-tlacitko.

Vytvořte si jednoduchou stránku obsahující nám tak dobře známý element #app.

<body>
  <div id="app"></div>
</body>
Otevřete si konzoli prohlížeče a pomocí funkce document.createElement si do nějaké proměnné vytvořte tlačítko button.

Nastavte tomuto tlačítku textContent na „Mačkej“.

Přidejte na tlačítko CSS třídu btn.

Vyberte ze stránky element #app a vložte tlačítko na stránku pomocí metody append.

Stejným postupem přidejte na stránku ještě další dvě tlačítka s různými nápisy a sledujte, kam do stránky se vložila.
*/

const buttonElm = document.createElement('button');
buttonElm.textContent = "Mačkej";
buttonElm.classList.add('btn');

document.querySelector('#app').append(buttonElm);



const buttonSend = document.createElement('button');
buttonSend.textContent = "Send";
buttonSend.classList.add('btn__send');

document.querySelector('#app').append(buttonSend);


const buttonDelete = document.createElement('button');
buttonDelete.textContent = "Delete";
buttonDelete.classList.add('btn__delete');

document.querySelector('#app').append(buttonDelete);

