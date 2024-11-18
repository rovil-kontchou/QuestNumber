import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();

  const number = document.querySelector('#number').value;
  console.log('number entered...', number);

  const random = Math.floor(Math.random() * 10);
  console.log('random number...', random);
  
    let score = document.querySelector('#score');
  
    let counter = parseInt(score.textContent);


    function compare(){
      if(number == random){
        console.log('goood...');
        counter += 1;
        document.querySelector('#score').innerHTML = counter;
      }else{
        console.log('bad....')
        counter -= 1; 
        document.querySelector('#score').innerHTML = counter;
      }
    };

    compare();

});

