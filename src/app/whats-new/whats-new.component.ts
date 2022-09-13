import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public firstTileContent = `Reactive Netscape cherry pick domain contribution lazy Edge program.
        Quick sort modern bundle incognito Cloudfront views CLI Safari UX.`;
  public secondTileContent = `Lazy reflog freelancer Dijkstra directed acyclic graph concurrent uglify concurrency Safari.
        Interface MacBook coding idiosyncratic contexts package manager yarn hashtable concurrent homebrew.`;
  public thirdTileContent = `Senior-engineer Edge backend UI subclass tech debt duck typing merge sort lazy.
        Asynchronous dependency injection engineer tree shaking lang architecture Linux infrastructure queue off-by-one error.`;
  public fourthTileContent = `Infrastructure tl;dr spy data store remote procedure call bootcamp pairing child keycaps.
        Grep kernel contribute UI casting composition over inheritance remote minification void.`;
}
