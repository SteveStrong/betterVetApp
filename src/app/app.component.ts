import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the better Vet App';
  data = {};
  list = ['Tobias', 'Lina'];
  vetpara = [
    {
      evidence: 'The Board acknowledges that the record includes diagnoses of PTSD.'
    },
    {
      reasoning: 'The records reflecting diagnoses of PTSD do not reveal an explanation as to how the Veteran met the criteria for PTSD, however; as such, the Board finds the diagnoses have limited probative value.'
    },
    {
      reasoning: `In contrast, the Board finds the VA examiners' and other medical professionals' determinations that the Veteran does not have PTSD are highly probative as the determinations are supported by detailed explanation for why the diagnosis was not proper and are based on findings consistent with the medical records.`
    },
    {
      reasoning: 'The Board finds the probative value of the findings of no PTSD outweighs the probative value of the findings of PTSD.'
    },
    {
      finding: 'Thus, the Board finds the Veteran does not have PTSD.'
    }
  ]

}
