import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Plant } from './shared/Plants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  plantControl = new FormControl('', Validators.required);
  customerControl = new FormControl('', Validators.required);
  brandControl = new FormControl('', Validators.required);
  channelControl = new FormControl('', Validators.required);
  title = "";
  selectPlant = "";
  selectCustomer = "";
  selectBrand = "";
  selectChannel = "";
  selectedPlant = "";
  selectedCustomer = "";
  selectedChannel = "";
  selectedBrand = "";
  displayChannel = "";
  displayBrand = "";
  displayCustomer = "";
  displayPlant = "";


  plants: Plant[] = [
    {
      name: 'Plant-1',
      Customer_No: ['Cu1', 'Cu2', 'Cu3'],
      Brand: ['P1B1', 'P1B2', 'P1B3'],
      Channel: ['P1CH1', 'P1CH2', 'P1CH3']
    },
    {
      name: 'Plant-2',
      Customer_No: ['Cu4', 'Cu5', 'Cu6'],
      Brand: ['P2B1', 'P2B2', 'P2B3'],
      Channel: ['P2CH1', 'P2CH2', 'P3CH3']
    },
    {
      name: 'Plant-3',
      Customer_No: ['Cu7', 'Cu8', 'Cu9'],
      Brand: ['P3B1', 'P3B1', 'P3B1'],
      Channel: ['P3CH1', 'P3CH2', 'P3CH3']
    }
  ];
  onPlantChange(event: any) {
    console.log("selectedPlant : ", event.value);
    this.selectedPlant = event.value.name;
    this.selectCustomer = event.value.Customer_No;
    this.selectBrand = event.value.Brand;
    this.selectChannel = event.value.Channel;
  }
  onSubmit(event: any) {
    console.log("submit event", event.value);
    this.displayChannel = this.selectedChannel;
    this.displayBrand = this.selectedBrand;
    this.displayCustomer = this.selectedCustomer;
    this.displayPlant = this.selectedPlant
   
  }
}
