import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  private imageArray: string[] = [];

  constructor() {
    this.addLocalImages();
  }

  addLocalImages() {
    this.imageArray.push(
      'https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/305318424_426721176195294_8311959113549473443_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=v3mm2CCA3zYQ7kNvgEZsbaz&_nc_ht=scontent-gru2-1.xx&_nc_gid=Af4SD57e_VvYNgVKSYm1KvV&oh=00_AYBalwqqIefpCIb-Os5L4lUIGUrViI8JdRCwj_LzP3sWqg&oe=670B8408',
    );
    this.imageArray.push(
      'https://scontent.fubt3-1.fna.fbcdn.net/v/t1.6435-9/187636801_121062730094475_8372818558557788982_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=2OrgRSDQ3KsQ7kNvgF375YW&_nc_ht=scontent.fubt3-1.fna&_nc_gid=ASiT6BfEHarXGonlAlpvS3q&oh=00_AYDlA_nfIwWwmJf6dJGhjISp-73fVdEwadN98TUqvmD54w&oe=672D24B9',
    );
  }

  getInstagramPost() {
    return this.imageArray;
  }
}
