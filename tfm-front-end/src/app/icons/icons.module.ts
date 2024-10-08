import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, BarChart2, FilePlus, Trash2, Thermometer, Hexagon, Plus, Map } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  BarChart2,
  FilePlus,
  Trash2,
  Thermometer,
  Hexagon,
  Plus,
  Map
  
  
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
