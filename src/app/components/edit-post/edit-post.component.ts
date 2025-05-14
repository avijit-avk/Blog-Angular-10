import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  id?: number;
  title?: string;
  content?: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parameters) =>
      this.postService.getPost(parameters.id).subscribe((retrivedPost) => {
        this.id = retrivedPost.id;
        this.title = retrivedPost.title;
        this.content = retrivedPost.content;
      })
    );
  }

  onSubmit(): void {
    const updatePost = {
      id: this.id,
      title: this.title,
      content: this.content,
    };
    this.postService.editPost(updatePost).subscribe(() => this.router.navigate(['/blog']))
  }
}
