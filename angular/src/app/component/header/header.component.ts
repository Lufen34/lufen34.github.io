import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  applyDarkMode() {
    SettingsService.toggleDarkMode();
  }

  applyPicture(): string {
   return SettingsService.isDarkModeActive() ? 'assets/me_black_theme.png' : 'assets/me_white_theme.png';
  }
}
