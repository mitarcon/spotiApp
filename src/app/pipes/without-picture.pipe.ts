import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutPicture'
})
export class WithoutPicturePipe implements PipeTransform {

  transform(value: any[]): string {

    let noImage: string = "assets/img/noimage.png";

    if( !value ){
      return noImage;
    }else{
      return ( value.length > 0 ) ? value[1].url : noImage;
    }
  }

}
