import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-ppedetectionstream',
  templateUrl: './ppedetectionstream.component.html',
  styleUrls: ['./ppedetectionstream.component.scss']
})
export class PpedetectionstreamComponent implements OnInit {
  
  public imagePath=""
  fileName: string;
  paramaters:any= 0

  public personthreshold = 0

  public ppethreshold = 0

  public constructor(private apiService: ApiService,private route: ActivatedRoute,private router: Router) {
      
  }

  public ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      this.paramaters = params
      this.fileName = this.paramaters.params.filename
    });
    this.getThreshold()
    this.startStream()
  }

  public backpages(flag){
    const params: any = {};
      this.apiService.post('stopvideo',params).subscribe((data: any) => {
        console.log(data)
        if (data.status === 200) {
          if(flag == 1)
          {
            // this.router.navigate(['./live']);
          }
          else{
            // this.router.navigate(['./videos']);
          }
          
        } else {
          console.log('Failed :', data);
        }
      });
  }

  public getThreshold()
  {
    const params: any = {};
    this.apiService.post('getthreshold',params).subscribe((data: any) => {
      console.log(data)
      if (data.status === 200) {
        this. personthreshold = data.personthreshold
        this.ppethreshold = data.ppethreshold
      } else {
        console.log('Failed :', data);
      }
    });
  }
  
  public restartStream(){
    const params: any = {};
    params.person_threshold = this.personthreshold
    params.ppe_threshold = this.ppethreshold
    this.apiService.post('updatethreshold',params).subscribe((data: any) => {
      console.log(data)
      if (data.status === 200) {
        this.startStream()
      } else {
        console.log('Failed :', data);
      }
    });
  }
  
  
  public startStream(){
    this.imagePath = "http://127.0.0.1:5002/video_feed/"+this.fileName
    
  }
}
