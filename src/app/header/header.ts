import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {


  count:number = 0

  navclasstoggle:string = ''
  

  toggleEvent(){
    this.count ++

    if (this.count % 2 === 0) {
      this.navclasstoggle = ""
    } else {
      this.navclasstoggle = "toggle_active"
    }
    

    console.log(this.navclasstoggle);
    
  }
  
  

  ngOnInit(){

    document.addEventListener("scroll", () => {

      if (window.scrollY > 5) {
        document.querySelector(".header_nav")?.classList.add("active")
      } else{
        document.querySelector(".header_nav")?.classList.remove("active")
      }
      
      
    })
    
  }
  
}
interface OnInit {
  ngOnInit(): void;
}