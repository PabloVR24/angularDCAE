import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/hero-interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [],
})
export class ConfirmComponent implements OnInit {
  borrar() {
    this.dialogReg.close(true);
  }
  cancelar() {
    this.dialogReg.close();
  }
  constructor(
    private dialogReg: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}
  ngOnInit(): void {}
}
