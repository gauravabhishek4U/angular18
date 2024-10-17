import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  
  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = false;

  showDiv1(){
    this.isDiv1Visible = true
  }

}
