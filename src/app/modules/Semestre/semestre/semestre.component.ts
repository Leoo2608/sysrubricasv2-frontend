import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Semestre } from 'src/app/modules/Semestre/models/semestre';
import { SemestreService } from 'src/app/modules/Semestre/services/semestre.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {
  semestre: Semestre[];
  constructor(public semestreService: SemestreService) { }

  ngOnInit(): void {  
    this.getSemestre();
  }


  getSemestre() {
    this.semestreService.getSemestres().subscribe(
      (data) => {
        this.semestreService.semestre = data['cursor_semestres'] as Semestre[];
      }
    );
    }
    addSemestre(form: NgForm){
        console.log("hola mundo");
        console.log(form.value)
      this.semestreService.addSemestre(form.value).subscribe(
        (res)=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado!',
            showConfirmButton: false,
            timer: 1500
          })
          this.getSemestre();

        }

      )


    }


}

