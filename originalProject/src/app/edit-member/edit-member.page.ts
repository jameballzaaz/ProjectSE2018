import { Component, OnInit } from '@angular/core';
import { UserAccountService, UserAccount } from '../user.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.page.html',
  styleUrls: ['./edit-member.page.scss'],
})
export class EditMemberPage implements OnInit {

  userAccount : UserAccount[];

  constructor(private userAccountService : UserAccountService) { }

  ngOnInit() {
    this.userAccountService.getuser().subscribe(
      res => {
        this.userAccount = res;
      }
    );
  }
  deleteuser(item){
    return this.userAccountService.deleteuser(item.id)
  }

}
