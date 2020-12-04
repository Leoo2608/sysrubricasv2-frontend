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
    if(this.router.url==='/posts' || this.router.url==='/moduloconfig/linea/listar'
    || this.router.url==='/moduloconfig/plan/listar'){
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
}
