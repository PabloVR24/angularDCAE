import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideMenuComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SharedModule {}
