import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    Swal.fire(
      'User Logout',
      'Logout Successfully',
      'success'
    )
    this.router.navigate(['login'])
  }
}
