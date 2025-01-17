interface Post {
  date: string;
  title: string;
  description: string;
  img: string;
}

export interface BlogUIProps {
  posts: Post[];
}
