import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'registered_users';  // Changed to store multiple users
  private readonly CURRENT_USER_KEY = 'current_user';

  constructor(private router: Router) {}

  // Signup - stores user in registered users list
  signup(name: string, email: string, password: string): boolean {
    try {
      const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password,
        createdAt: new Date().toISOString()
      };

      // Get existing users or empty array
      const existingUsers = this.getRegisteredUsers();
      
      // Check if email already exists
      if (existingUsers.some(user => user.email === newUser.email)) {
        console.warn('Email already registered');
        return false;
      }

      // Add new user and save
      existingUsers.push(newUser);
      localStorage.setItem(this.USERS_KEY, JSON.stringify(existingUsers));
      
      // Auto-login after signup
      this.setCurrentUser(newUser);
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  }

  // Login - checks against registered users
  login(email: string, password: string): boolean {
    try {
      const users = this.getRegisteredUsers();
      const user = users.find(u => 
        u.email === email.trim().toLowerCase() && 
        u.password === password
      );

      if (user) {
        this.setCurrentUser(user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  // Helper to get all registered users
  private getRegisteredUsers(): any[] {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  // Set currently logged in user
  private setCurrentUser(user: any): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.CURRENT_USER_KEY);
  }

  // Logout - clears only current session
  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    this.router.navigate(['/login']);
  }

  // Get current user data (optional)
  getCurrentUser(): any | null {
    const userJson = localStorage.getItem(this.CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }
}