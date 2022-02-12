import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private static darkMode: boolean = false;

  constructor() { }

  static isDarkModeActive(): boolean {
    return this.darkMode;
  }

  static toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    let element = document.getElementById("html");

    if (element !== null && this.darkMode)
      element.className = "dark"
    else
      element ? element.classList.remove("dark") : null;

  }
}
