import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    valor: new FormControl('1'),
    moedaescolhida1: new FormControl('dolar'),
    moedaescolhida2: new FormControl('real')
  });

  options = [
    {value: 'real', label: 'Real'},
    {value: 'dolar', label: 'Dólar'}];

  resultado = 0.0;

  constructor() { }

  ngOnInit() {
  }

  Converte(){
    if(this.form.value.moedaescolhida1 == 'dolar' && this.form.value.moedaescolhida2 == 'real'){
      this.resultado = Number(this.form.value.valor) * 5.6556
    }
    if(this.form.value.moedaescolhida1 == 'real' && this.form.value.moedaescolhida2 == 'dolar'){
      this.resultado = Number(this.form.value.valor) * 0.1767971
    }
  }

  changeOption(){
    const moeda1 = this.form.get('moedaescolhida1')?.value || 'dolar';
    const moeda2 = this.form.get('moedaescolhida2')?.value || 'real';
    this.form.get('moedaescolhida1')?.setValue(moeda2);
    this.form.get('moedaescolhida2')?.setValue(moeda1);
  }

}
