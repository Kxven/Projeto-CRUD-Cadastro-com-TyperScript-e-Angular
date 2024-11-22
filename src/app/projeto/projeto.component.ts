import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {
  //Objeto de formulário
  formulario = new FormGroup({
      nome   : new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade  : new FormControl(null,[Validators.required, Validators.min(0), Validators.max(120)]),
      cidade : new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  //Visibilidade dos botões
  btnCadastrar:boolean = true;
  //Vetor
  vetor:Pessoa[] = [];

  //Armazenamento de índice
  indice:number = -1;
  //Função de cadastro
  cadastrar(){
    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);
    // Limpeza dos inputs
    this.formulario.reset();
    // Visualização via console
    // console.table(this.vetor);
  }

  //Função de seleção
  selecionar(indice:number){
    //atribuir o índice da pessoa
    this.indice = indice;
    //atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    });
    //Visibilidade dos botões
    this.btnCadastrar = false;
  }

  alterar(){
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpar os inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Remover
  remover(){
    // Removendo uma pessoa do vetor
    this.vetor.splice(this.indice, 1);

    // limpeza dos inputs
    this.formulario.reset();

    // visibilidade dos botoes
    this.btnCadastrar = true;
  }
  // Função de cancelamento
  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
