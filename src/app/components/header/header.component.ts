import { Component, OnInit } from '@angular/core';

import { NavItem } from './nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeTab = 0;
  navItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navItems = [
      { text: 'Home', routerLink: '' },
      { text: 'Features', routerLink: '/features' },
      { text: 'Pricing', routerLink: '/pricing' },
    ];

    this.activeTab = this.navItems.map(item => item.routerLink).indexOf(location.pathname);

  }

  onTabClick(i: number) {
    this.activeTab = i;
  }
}
