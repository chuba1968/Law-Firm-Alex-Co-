import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private socialSharing: SocialSharing,
    public alertController: AlertController) { }

  ngOnInit() {

  }
  showAlert() {

    this.alertController.create({
      header: 'OTHER AREAS',
      cssClass:'my-custom-class',
      subHeader: '',
      message: 'Banking and finance, Law of Insurance, Medical Law, Civil & Criminal litigation, political disputes, Commercial law etc',
      buttons: ['close']
    }).then(res => {

      res.present();

    });
  }

async sShare(){
    var options = {
      message: 'Download the Mobile App',
      url: 'https://play.google.com/store/apps/details?id=Hon.Amujiogu.chambers',
    };
this.socialSharing.shareWithOptions(options);
  }


  whatsapp() {
    { window.open('https://wa.me/+2347037705639'); }
  }

}
