import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';








const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatSortModule,
  MatPaginatorModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
