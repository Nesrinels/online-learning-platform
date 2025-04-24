// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(true);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  toggleTheme() {
    const newValue = !this.isDarkTheme.value;
    this.isDarkTheme.next(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  }

  initialize() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialValue = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    this.isDarkTheme.next(initialValue);
  }
}