import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  tableData: any[] = [];
  tableHeading: any[] = ["S.No", "Name", "Email ID", "Phone Number", "Company Name"];
  loadingText: string = "Loading...";
  noData: string = "No data found !";
  searchText: string = "";
  searchClicked: boolean = false;

  constructor(private dashboardService:DashboardService) {}

  ngOnInit(){
    this.getDashboardData()
  }

  getDashboardData(){
    this.dashboardService.fetchDashboardData().subscribe((res:any) => {
      if(res){
        console.log(res);
        
        this.tableData = res;
      }
      
    })
  }

  resetData(){
    if(this.searchClicked && this.searchText == ""){
      this.getDashboardData();
    }
  }

  enterHit(event:any){    
    if(event.keyCode == 13){    // This keycode 13 represents Enter key
      this.searchViaText();
    }
  }

  searchViaText(){
    this.searchClicked = true;
    this.tableData = this.tableData.filter((data:any) => {
      if(data.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
       data.email.toLowerCase().includes(this.searchText.toLowerCase())){
        return data;
      }
    })
    console.log(this.searchText, this.tableData);
    
  }
}
