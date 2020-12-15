import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // ------------------------------------------------------- //
    // Sidebar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');

      $('.side-navbar').toggleClass('shrinked');
      $('.content-inner').toggleClass('active');
      $(document).trigger('sidebarChanged');

      console.log('Estoy funcando')

      if ($(window).outerWidth() > 1183) {
          if ($('#toggle-btn').hasClass('active')) {
            console.log('Entrando en primer IF')
              $('.navbar-header .brand-small').hide();
              $('.navbar-header .brand-big').show();
          } else {
            console.log('Entrando en primer IF ELSE')
              $('.content-inner').toggleClass('active');
              $('.navbar-header .brand-small').show();
              $('.navbar-header .brand-big').hide();
          }
      }

      if ($(window).outerWidth() < 1183) {
        console.log('Entrando en segundo IF')
          $('.navbar-header .brand-small').show();
      }
  });
  }

  isModConf():boolean{
    if(this.router.url==='/moduloconfig' || this.router.url==='/moduloconfig/lineas'
    || this.router.url==='/moduloconfig/planes' || this.router.url==='/moduloconfig/planlineas'
    || this.router.url==='/moduloconfig/competenciasniveles' || this.router.url==='/moduloconfig/semestres'){
      return true;
    }else{
      return false;
    }
  }
  isHome():boolean{
    if(this.router.url==='/'){
      return true;
    }else{
      return false;
    }
  }
  isModPlan():boolean{
    if(this.router.url==='/moduloplan'){
      return true;
    }else{
      return false;
    }

  }
  isModEje():boolean{
    if(this.router.url==='/moduloeje'){
      return true;
    }else{
      return false;
    }
  }
  isModInf():boolean{
    if(this.router.url==='/moduloinf'){
      return true;
    }else{
      return false;
    }
  }
  isModSeg():boolean{
    if(this.router.url==='/moduloseg'){
      return true;
    }else{
      return false;
    }
  }
}

