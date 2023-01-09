if(sessionStorage.getItem('name') == null){
          let a = prompt('enter your name');
          sessionStorage.setItem('name', a);
        }
        document.getElementsByClassName('heading')[0].innerText = sessionStorage.getItem('name');
        