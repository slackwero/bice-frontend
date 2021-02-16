import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  public feed: any[];
  public cobre: string = "";

  constructor( private feedService: FeedService) { }

  ngOnInit(): void {

    this.feedService.cargarFeedIndecon()
      .subscribe( (resp) => {
        this.feed = Object.entries(resp)
        console.log(this.feed);
       })

  }

}
