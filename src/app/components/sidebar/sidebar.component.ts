import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    subMenu?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '', title: 'Master',  icon:'person', class: '',
    subMenu: [
      { path: '/customer', title: 'customer', icon: '...', class: '' },
      { path: '/supplier', title: 'supplier', icon: '...', class: '' },
      // Add more submenus as needed
    ] },
    { path: '/table-list', title: 'Order Entry',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Payment Plan',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Production',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'InTransit',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Customer Clearance',  icon:'notifications', class: '' },
    { path: '/icons', title: 'Product Costing',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Download letter',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Reports',  icon:'notifications', class: '' },
    { path: '/icons', title: 'User Management',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Logout',  icon:'location_on', class: '' },
   ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  activeIndex: number = -1;
  activeSubMenuIndex: number = -1;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  
  toggleMainMenu(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

  toggleSubMenu(index: number) {
    if (this.activeSubMenuIndex === index) {
      this.activeSubMenuIndex = -1;
    } else {
      this.activeSubMenuIndex = index;
    }
  }

  isMainMenuActive(index: number) {
    return this.activeIndex === index;
  }

  isSubMenuActive(index: number) {
    return this.activeSubMenuIndex === index;
  }
}
