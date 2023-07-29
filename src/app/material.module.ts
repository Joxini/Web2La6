import { NgModule } from "@angular/core";
import { MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
const lista = [MatTableModule,
    MatFormFieldModule,MatCardModule,MatInputModule

]
@NgModule({
    //los ... es para meter los elementos de la lista
    exports: [...lista],
    imports: [...lista],
  })
  export class MaterialModule {}