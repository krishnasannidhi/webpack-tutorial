   import './styles.css'
   import Logo from './webpackLogo.png'
   import DataXML from './data.xml'
   
   const  appContainerElement = document.getElementById("appContainer")
   const myLogo = new Image();
   myLogo.src = Logo;


   appContainerElement.innerHTML= 'Welcome to webpack  tutorial ';
   appContainerElement.classList.add('hello');
   appContainerElement.appendChild(myLogo);
   


   
