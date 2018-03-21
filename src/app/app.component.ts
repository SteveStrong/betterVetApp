import { Component } from '@angular/core';

import { foFileManager } from "./filemanager";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the better duyufuyf Vet App';
  data = {};
  list = ['Tobias', 'Lina', 'Eli'];
  vetpara = [
    {
      type: 'evidence',
      text: 'The Board acknowledges that the record includes diagnoses of PTSD.'
    },
    {
      type: 'reasoning',
      text: 'The records reflecting diagnoses of PTSD do not reveal an explanation as to how the Veteran met the criteria for PTSD, however; as such, the Board finds the diagnoses have limited probative value.'
    },
    {
      type: 'reasoning',
      text: `In contrast, the Board finds the VA examiners' and other medical professionals' determinations that the Veteran does not have PTSD are highly probative as the determinations are supported by detailed explanation for why the diagnosis was not proper and are based on findings consistent with the medical records.`
    },
    {
      type: 'reasoning',
      text: 'The Board finds the probative value of the findings of no PTSD outweighs the probative value of the findings of PTSD.'
    },
    {
      type: 'finding',
      text: 'Thus, the Board finds the Veteran does not have PTSD.'
    }
  ]

  transform() {
    return `${this.title}  Hello, Steve`;
  }

  transformvet() {
    let result = [];
    this.vetpara.forEach(function (item) {
      let transformedtext = item.text;
      let replaced = transformedtext.replace(/The Board/i, "<b>The Board</b>");
      let xxx = {
        type: item.type,
        text: item.text,
        upper: item.text.toUpperCase(),
        ttext: replaced
      }
      result.push(xxx);
    });
    return result;
  }

  dofileopen(){
    let xxx = new foFileManager();
    xxx.userOpenFileDialog( file => {
      alert('just opebed' + file.filename)
    })
    console.log("hello, buddy")
  }

  dofilesave(){
    let xxx = new foFileManager();
    xxx.writeTextFileAsync(this.transformvet(),'testtransform','.txt',file => {
      alert('just saved' + file.filename);
      console.log("you saved it, buddy")
    })
  }

}
