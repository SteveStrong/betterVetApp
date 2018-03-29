import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(html) {
    let result = this.sanitizer.bypassSecurityTrustHtml(html);
    return result;
  }

}
