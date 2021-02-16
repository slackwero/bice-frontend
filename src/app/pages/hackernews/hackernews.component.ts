import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styles: [
  ]
})
export class HackernewsComponent implements OnInit {

  public feed: any[];

  constructor( private feedService: FeedService) { }

  ngOnInit(): void {

    this.feedService.cargarFeedHackerNews()
    .subscribe( (resp) => {
      this.feed = Object.entries(resp)
      console.log(this.feed);
     })

  }

}