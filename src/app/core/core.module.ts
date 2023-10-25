import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
const materialModules = [MatTableModule];
@NgModule({
  imports: [CommonModule, HttpClientModule, materialModules],
  exports: [materialModules],
})
export class CoreModule {}
