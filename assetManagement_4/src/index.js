   import './styles.css'
   import Logo from './webpackLogo.png'
   
   const  appContainerElement = document.getElementById("appContainer")
   const myLogo = new Image();
   myLogo.src = 'dist/'+Logo;


   appContainerElement.innerHTML= 'Welcome to webpack  tutorial ';
   appContainerElement.classList.add('hello');
   appContainerElement.appendChild(myLogo);


   
