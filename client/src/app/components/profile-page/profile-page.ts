import {Component, inject, OnInit} from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage implements OnInit{

  constructor(private keycloak: Keycloak) {
  }

  ngOnInit() {
    const profile = this.keycloak.loadUserProfile();
    profile.then(user => console.log(user));
  }
}
