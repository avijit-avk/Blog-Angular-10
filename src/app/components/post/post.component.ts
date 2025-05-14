import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post1: any;
  @Output() onDeletePost : EventEmitter<any> = new EventEmitter<any>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onDelete() {
    this.onDeletePost.emit();
  }

}
