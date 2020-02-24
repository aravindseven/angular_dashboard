import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-listvideos',
  templateUrl: './listvideos.component.html',
  styleUrls: ['./listvideos.component.scss']
})
export class ListvideosComponent implements OnInit {
  p: number = 1;
  videos = [];
  data = [];
  selectedVideo: any = 0
  folderArray: any = []
  public backDefault = false
  constructor(private route: ActivatedRoute, private router: Router,private apiService: ApiService) {
  
    }
  
  ngOnInit()
  {
    this.getVideos()
  }

  public getVideos(){
    const params: any = {};
    this.apiService.post('videos', params).subscribe((data: any) => {
      console.log(data)
      if(data.status == 200)
      {
          this.data = data.data
          let videoarray: any = this.data
          for(let i=0;i<videoarray.length;i++)
          {
              if(videoarray[i].default == 1)
              {
                this.videos.push(videoarray[i])
              }
              else{
                let tempflag = 0
                for(let j=0;j<this.folderArray.length;j++)
                {
                  if(this.folderArray[j] == videoarray[i].foldername)
                  {
                      tempflag = 1
                      break
                  }
                }
                if(tempflag == 0)
                {
                  this.folderArray.push(videoarray[i].foldername)
                }
              }
          }
          
      }
    });
  }

  public backToDefault(foldername)
  {
      this.backDefault = false
      this.processVideoList(foldername)
  }

  public folderchange(foldername)
  {
      this.backDefault = true
      this.processVideoList(foldername)
  }

  public processVideoList(foldername)
  {
      this.videos = []
      let videoarray: any = this.data
      for(let i=0;i<videoarray.length;i++)
      {
          if(foldername == "default")
          {
            if(videoarray[i].default == 1)
            {
              this.videos.push(videoarray[i])
            }
          }
          if(foldername == videoarray[i].foldername)
          {
             this.videos.push(videoarray[i])
          }
          
      }
  }

  // public runInference()
  // {
  //   if(this.selectedVideo == 0)
  //   {
  //     alert("please select any video")
  //     return
  //   }
  
  //   this.router.navigate(['/video',this.selectedVideo.filepath])
  // }

  // public live(){
  //   this.router.navigate(['./live']);
  // }

  public onSelect(item: any) {
    this.videos.forEach( (i) => i.active = false );
    item.active = true;
    this.selectedVideo = item
  }

  

}
