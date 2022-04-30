import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public token: string = "";
  public user_type: string = "";
  constructor(private cookieService: CookieService, private apiService: ApiService) { }
  loading = true;
  ngOnInit(): void {
    this.token = this.cookieService.get("AUTH_TOKEN");
    this.apiService.getUserType(this.token).subscribe(
      (data:any) => { this.user_type = data.user_type; this.loading = false; },
    );
  }
  


}
